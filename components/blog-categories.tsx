import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BlogCategories() {
  const categories = [
    { name: "All Articles", count: 45, active: true },
    { name: "Traditional Medicine", count: 12 },
    { name: "Natural Remedies", count: 8 },
    { name: "Seasonal Care", count: 6 },
    { name: "Women's Health", count: 7 },
    { name: "Men's Health", count: 5 },
    { name: "Child Care", count: 4 },
    { name: "Lifestyle Tips", count: 3 },
  ]

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${
                category.active
                  ? "bg-green-600 hover:bg-green-700"
                  : "hover:bg-green-50 hover:text-green-600 hover:border-green-600"
              }`}
            >
              {category.name}
              <Badge
                variant="secondary"
                className={`ml-2 ${category.active ? "bg-white/20 text-white hover:bg-white/20" : "bg-gray-100"}`}
              >
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
