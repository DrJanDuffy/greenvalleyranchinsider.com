/**
 * RealScout Widget Utilities
 * Shared functions for loading and initializing RealScout widgets
 */

const REALSCOUT_SCRIPT_URL = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';

/**
 * Check if RealScout script is already loaded
 */
export function isRealScoutScriptLoaded(): boolean {
  if (typeof window === 'undefined') return false;
  return !!document.querySelector('script[src*="realscout-web-components"]');
}

/**
 * Check if a RealScout custom element is defined
 */
export function isRealScoutElementDefined(elementName: string): boolean {
  if (typeof window === 'undefined') return false;
  return customElements.get(elementName) !== undefined;
}

/**
 * Load RealScout script and wait for it to be ready
 */
export function loadRealScoutScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="realscout-web-components"]') as HTMLScriptElement;
    
    if (existingScript) {
      // Script exists, check if it's loaded
      // readyState is a legacy property, check safely
      const scriptElement = existingScript as HTMLScriptElement & { readyState?: string };
      const readyState = scriptElement.readyState;
      if (readyState === 'complete' || readyState === 'loaded') {
        resolve();
        return;
      }
      
      // If readyState not available or not loaded, wait for load event
      // Check if script is already loaded by checking if it has a src and is in the DOM
      if (scriptElement.src && scriptElement.parentNode) {
        // Script is in DOM, wait for load event or check after a short delay
        const checkLoaded = () => {
          if (customElements.get('realscout-home-value') || customElements.get('realscout-office-listings')) {
            resolve();
          }
        };
        
        // Check immediately
        checkLoaded();
        
        // Also listen for load event
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', () => reject(new Error('Failed to load RealScout script')));
        
        // Fallback: resolve after short delay if script is in DOM
        setTimeout(() => {
          if (scriptElement.parentNode) {
            resolve();
          }
        }, 100);
      } else {
        // Wait for existing script to load
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', () => reject(new Error('Failed to load RealScout script')));
      }
      return;
    }

    // Create and load new script
    const script = document.createElement('script');
    script.src = REALSCOUT_SCRIPT_URL;
    script.type = 'module';
    script.async = true;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load RealScout script'));
    
    document.head.appendChild(script);
  });
}

/**
 * Wait for a RealScout custom element to be defined
 */
export async function waitForRealScoutElement(elementName: string, maxAttempts = 20): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    if (isRealScoutElementDefined(elementName)) {
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  return false;
}

/**
 * Initialize a RealScout widget with proper error handling
 */
export async function initializeRealScoutWidget(
  container: HTMLElement,
  elementName: string,
  attributes: Record<string, string> = {},
  onLoad?: () => void
): Promise<void> {
  // Check if widget already exists
  if (container.querySelector(elementName)) {
    onLoad?.();
    return;
  }

  // Load script
  await loadRealScoutScript();

  // Wait for custom element to be defined
  const isDefined = await waitForRealScoutElement(elementName);
  if (!isDefined) {
    throw new Error(`RealScout element ${elementName} not defined after script load`);
  }

  // Create widget element
  const widget = document.createElement(elementName);
  
  // Set attributes
  Object.entries(attributes).forEach(([key, value]) => {
    widget.setAttribute(key, value);
  });

  // Add load listener
  if (onLoad) {
    widget.addEventListener('load', onLoad);
  }

  // Append to container
  container.appendChild(widget);
}

/**
 * RealScout Agent ID for Dr. Jan Duffy
 */
export const REALSCOUT_AGENT_ID = 'QWdlbnQtMjI1MDUw';
