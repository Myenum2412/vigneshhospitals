"use client"

import { useState } from "react"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { GalleryCategories } from "@/components/gallery/gallery-categories"
import { GalleryGrid } from "@/components/gallery/gallery-grid"
import { GalleryTestimonials } from "@/components/gallery/gallery-testimonials"
import { GalleryCTA } from "@/components/gallery/gallery-cta"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <article className="min-h-screen">
      <header>
        <GalleryHero />
      </header>
      <WhatsAppPopup />
      <nav aria-label="Gallery categories">
        <GalleryCategories activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      </nav>
      
      <section aria-label="Photo gallery">
        <GalleryGrid activeCategory={activeCategory} />
      </section>
      
      <section aria-label="Gallery testimonials">
        <GalleryTestimonials />
      </section>
      
      <section aria-label="Gallery call to action">
        <GalleryCTA />
      </section>
    </article>
  )
}
