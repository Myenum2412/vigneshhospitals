import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"
import { BlogSidebar } from "@/components/blog-sidebar"
import { BlogCategories } from "@/components/blog-categories"
import { BlogFeatured } from "@/components/blog-featured"
import type { Metadata } from "next"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Health Blog - Expert Tips & Traditional Medicine Insights",
  description:
    "Read expert health tips, traditional medicine insights, and wellness advice from experienced Siddha and Homeopathy doctors at Vignesh Hospital Salem. Natural healing guidance and health education.",
  keywords: [
    "health blog salem",
    "siddha medicine blog",
    "homeopathy blog salem",
    "traditional medicine tips",
    "natural healing blog",
    "health tips salem",
    "wellness blog salem",
    "herbal medicine blog",
    "chronic disease tips",
    "natural remedies blog",
    "health education salem",
    "medical blog salem",
  ],
  openGraph: {
    title: "Health Blog - Traditional Medicine Insights | Vignesh Hospital Salem",
    description:
      "Expert health tips and traditional medicine insights from experienced Siddha and Homeopathy doctors. Natural healing guidance and wellness advice.",
    url: "/blog",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Health Blog Vignesh Hospital Salem",
      },
    ],
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <BlogHero />

      <WhatsAppPopup />

      {/* Categories Navigation */}
      <BlogCategories />

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Article Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <p className="text-gray-600">Our most popular health insights this month</p>
            </div>
          </div>
          <BlogFeatured />
        </section>

        {/* Main Blog Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content - Takes 3 columns */}
          <div className="xl:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                <p className="text-gray-600">Stay updated with our latest health tips and insights</p>
              </div>
            </div>
            <BlogGrid />
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="xl:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Health Tips</h2>
            <p className="text-green-100 mb-8 text-lg">
              Get weekly health insights, natural remedies, and wellness tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-green-100 text-sm mt-4">Join 5,000+ subscribers. No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
