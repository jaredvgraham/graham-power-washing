import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import BackHomeButton from "@/components/BackHomeButton";
import StickyMobileCta from "@/components/StickyMobileCta";

const inter = Inter({ subsets: ["latin"] });
//
export const metadata: Metadata = {
  metadataBase: new URL("https://www.grahampowerwashing.com"),
  title: {
    default:
      "Graham Power Washing | Power Washing South Shore & Cape Cod | Free Quotes",
    template: "%s",
  },
  description:
    "Top-rated soft washing, pressure washing, and window cleaning for Plymouth, the South Shore, and Cape Cod. Licensed & insured. Free quotes.",
  keywords: [
    "power washing plymouth ma",
    "power washing south shore",
    "power washing cape cod",
    "soft washing plymouth",
    "window cleaning plymouth ma",
    "pressure washing near me",
    "graham power washing",
  ],
  openGraph: {
    title:
      "Graham Power Washing | Power Washing South Shore & Cape Cod | Free Quotes",
    description:
      "Top-rated soft washing, pressure washing, and window cleaning for Plymouth, the South Shore, and Cape Cod. Free quotes.",
    url: "https://www.grahampowerwashing.com",
    siteName: "Graham Power Washing",
    images: [
      {
        url: "/hero1.jpeg",
        width: 1200,
        height: 900,
        alt: "Graham Power Washing soft washing a home on the South Shore",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.grahampowerwashing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-53X7DZN3');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7FS20SMXY8"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7FS20SMXY8');
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17110273983"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17110273983');
            `,
          }}
        />
        {/* Google Ads base tag (AW-16667175667) — required for website call conversion tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16667175667"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16667175667');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53X7DZN3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=357074613153516&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Script id="meta-pixel-base" strategy="afterInteractive">
          {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', '357074613153516');
  fbq('track', 'PageView');
          `}
        </Script>
        {/* Google Ads website call conversion tracking.
            For eligible Google Ads visitors, Google dynamically replaces the
            visible business number (774) 487-7616 with a Google forwarding number. */}
        <Script id="google-ads-phone-conversion" strategy="afterInteractive">
          {`
    gtag('config', 'AW-16667175667/xFFtCNut8MccEPPVw4s-', {
      'phone_conversion_number': '(774) 487-7616'
    });
  `}
        </Script>
        <ConditionalNavbar />
        <BackHomeButton />
        {children}
        <ConditionalFooter />
        <StickyMobileCta />
      </body>
    </html>
  );
}
