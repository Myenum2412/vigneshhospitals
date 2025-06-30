"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar, Share2, BookOpen, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface BlogPostProps {
  post: {
    id: string
    title: string
    content: string
    excerpt: string
    image: string
    category: string
    author: string
    date: string
    readTime: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  const [isLiked, setIsLiked] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4">{post.category}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Health & Wellness</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8 pb-6 border-b">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsLiked(!isLiked)}
            className={`flex items-center gap-2 ${isLiked ? "text-red-600 border-red-200" : ""}`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
            {isLiked ? "Liked" : "Like"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare} className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-2">{post.author}</h4>
              <p className="text-gray-600 text-sm mb-3">
                Experienced practitioner of traditional medicine with over 29 years of clinical experience. Specializes
                in integrative approaches combining Siddha medicine, homeopathy, and modern wellness practices.
              </p>
              <div className="flex gap-2">
                <Badge variant="outline" className="text-xs">
                  Siddha Medicine
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Homeopathy
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Wellness
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Ready to Start Your Healing Journey?</h3>
          <p className="text-green-700 mb-4">
            Book a consultation with our experienced practitioners to discuss your health concerns and explore natural
            treatment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button variant="outline" asChild className="border-green-300 text-green-700 hover:bg-green-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
