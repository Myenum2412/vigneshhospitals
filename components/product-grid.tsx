"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProductGrid() {
  const [cart, setCart] = useState<string[]>([])

  const products = [
    {
      id: "1",
      name: "Immunity Booster Syrup",
      price: 450,
      originalPrice: 550,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      category: "Immunity",
      description: "Natural immunity booster with 15 powerful herbs",
      inStock: true,
      bestseller: true,
    },
    {
      id: "2",
      name: "Hair Growth Oil",
      price: 320,
      originalPrice: 400,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 89,
      category: "Hair Care",
      description: "Traditional oil blend for healthy hair growth",
      inStock: true,
      bestseller: false,
    },
    {
      id: "3",
      name: "Skin Glow Capsules",
      price: 680,
      originalPrice: 800,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 156,
      category: "Skin Health",
      description: "Natural capsules for radiant and healthy skin",
      inStock: true,
      bestseller: true,
    },
    {
      id: "4",
      name: "Digestive Powder",
      price: 280,
      originalPrice: 350,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 67,
      category: "Digestive Health",
      description: "Herbal powder for better digestion and gut health",
      inStock: false,
      bestseller: false,
    },
    {
      id: "5",
      name: "Joint Pain Relief Oil",
      price: 520,
      originalPrice: 650,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 203,
      category: "Joint Health",
      description: "Effective oil for joint pain and arthritis relief",
      inStock: true,
      bestseller: true,
    },
    {
      id: "6",
      name: "Respiratory Care Syrup",
      price: 380,
      originalPrice: 450,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 78,
      category: "Respiratory",
      description: "Natural syrup for cough, cold and breathing issues",
      inStock: true,
      bestseller: false,
    },
  ]

  const addToCart = (productId: string) => {
    setCart([...cart, productId])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          All Products <span className="text-gray-500">({products.length})</span>
        </h2>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Customer Rating</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.bestseller && (
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500">Bestseller</Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg">
                      Out of Stock
                    </Badge>
                  </div>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full p-2">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <Badge variant="outline" className="text-xs mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <span className="text-xl font-bold text-green-600">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>

                <div className="flex space-x-2">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={!product.inStock}
                    onClick={() => addToCart(product.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/store/product/${product.id}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Products
        </Button>
      </div>
    </div>
  )
}
