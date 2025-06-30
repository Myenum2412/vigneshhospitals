import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, TrendingUp, User, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogSidebar() {
  const popularPosts = [
    {
      id: "1",
      title: "10 Natural Ways to Boost Your Immunity",
      date: "2024-01-10",
      image: "/images/BlogSideImg/10 Natural Ways to Boost Your Immunity.jpeg",
      views: "2.5k",
    },
    {
      id: "2",
      title: "Understanding Siddha Medicine Principles",
      date: "2024-01-08",
      image: "/images/BlogSideImg/Understanding Siddha Medicine Principles.jpeg",
      views: "1.8k",
    },
    {
      id: "3",
      title: "Herbal Remedies for Better Sleep",
      date: "2024-01-05",
      image: "/images/BlogSideImg/Herbal Remedies for Better Sleep.jpeg",
      views: "1.6k",
    },
  ]

  const categories = [
    { name: "Traditional Medicine", count: 12 },
    { name: "Natural Remedies", count: 8 },
    { name: "Seasonal Care", count: 6 },
    { name: "Women's Health", count: 7 },
    { name: "Men's Health", count: 5 },
    { name: "Child Care", count: 4 },
  ]

  const tags = [
    "Siddha Medicine",
    "Homeopathy",
    "Natural Healing",
    "Herbal Medicine",
    "Immunity",
    "Digestive Health",
    "Skin Care",
    "Joint Health",
    "Women's Health",
    "Seasonal Care",
    "Lifestyle",
    "Wellness",
  ]

  const recentComments = [
    {
      author: "Priya S.",
      comment: "This article helped me understand my condition better...",
      post: "Managing Arthritis Naturally",
      date: "2 days ago",
    },
    {
      author: "Rajesh K.",
      comment: "Thank you for sharing these natural remedies...",
      post: "Winter Wellness Tips",
      date: "3 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-green-600" />
            <span>Health Newsletter</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Get weekly health tips and natural remedies delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input placeholder="Your email address" type="email" />
            <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe Now</Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">Join 5,000+ subscribers. No spam, unsubscribe anytime.</p>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span>Popular Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={post.id} className="flex space-x-3 group cursor-pointer">
              <div className="relative flex-shrink-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="rounded-lg object-cover"
                />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer transition-colors"
            >
              <span className="text-sm text-gray-700 hover:text-green-600">{category.name}</span>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs cursor-pointer hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Comments */}
      <Card className="border-none shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="h-5 w-5 text-green-600" />
            <span>Recent Comments</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentComments.map((comment, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                <span className="text-xs text-gray-500">{comment.date}</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">"{comment.comment}"</p>
              <p className="text-xs text-green-600 font-medium">on {comment.post}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Doctor's Corner */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
        <CardHeader>
          <CardTitle>Ask Our Doctors</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Have a health question? Our experienced doctors are here to help with personalized advice.
          </p>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/appointment">Book Consultation</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
