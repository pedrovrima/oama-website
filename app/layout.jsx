import GoogleTag from '@components/analytics/google-tag';
import AppRouteTracker from '@components/analytics/app-route-tracker';
import AnalyticsClickTracker from '@components/analytics/click-tracker';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <GoogleTag />
        <AppRouteTracker />
        <AnalyticsClickTracker />
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
