"use client"

import { lazy, Suspense } from "react"
import { Card, CardContent } from "@/components/ui/card"

// Lazy load heavy components
const LazyGalleryGrid = lazy(() => import("./gallery/gallery-grid").then((module) => ({ default: module.GalleryGrid })))
const LazyBlogGrid = lazy(() => import("./blog-grid").then((module) => ({ default: module.BlogGrid })))

// Loading skeleton component
export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-t-lg" />
          <CardContent className="p-4">
            <div className="h-4 bg-gray-200 rounded mb-2" />
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Optimized image component with lazy loading
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  )
}

// Lazy loaded blog section
export function LazyBlogSection({ selectedCategory }: { selectedCategory?: string }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyBlogGrid selectedCategory={selectedCategory} />
    </Suspense>
  )
}

// Lazy loaded gallery section
export function LazyGallerySection({ selectedCategory }: { selectedCategory?: string }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyGalleryGrid selectedCategory={selectedCategory} />
    </Suspense>
  )
}
