import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Vignesh Siddha and Homeopathy Hospital - Traditional Healing Since 1995",
    template: "%s | Vignesh Hospital Salem",
  },
  description:
    "Leading Siddha and Homeopathy hospital in Salem with 29+ years of experience. Expert treatment for Asthma, Arthritis, Skin Disorders, Kidney Stones, PCOD, and more. Book appointment with Dr. R. Ragavendra Balaji.",
  keywords: [
    "siddha medicine salem",
    "homeopathy hospital salem",
    "traditional healing salem",
    "natural treatment salem",
    "herbal medicine salem",
    "Dr Ragavendra Balaji",
    "asthma treatment salem",
    "arthritis cure salem",
    "skin disorders treatment",
    "kidney stones treatment",
    "PCOD treatment salem",
    "male infertility treatment",
    "thyroid treatment salem",
    "piles treatment salem",
    "migraine treatment salem",
    "depression treatment salem",
    "anxiety treatment salem",
    "psoriasis treatment salem",
    "eczema treatment salem",
    "hair fall treatment salem",
  ],
  authors: [{ name: "Dr. R. Ragavendra Balaji" }],
  creator: "Vignesh Hospital Salem",
  publisher: "Vignesh Multi Speciality Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vignesh-hospital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vignesh-hospital.com",
    siteName: "Vignesh Siddha and Homeopathy Hospital",
    title: "Vignesh Siddha and Homeopathy Hospital - Traditional Healing Since 1995",
    description:
      "Leading Siddha and Homeopathy hospital in Salem with 29+ years of experience. Expert treatment for chronic diseases with natural healing methods.",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Vignesh Hospital Salem Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh Siddha and Homeopathy Hospital Salem",
    description: "Leading traditional medicine hospital in Salem. Expert Siddha and Homeopathy treatments.",
    images: ["/images/vignesh-logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="light" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Tag Manager (head) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZRF2FLS');
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7BSKYQMQZS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7BSKYQMQZS');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZRF2FLS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <div id="root" className="min-h-screen flex flex-col">
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
        </div>

        <Toaster />
      </body>
    </html>
  )
}
