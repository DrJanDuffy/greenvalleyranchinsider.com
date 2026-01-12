/**
 * Logger utility for consistent logging across the application
 * Provides structured logging with different log levels
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogOptions {
  level?: LogLevel;
  context?: string;
  data?: Record<string, any>;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isProduction = process.env.NODE_ENV === 'production';

  private formatMessage(level: LogLevel, message: string, options?: LogOptions): string {
    const timestamp = new Date().toISOString();
    const context = options?.context ? `[${options.context}]` : '';
    return `${timestamp} ${level.toUpperCase()} ${context} ${message}`;
  }

  private log(level: LogLevel, message: string, options?: LogOptions): void {
    const formattedMessage = this.formatMessage(level, message, options);
    const logData = options?.data ? { ...options.data } : undefined;

    // In production, only log errors
    if (this.isProduction && level !== 'error') {
      return;
    }

    switch (level) {
      case 'error':
        console.error(formattedMessage, logData || '');
        break;
      case 'warn':
        console.warn(formattedMessage, logData || '');
        break;
      case 'debug':
        if (this.isDevelopment) {
          console.debug(formattedMessage, logData || '');
        }
        break;
      case 'info':
      default:
        console.log(formattedMessage, logData || '');
        break;
    }

    // In production, send errors to error tracking service
    if (this.isProduction && level === 'error' && typeof window !== 'undefined') {
      // Add error tracking service integration here (e.g., Sentry, LogRocket)
      // Example: window.Sentry?.captureException(new Error(message), { extra: logData });
    }
  }

  info(message: string, options?: LogOptions): void {
    this.log('info', message, options);
  }

  warn(message: string, options?: LogOptions): void {
    this.log('warn', message, options);
  }

  error(message: string, error?: Error | unknown, options?: LogOptions): void {
    const errorData = error instanceof Error
      ? {
          message: error.message,
          stack: error.stack,
          name: error.name,
          ...options?.data,
        }
      : { error, ...options?.data };

    this.log('error', message, {
      ...options,
      data: errorData,
    });
  }

  debug(message: string, options?: LogOptions): void {
    this.log('debug', message, options);
  }
}

export const logger = new Logger();

// Convenience functions for common use cases
export const logError = (message: string, error?: Error | unknown, context?: string) => {
  logger.error(message, error, { context });
};

export const logInfo = (message: string, data?: Record<string, any>, context?: string) => {
  logger.info(message, { data, context });
};

export const logWarn = (message: string, data?: Record<string, any>, context?: string) => {
  logger.warn(message, { data, context });
};

export const logDebug = (message: string, data?: Record<string, any>, context?: string) => {
  logger.debug(message, { data, context });
};
