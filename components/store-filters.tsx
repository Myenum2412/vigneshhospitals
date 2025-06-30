"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export function StoreFilters() {
  const categories = [
    "Immunity Boosters",
    "Hair Care",
    "Skin Health",
    "Digestive Health",
    "Respiratory Care",
    "Joint & Bone Health",
    "Women's Health",
    "Men's Health",
  ]

  const brands = ["Vignesh Herbals", "Traditional Remedies", "Pure Siddha", "Natural Healing"]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={`category-${index}`} />
              <Label htmlFor={`category-${index}`} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brands</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Checkbox id={`brand-${index}`} />
              <Label htmlFor={`brand-${index}`} className="text-sm">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  )
}
