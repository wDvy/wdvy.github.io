'use client';

import { useEffect } from 'react';

const EVENTBRITE_WIDGET_SRC = 'https://www.eventbrite.com/static/widgets/eb_widgets.js';

type EventbriteCreateWidgetOptions = {
  widgetType: 'checkout';
  eventId: string;
  iframeContainerId: string;
  iframeContainerHeight?: number;
  themeSettings?: {
    brandColor?: string;
  };
  onOrderComplete?: () => void;
};

type EventbriteCheckoutEmbedProps = {
  eventId: string;
  brandColor?: string;
  iframeContainerHeight?: number;
  iframeContainerId?: string;
  onOrderComplete?: () => void;
  className?: string;
};

type EBWidgetsApi = {
  createWidget: (options: EventbriteCreateWidgetOptions) => void;
};

declare global {
  interface Window {
    EBWidgets?: EBWidgetsApi;
  }
}

let eventbriteScriptPromise: Promise<void> | null = null;

function defaultOnOrderComplete() {
  console.log('Order complete!');
}

function loadEventbriteScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.EBWidgets) {
    return Promise.resolve();
  }

  if (!eventbriteScriptPromise) {
    eventbriteScriptPromise = new Promise<void>((resolve, reject) => {
      const existingScript = document.querySelector(
        `script[src="${EVENTBRITE_WIDGET_SRC}"]`
      ) as HTMLScriptElement | null;

      const script = existingScript ?? document.createElement('script');

      const cleanup = () => {
        script.removeEventListener('load', handleLoad);
        script.removeEventListener('error', handleError);
      };

      const handleLoad = () => {
        cleanup();
        if (window.EBWidgets) {
          resolve();
          return;
        }
        reject(new Error('Eventbrite widget script loaded, but EBWidgets was not found.'));
      };

      const handleError = () => {
        cleanup();
        reject(new Error('Failed to load Eventbrite widget script.'));
      };

      script.addEventListener('load', handleLoad);
      script.addEventListener('error', handleError);

      if (!existingScript) {
        script.src = EVENTBRITE_WIDGET_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
    });
  }

  return eventbriteScriptPromise;
}

export default function EventbriteCheckoutEmbed({
  eventId,
  brandColor = '#785780',
  iframeContainerHeight = 625,
  iframeContainerId,
  onOrderComplete = defaultOnOrderComplete,
  className,
}: EventbriteCheckoutEmbedProps) {
  const containerId = iframeContainerId ?? `eventbrite-widget-container-${eventId}`;

  useEffect(() => {
    let canceled = false;

    const mountWidget = async () => {
      try {
        await loadEventbriteScript();

        if (canceled || !window.EBWidgets) {
          return;
        }

        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '';
        }

        window.EBWidgets.createWidget({
          widgetType: 'checkout',
          eventId,
          iframeContainerId: containerId,
          iframeContainerHeight,
          themeSettings: {
            brandColor,
          },
          onOrderComplete,
        });
      } catch (error) {
        console.error(error);
      }
    };

    void mountWidget();

    return () => {
      canceled = true;
    };
  }, [brandColor, containerId, eventId, iframeContainerHeight, onOrderComplete]);

  return <div id={containerId} className={className} />;
}
