"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const allPosts = [
  {
    id: "1",
    title: "Natural Remedies for Seasonal Allergies: Ancient Wisdom for Modern Problems",
    excerpt: "Discover time-tested Siddha medicine approaches to combat seasonal allergies without side effects.",
    image: "/images/blogsimages/Natural Remedies for Seasonal Allergies Ancient Wisdom for Modern Problems in indian Style.jpeg",
    category: "Natural Remedies",
    author: "Dr. Vignesh Kumar",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "The Power of Homeopathy in Treating Chronic Digestive Issues",
    excerpt: "Understanding how homeopathic remedies work at the cellular level to restore digestive health.",
    image: "/images/blogsimages/2power.jpeg",
    category: "Traditional Medicine",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-12",
    readTime: "6 min read",
  },
  {
    id: "3",
    title: "Winter Wellness: Boosting Immunity with Traditional Herbs",
    excerpt: "Essential herbs and practices to strengthen your immune system during winter months.",
    image: "/images/blogsimages/Winter Wellness Boosting Immunity with Traditional Herbs.jpeg",
    category: "Seasonal Care",
    author: "Dr. P. Ravi",
    date: "2024-01-10",
    readTime: "5 min read",
  },
  {
    id: "4",
    title: "Managing Arthritis Pain Naturally: A Comprehensive Guide",
    excerpt: "Holistic approaches to arthritis management combining Siddha medicine and lifestyle modifications.",
    image: "/images/blogsimages/Managing Arthritis Pain Naturally A Comprehensive Guide.jpeg",
    category: "Traditional Medicine",
    author: "Dr. Vignesh Kumar",
    date: "2024-01-08",
    readTime: "10 min read",
  },
  {
    id: "5",
    title: "Women's Health: Natural Solutions for Hormonal Balance",
    excerpt: "Comprehensive guide to women's health issues including PCOS, menopause, and fertility.",
    image: "/images/blogsimages/Women's Health Natural Solutions for Hormonal Balance.jpeg",
    category: "Women's Health",
    author: "Dr. R. Ragavendra Balaji",
    date: "2024-01-05",
    readTime: "12 min read",
  },
  {
    id: "6",
    title: "Stress and Mental Health: Traditional Approaches to Modern Problems",
    excerpt: "Holistic approaches to anxiety, depression, and stress management using traditional medicine.",
    image: "/images/blogsimages/Stress and Mental Health Traditional Approaches.jpeg",
    category: "Mental Health",
    author: "Dr. P. Ravi",
    date: "2024-01-03",
    readTime: "15 min read",
  },
]

interface RelatedPostsProps {
  currentPostId: string
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // Get current post to find related posts by category
  const currentPost = allPosts.find((post) => post.id === currentPostId)

  // Filter related posts (same category, excluding current post)
  const relatedPosts = allPosts
    .filter((post) => post.id !== currentPostId && (currentPost ? post.category === currentPost.category : true))
    .slice(0, 3)

  // If no related posts in same category, get random posts
  if (relatedPosts.length === 0) {
    const otherPosts = allPosts.filter((post) => post.id !== currentPostId).slice(0, 3)
    relatedPosts.push(...otherPosts)
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Articles</h2>
        <p className="text-gray-600">Continue reading about similar health topics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                  {post.category}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>

              <h3 className="font-semibold mb-2 group-hover:text-green-600 transition-colors line-clamp-2 text-sm">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm group/link"
              >
                Read More
                <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Posts Link */}
      <div className="text-center mt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
          View All Articles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
