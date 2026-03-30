'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { trackPageView } from '@lib/analytics';

export default function AppRouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryString = searchParams?.toString();
    const path = queryString ? `${pathname}?${queryString}` : pathname;

    trackPageView(path);
  }, [pathname, searchParams]);

  return null;
}
