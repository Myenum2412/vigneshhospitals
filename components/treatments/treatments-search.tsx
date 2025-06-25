"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"

export function TreatmentsSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    { name: "All", count: 15 },
    { name: "Respiratory", count: 3 },
    { name: "Joint & Bone", count: 2 },
    { name: "Skin Health", count: 3 },
    { name: "Digestive", count: 2 },
    { name: "Sexual Health", count: 2 },
    { name: "Women's Health", count: 2 },
    { name: "Lifestyle", count: 1 },
  ]

  return (
    <section className="py-12 bg-white border-b sticky top-16 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search by disease, symptoms, or treatment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
            />
            <Button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700"
              size="sm"
            >
              Search
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className={`${
                  activeCategory === category.name
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "hover:bg-green-50 hover:text-green-600 hover:border-green-600"
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.name}
                <Badge
                  variant="secondary"
                  className={`ml-2 ${
                    activeCategory === category.name ? "bg-white/20 text-white hover:bg-white/20" : "bg-gray-100"
                  }`}
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Quick Search Tags */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Asthma", "Arthritis", "Skin Problems", "Hair Fall", "Kidney Stones", "Piles"].map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-green-50 hover:text-green-600 hover:border-green-600 transition-colors"
                  onClick={() => setSearchTerm(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
