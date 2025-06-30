import { ProductGrid } from "@/components/product-grid"
import { StoreFilters } from "@/components/store-filters"
import { StoreHero } from "@/components/store-hero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Herbal Store - Natural Medicines & Siddha Products",
  description:
    "Buy authentic Siddha and Homeopathy medicines online from Vignesh Hospital Salem. Natural herbal products, traditional formulations, and organic health supplements with home delivery.",
  keywords: [
    "herbal medicine store salem",
    "siddha medicine online salem",
    "homeopathy medicine store salem",
    "natural products salem",
    "herbal supplements salem",
    "traditional medicine store salem",
    "organic health products salem",
    "ayurvedic products salem",
    "herbal remedies salem",
    "natural healing products salem",
    "buy siddha medicine online",
    "homeopathy products online salem",
  ],
  openGraph: {
    title: "Herbal Store - Natural Medicines & Siddha Products | Vignesh Hospital",
    description:
      "Authentic Siddha and Homeopathy medicines online. Natural herbal products and traditional formulations with home delivery in Salem.",
    url: "/store",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Herbal Medicine Store Salem",
      },
    ],
  },
}

export default function StorePage() {
  return (
    <article className="min-h-screen bg-gray-50">
      <header>
        <StoreHero />
      </header>
      
      <section className="container mx-auto px-4 py-12" aria-label="Product catalog">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1" aria-label="Product filters">
            <StoreFilters />
          </aside>
          <section className="lg:col-span-3" aria-label="Product grid">
            <ProductGrid />
          </section>
        </div>
      </section>
    </article>
  )
}
