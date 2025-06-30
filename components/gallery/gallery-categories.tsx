"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Stethoscope, Users, Leaf, Heart, Camera, Filter } from "lucide-react"

const categories = [
  {
    id: "all",
    name: "All Photos",
    icon: Camera,
    count: 120,
    color: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  },
  {
    id: "facilities",
    name: "Hospital Facilities",
    icon: Building2,
    count: 35,
    color: "bg-blue-100 text-blue-700 hover:bg-blue-200",
  },
  {
    id: "treatment",
    name: "Treatment Rooms",
    icon: Stethoscope,
    count: 25,
    color: "bg-green-100 text-green-700 hover:bg-green-200",
  },
  {
    id: "patient-care",
    name: "Patient Care",
    icon: Heart,
    count: 30,
    color: "bg-red-100 text-red-700 hover:bg-red-200",
  },
  {
    id: "herbal",
    name: "Herbal Medicine",
    icon: Leaf,
    count: 20,
    color: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
  },
  {
    id: "team",
    name: "Our Team",
    icon: Users,
    count: 10,
    color: "bg-purple-100 text-purple-700 hover:bg-purple-200",
  },
]

interface GalleryCategoriesProps {
  activeCategory?: string
  onCategoryChange?: (category: string) => void
}

export function GalleryCategories({ activeCategory = "all", onCategoryChange }: GalleryCategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
            <Filter className="w-4 h-4 mr-2" />
            Browse by Category
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Explore Our Hospital</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through different sections of our hospital to see our modern facilities, treatment areas, and patient
            care environment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isActive = selectedCategory === category.id

            return (
              <Button
                key={category.id}
                variant={isActive ? "default" : "outline"}
                size="lg"
                onClick={() => handleCategoryClick(category.id)}
                className={`
                  ${
                    isActive
                      ? "bg-gradient-to-r from-green-600 to-green-700 text-white"
                      : `${category.color} border-gray-200`
                  }
                  transition-all duration-300 hover:scale-105
                `}
              >
                <IconComponent className="w-5 h-5 mr-2" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${isActive ? "bg-white/20 text-white" : "bg-white text-gray-600"}`}
                >
                  {category.count}
                </Badge>
              </Button>
            )
          })}
        </div>

        {/* Active Category Info */}
        <div className="text-center">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-green-600">
              {categories.find((cat) => cat.id === selectedCategory)?.count}
            </span>{" "}
            photos in{" "}
            <span className="font-semibold">{categories.find((cat) => cat.id === selectedCategory)?.name}</span>{" "}
            category
          </p>
        </div>
      </div>
    </section>
  )
}
