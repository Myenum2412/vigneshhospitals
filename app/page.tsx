import { HeroSection } from "@/components/hero-section"
import { AboutPreview } from "@/components/about-preview"
import { TreatmentsPreview } from "@/components/treatments-preview"
import { DoctorsPreview } from "@/components/doctors-preview"
import { TestimonialsPreview } from "@/components/testimonials-preview"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from "next"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Home - Best Siddha & Homeopathy Hospital in Salem",
  description:
    "Welcome to Vignesh Hospital Salem - 29+ years of trusted Siddha and Homeopathy treatments. Expert care for Asthma, Arthritis, Skin Disorders, and chronic diseases. Book appointment today.",
  keywords: [
    "best siddha hospital salem",
    "homeopathy hospital salem",
    "traditional medicine salem",
    "natural healing salem",
    "chronic disease treatment salem",
    "herbal medicine salem",
  ],
  openGraph: {
    title: "Vignesh Hospital Salem - Leading Siddha & Homeopathy Treatment Center",
    description:
      "29+ years of trusted traditional medicine in Salem. Expert treatment for chronic diseases with natural healing methods.",
    url: "/",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Vignesh Hospital Salem - Traditional Medicine",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section aria-label="Hero section">
        <HeroSection />
      </section>
      
      <WhatsAppPopup />

      <section aria-label="About us preview">
        <AboutPreview />
      </section>
      
      <section aria-label="Hospital statistics">
        <StatsSection />
      </section>
      
      <section aria-label="Treatment services preview">
        <TreatmentsPreview />
      </section>
      
      <section aria-label="Our doctors preview">
        <DoctorsPreview />
      </section>
      
      <section aria-label="Patient testimonials">
        <TestimonialsPreview />
      </section>
      
      <section aria-label="Call to action">
        <CTASection />
      </section>
    </div>
  )
}
