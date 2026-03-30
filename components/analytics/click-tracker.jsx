'use client';

import { useEffect } from 'react';

import { trackEvent } from '@lib/analytics';

const DOWNLOAD_EXTENSION_REGEX =
  /\.(pdf|docx?|xlsx?|csv|txt|zip|rar|7z|pptx?)$/i;

const getElementLabel = (element) => {
  if (!element) {
    return '';
  }

  return (
    element.dataset.analyticsLabel ||
    element.getAttribute('aria-label') ||
    element.getAttribute('title') ||
    element.textContent ||
    ''
  )
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 120);
};

const getPathname = (href) => {
  try {
    return new URL(href, window.location.href).pathname;
  } catch {
    return '';
  }
};

export default function AnalyticsClickTracker() {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest(
        'a, button, [role="button"], [data-analytics-event]'
      );

      if (!target) {
        return;
      }

      const label = getElementLabel(target);
      const analyticsEvent = target.dataset.analyticsEvent;

      if (analyticsEvent) {
        trackEvent(analyticsEvent, {
          element_label: label,
          element_location: target.dataset.analyticsLocation || 'unspecified',
          link_url: target.getAttribute('href') || '',
          link_path: getPathname(target.getAttribute('href') || ''),
        });
        return;
      }

      if (target.tagName === 'BUTTON') {
        trackEvent('button_click', {
          button_text: label,
          button_location: window.location.pathname,
        });
        return;
      }

      if (target.tagName !== 'A') {
        return;
      }

      const href = target.getAttribute('href');
      const pathname = getPathname(href || '');

      if (!pathname || !DOWNLOAD_EXTENSION_REGEX.test(pathname)) {
        return;
      }

      trackEvent('file_download_click', {
        file_name: pathname.split('/').pop(),
        file_extension: pathname.split('.').pop()?.toLowerCase() || '',
        link_text: label,
        link_path: pathname,
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
