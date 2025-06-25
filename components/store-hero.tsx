import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Shield, Award } from "lucide-react"

export function StoreHero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Natural <span className="text-yellow-300">Herbal Store</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Authentic Siddha and Homeopathy medicines crafted with traditional wisdom and modern quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">100% Natural</h3>
            <p className="text-sm opacity-80">Pure herbal ingredients with no chemicals</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-sm opacity-80">Tested and certified for safety</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Expert Formulated</h3>
            <p className="text-sm opacity-80">Created by experienced practitioners</p>
          </div>
        </div>
      </div>
    </section>
  )
}
