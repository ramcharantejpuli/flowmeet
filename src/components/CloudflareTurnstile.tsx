import React, { useEffect, useRef } from 'react';

interface CloudflareTurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
}

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: any) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = 'light',
  size = 'normal'
}) => {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile && turnstileRef.current) {
        // Clear any existing widget first
        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
        }
        
        try {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              console.log('✅ Turnstile verification successful:', token);
              onVerify(token);
            },
            'error-callback': (error: any) => {
              console.error('❌ Turnstile verification failed:', error);
              onError?.();
            },
            'expired-callback': () => {
              console.log('⏰ Turnstile verification expired');
              onExpire?.();
            },
            theme,
            size,
            retry: 'auto',
            'retry-interval': 8000
          });
          console.log('Turnstile widget rendered with ID:', widgetIdRef.current);
        } catch (error) {
          console.error('Error rendering Turnstile widget:', error);
          onError?.();
        }
      }
    };

    // Load Cloudflare Turnstile script
    if (!window.turnstile) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = loadTurnstile;
      document.head.appendChild(script);
    } else {
      loadTurnstile();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [siteKey, onVerify, onError, onExpire, theme, size]);

  return <div ref={turnstileRef} className="flex justify-center" />;
};

export default CloudflareTurnstile;
