import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutTimeline } from "@/components/about/about-timeline"
import { AboutStats } from "@/components/about/about-stats"
import type { Metadata } from "next"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "About Us - Three Generations of Healing Excellence",
  description:
    "Discover Vignesh Hospital's 29-year legacy of traditional medicine excellence in Salem. Three generations of trusted Siddha and Homeopathy care since 1995. Meet our experienced medical team.",
  keywords: [
    "about vignesh hospital salem",
    "hospital history salem",
    "traditional medicine legacy",
    "siddha homeopathy experience",
    "medical team salem",
    "hospital establishment 1995",
  ],
  openGraph: {
    title: "About Vignesh Hospital Salem - 29 Years of Traditional Medicine Excellence",
    description:
      "Three generations of trusted Siddha and Homeopathy care in Salem since 1995. Learn about our medical legacy and commitment to natural healing.",
    url: "/about",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "About Vignesh Hospital Salem",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <article className="min-h-screen">
      <header>
        <AboutHero />
      </header>
      <WhatsAppPopup />
      <section aria-label="Hospital statistics and achievements">
        <AboutStats />
      </section>
      
      <section aria-label="Our story and mission">
        <AboutStory />
      </section>
      
      <section aria-label="Hospital timeline and milestones">
        <AboutTimeline />
      </section>
    </article>
  )
}
