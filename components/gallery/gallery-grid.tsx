"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn, Download, Share2, Calendar, MapPin, Camera } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Modern Reception Area",
    category: "facilities",
    image: "/placeholder.svg?height=400&width=600",
    description: "Welcoming reception area with comfortable seating and modern amenities",
    date: "2024-01-15",
    location: "Ground Floor",
  },
  {
    id: 2,
    title: "Consultation Room",
    category: "treatment",
    image: "/placeholder.svg?height=400&width=600",
    description: "Private consultation room equipped with modern diagnostic tools",
    date: "2024-01-10",
    location: "First Floor",
  },
  {
    id: 3,
    title: "Herbal Medicine Preparation",
    category: "herbal",
    image: "/placeholder.svg?height=400&width=600",
    description: "Traditional herbal medicine preparation area with authentic ingredients",
    date: "2024-01-08",
    location: "Medicine Lab",
  },
  {
    id: 4,
    title: "Patient Waiting Area",
    category: "patient-care",
    image: "/placeholder.svg?height=400&width=600",
    description: "Comfortable waiting area with natural lighting and peaceful ambiance",
    date: "2024-01-12",
    location: "Ground Floor",
  },
  {
    id: 5,
    title: "Dr. Ragavendra Balaji",
    category: "team",
    image: "/placeholder.svg?height=400&width=600",
    description: "Our chief physician with 15+ years of experience in Siddha and Homeopathy",
    date: "2024-01-05",
    location: "Consultation Room",
  },
  {
    id: 6,
    title: "Treatment Room",
    category: "treatment",
    image: "/placeholder.svg?height=400&width=600",
    description: "Specialized treatment room for Siddha therapies and procedures",
    date: "2024-01-14",
    location: "Treatment Wing",
  },
  {
    id: 7,
    title: "Pharmacy Section",
    category: "facilities",
    image: "/placeholder.svg?height=400&width=600",
    description: "Well-stocked pharmacy with authentic Siddha and Homeopathic medicines",
    date: "2024-01-11",
    location: "Ground Floor",
  },
  {
    id: 8,
    title: "Patient Care Session",
    category: "patient-care",
    image: "/placeholder.svg?height=400&width=600",
    description: "Personalized patient care and consultation session",
    date: "2024-01-09",
    location: "Consultation Room",
  },
  {
    id: 9,
    title: "Herbal Garden",
    category: "herbal",
    image: "/placeholder.svg?height=400&width=600",
    description: "Medicinal plant garden with rare herbs used in treatments",
    date: "2024-01-07",
    location: "Hospital Garden",
  },
  {
    id: 10,
    title: "Hospital Entrance",
    category: "facilities",
    image: "/placeholder.svg?height=400&width=600",
    description: "Main entrance of Vignesh Hospital with clear signage and accessibility",
    date: "2024-01-13",
    location: "Main Entrance",
  },
  {
    id: 11,
    title: "Sterilization Room",
    category: "facilities",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern sterilization equipment ensuring highest hygiene standards",
    date: "2024-01-06",
    location: "Utility Area",
  },
  {
    id: 12,
    title: "Patient Consultation",
    category: "patient-care",
    image: "/placeholder.svg?height=400&width=600",
    description: "Doctor-patient consultation session showing personalized care approach",
    date: "2024-01-04",
    location: "Consultation Room",
  },
  {
    id: 13,
    title: "Laboratory Equipment",
    category: "facilities",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern diagnostic laboratory with advanced testing equipment",
    date: "2024-01-16",
    location: "Laboratory Wing",
  },
  {
    id: 14,
    title: "Pulse Diagnosis Session",
    category: "treatment",
    image: "/placeholder.svg?height=400&width=600",
    description: "Traditional Siddha pulse diagnosis technique demonstration",
    date: "2024-01-17",
    location: "Consultation Room",
  },
  {
    id: 15,
    title: "Medicinal Herbs Collection",
    category: "herbal",
    image: "/placeholder.svg?height=400&width=600",
    description: "Rare medicinal herbs and plants used in traditional treatments",
    date: "2024-01-18",
    location: "Herbal Storage",
  },
]

interface GalleryGridProps {
  activeCategory?: string
}

export function GalleryGrid({ activeCategory = "all" }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Results Info */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-green-600">{filteredImages.length}</span> photos
            {activeCategory !== "all" && (
              <span>
                {" "}
                in <span className="font-semibold capitalize">{activeCategory.replace("-", " ")}</span> category
              </span>
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=400&width=600"
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="lg"
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-gray-900 hover:bg-white"
                          onClick={() => setSelectedImage(image)}
                        >
                          <ZoomIn className="w-5 h-5 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                        {selectedImage && (
                          <div className="space-y-6">
                            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                              <Image
                                src={selectedImage.image || "/placeholder.svg"}
                                alt={selectedImage.title}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement
                                  target.src = "/placeholder.svg?height=400&width=600"
                                }}
                              />
                            </div>

                            <div className="space-y-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                                  <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                                </div>
                                <Badge variant="secondary" className="bg-green-100 text-green-700 capitalize">
                                  {selectedImage.category.replace("-", " ")}
                                </Badge>
                              </div>

                              <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  {selectedImage.date}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  {selectedImage.location}
                                </div>
                              </div>

                              <div className="flex gap-3 pt-4">
                                <Button variant="outline" size="sm">
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4 mr-2" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Category Badge */}
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 text-gray-700 capitalize">
                    {image.category.replace("-", " ")}
                  </Badge>
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{image.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {image.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {image.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
            <p className="text-gray-500">No images available for the selected category.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredImages.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-green-200 hover:bg-green-50">
              <Camera className="w-5 h-5 mr-2" />
              Load More Photos
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
