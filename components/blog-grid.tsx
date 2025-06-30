"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight, Search, Grid, List } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"

const blogPosts = [
  {
    id: "2",
    title: "The Power of Homeopathy in Treating Chronic Digestive Issues",
    excerpt:
      "Understanding how homeopathic remedies work at the cellular level to restore digestive health. Case studies and treatment protocols from our 29 years of practice.",
    image: "/images/blogsimages/2power.jpeg",
    category: "Traditional Medicine",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-12",
    readTime: "6 min read",
    tags: ["Homeopathy", "Digestive Health"],
  },
  {
    id: "3",
    title: "Winter Wellness: Boosting Immunity with Traditional Herbs",
    excerpt:
      "Essential herbs and practices to strengthen your immune system during winter months. Recipes for immunity-boosting teas and tonics.",
    image: "/images/blogsimages/Winter Wellness Boosting Immunity with Traditional Herbs.jpeg",
    category: "Seasonal Care",
    author: "Dr. P. Ravi ",
    date: "2024-01-10",
    readTime: "5 min read",
    tags: ["Immunity", "Winter Care"],
  },
  {
    id: "4",
    title: "Managing Arthritis Pain Naturally: A Comprehensive Guide",
    excerpt:
      "Holistic approaches to arthritis management combining Siddha medicine, lifestyle modifications, and dietary changes.",
    image: "/images/blogsimages/Managing Arthritis Pain Naturally A Comprehensive Guide.jpeg",
    category: "Traditional Medicine",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["Arthritis", "Pain Management"],
  },
  {
    id: "5",
    title: "Women's Health: Natural Solutions for Hormonal Balance",
    excerpt:
      "Comprehensive guide to women's health issues including PCOS, menopause, and fertility through traditional medicine.",
    image: "/images/blogsimages/Women's Health Natural Solutions for Hormonal Balance.jpeg",
    category: "Women's Health",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-05",
    readTime: "12 min read",
    tags: ["Women's Health", "Hormonal Balance"],
  },
  {
    id: "6",
    title: "Stress and Mental Health: Traditional Approaches",
    excerpt:
      "Holistic approaches to anxiety, depression, and stress management using traditional medicine and lifestyle modifications.",
    image: "/images/blogsimages/Stress and Mental Health Traditional Approaches.jpeg",
    category: "Mental Health",
    author: "Dr. P. Ravi ",
    date: "2024-01-03",
    readTime: "15 min read",
    tags: ["Mental Health", "Stress Management"],
  },
  {
    id: "7",
    title: "Diabetes Management Through Traditional Medicine",
    excerpt:
      "Natural approaches to managing diabetes using Siddha medicine principles, dietary guidelines, and lifestyle modifications.",
    image: "/images/blogsimages/Diabetes Management Through Traditional Medicine.jpeg",
    category: "Chronic Conditions",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-01",
    readTime: "9 min read",
    tags: ["Diabetes", "Blood Sugar"],
  },
]

export function BlogGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("latest")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      !searchTerm ||
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesSearch
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    if (sortBy === "readTime") {
      return Number.parseInt(a.readTime) - Number.parseInt(b.readTime)
    }
    return 0
  })

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm border">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-200 focus:border-green-500 focus:ring-green-500"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="latest">Latest First</option>
              <option value="oldest">Oldest First</option>
              <option value="readTime">Quick Reads</option>
            </select>

            {/* View Mode */}
            <div className="flex border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-green-600 text-white" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {sortedPosts.length} article{sortedPosts.length !== 1 ? "s" : ""}
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      </div>

      {/* Blog Posts */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-none shadow-md"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-800">
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group/link"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group/link"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* No Results */}
      {sortedPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p>Try adjusting your search terms or browse different categories.</p>
          </div>
        </div>
      )}

      {/* Load More */}
      {sortedPosts.length > 0 && (
        <div className="text-center pt-8">
          <Button variant="outline" size="lg" className="hover:bg-green-600 hover:text-white">
            Load More Articles
          </Button>
        </div>
      )}
    </div>
  )
}
