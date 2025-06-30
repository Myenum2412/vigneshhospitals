import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogFeatured() {
  const featuredPost = {
    id: "1",
    title: "Natural Remedies for Seasonal Allergies: Ancient Wisdom for Modern Problems",
    excerpt:
      "Discover time-tested Siddha medicine approaches to combat seasonal allergies without side effects. Learn about powerful herbs and lifestyle changes that can provide lasting relief from sneezing, congestion, and respiratory issues.",
    image: "/images/blogsimages/Natural Remedies for Seasonal Allergies Ancient Wisdom for Modern Problems in indian Style.jpeg",
    category: "Natural Remedies",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Allergies", "Siddha Medicine", "Natural Healing"],
    views: "2.5k",
    featured: true,
  }

  return (
    <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-r from-white to-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <Image
            src={featuredPost.image || "/placeholder.svg"}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Featured Badge */}
          <div className="absolute top-6 left-6">
            <Badge className="bg-yellow-500 hover:bg-yellow-500 text-black font-semibold px-3 py-1">
              <TrendingUp className="h-4 w-4 mr-1" />
              Featured
            </Badge>
          </div>

          {/* Views Counter */}
          <div className="absolute bottom-6 left-6">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {featuredPost.views} views
            </Badge>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
          {/* Category */}
          <Badge variant="outline" className="w-fit mb-4 border-green-200 text-green-700">
            {featuredPost.category}
          </Badge>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">{featuredPost.title}</h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className="font-medium">{featuredPost.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {featuredPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA Button */}
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 w-fit">
            <Link href={`/blog/${featuredPost.id}`}>
              Read Full Article
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
