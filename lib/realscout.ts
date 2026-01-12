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
    const existingScript = document.querySelector('script[src*="realscout-web-components"]') as HTMLScriptElement | null;
    
    if (existingScript) {
      // Check if custom elements are already defined (best indicator script is loaded)
      if (customElements.get('realscout-home-value') || 
          customElements.get('realscout-office-listings') ||
          customElements.get('realscout-advanced-search')) {
        resolve();
        return;
      }
      
      // Script exists but elements not defined yet, wait for load
      // For module scripts, we check if they're in the DOM and wait a bit
      if (existingScript.parentNode) {
        // Script is in DOM, check if elements become available
        let attempts = 0;
        const checkInterval = setInterval(() => {
          attempts++;
          if (customElements.get('realscout-home-value') || 
              customElements.get('realscout-office-listings') ||
              customElements.get('realscout-advanced-search')) {
            clearInterval(checkInterval);
            resolve();
          } else if (attempts >= 20) {
            // After 2 seconds, resolve anyway (script might be loading)
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
      }
      
      // Also listen for load event as backup
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load RealScout script')), { once: true });
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
