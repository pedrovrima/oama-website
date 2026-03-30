import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { trackPageView } from '@lib/analytics';

export default function PagesRouteTracker() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    handleRouteChange(window.location.pathname + window.location.search);

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return null;
}
