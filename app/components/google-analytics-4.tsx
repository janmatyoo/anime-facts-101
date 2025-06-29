// components/GoogleAnalytics.tsx
import Script from "next/script"

const GoogleAnalytics4 = () => {
  return (
    <>
      {/* GA4 Loader Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T259JLDPMH"
        strategy="afterInteractive"
      />

      {/* GA4 Config Script */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T259JLDPMH');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics4
