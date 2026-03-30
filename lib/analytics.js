export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-RFRQHFHPN8';

export const isDebugAnalyticsEnabled = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.search.includes('debug_analytics=1')
  );
};

const canTrack = () =>
  typeof window !== 'undefined' && typeof window.gtag === 'function';

export const trackPageView = (path) => {
  if (!canTrack() || !path) {
    return;
  }

  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: path,
    ...(isDebugAnalyticsEnabled() ? { debug_mode: true } : {}),
  });
};

export const trackEvent = (name, params = {}) => {
  if (!canTrack() || !name) {
    return;
  }

  window.gtag('event', name, {
    ...params,
    ...(isDebugAnalyticsEnabled() ? { debug_mode: true } : {}),
  });
};

export const trackEventAndNavigate = ({
  eventName,
  eventParams = {},
  navigate,
  timeout = 400,
}) => {
  if (typeof navigate !== 'function') {
    return;
  }

  let hasNavigated = false;

  const finishNavigation = () => {
    if (hasNavigated) {
      return;
    }

    hasNavigated = true;
    navigate();
  };

  if (!canTrack()) {
    finishNavigation();
    return;
  }

  window.gtag('event', eventName, {
    ...eventParams,
    event_callback: finishNavigation,
    event_timeout: timeout,
    ...(isDebugAnalyticsEnabled() ? { debug_mode: true } : {}),
  });

  window.setTimeout(finishNavigation, timeout);
};
