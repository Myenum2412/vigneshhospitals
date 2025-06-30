import { TreatmentsHero } from "@/components/treatments/treatments-hero"
import { TreatmentsGrid } from "@/components/treatments/treatments-grid"
import { TreatmentsVideo } from "@/components/treatments/treatments-video"
import { TreatmentsTestimonials } from "@/components/treatments/treatments-testimonials"
import { TreatmentsCTA } from "@/components/treatments/treatments-cta"
import type { Metadata } from "next"

import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Treatments - Natural Healing Solutions for Chronic Diseases",
  description:
    "Comprehensive Siddha and Homeopathy treatments in Salem for Asthma, Arthritis, Skin Disorders, Kidney Stones, PCOD, Male Infertility, Thyroid, Piles, and more. Root-cause based natural healing.",
  keywords: [
    "siddha treatment salem",
    "homeopathy treatment salem",
    "asthma treatment salem",
    "arthritis cure salem",
    "skin disorders treatment salem",
    "kidney stones treatment salem",
    "PCOD treatment salem",
    "male infertility treatment salem",
    "thyroid treatment salem",
    "piles treatment salem",
    "psoriasis treatment salem",
    "eczema treatment salem",
    "migraine treatment salem",
    "depression treatment salem",
    "anxiety treatment salem",
    "hair fall treatment salem",
    "obesity treatment salem",
    "natural healing salem",
    "herbal medicine salem",
    "chronic disease treatment salem",
  ],
  openGraph: {
    title: "Siddha & Homeopathy Treatments in Salem - Natural Healing Solutions",
    description:
      "Expert treatment for 10+ chronic conditions using traditional Siddha and Homeopathy methods. Root-cause based healing with no side effects.",
    url: "/treatments",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Siddha Homeopathy Treatments Salem",
      },
    ],
  },
}

export default function TreatmentsPage() {
  return (
    <article className="min-h-screen bg-gray-50">
      <header>
        <TreatmentsHero />
      </header>
   
      <WhatsAppPopup />

      <section aria-label="Treatment services and specializations">
        <TreatmentsGrid />
      </section>
      
      <section aria-label="Treatment demonstration video">
        <TreatmentsVideo />
      </section>
      
      <section aria-label="Patient testimonials for treatments">
        <TreatmentsTestimonials />
      </section>
      
      <section aria-label="Book treatment consultation">
        <TreatmentsCTA />
      </section>
    </article>
  )
}
