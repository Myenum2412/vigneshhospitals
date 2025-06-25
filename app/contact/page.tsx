import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Vignesh Hospital Salem, Namakkal, Rasipuram",
  description:
    "Contact Vignesh Hospital with 3 convenient locations in Salem (Main), Namakkal, and Rasipuram. Expert Siddha and Homeopathy treatments. Book appointments online or visit us Mon-Sat for natural healing solutions.",
  keywords: [
    "contact vignesh hospital salem",
    "vignesh hospital namakkal",
    "vignesh hospital rasipuram",
    "hospital address salem junction",
    "siddha hospital contact",
    "homeopathy hospital tamil nadu",
    "dr ragavendra balaji contact",
    "hospital timings salem",
    "medical center branches",
    "healthcare contact tamil nadu",
  ],
  openGraph: {
    title: "Contact Vignesh Hospital - Salem, Namakkal, Rasipuram Branches",
    description:
      "Get in touch with Vignesh Hospital across 3 locations in Tamil Nadu. Expert Siddha and Homeopathy treatments with convenient timings.",
    url: "/contact",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Vignesh Hospital",
      },
    ],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
