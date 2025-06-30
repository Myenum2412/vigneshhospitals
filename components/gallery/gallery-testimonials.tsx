"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Camera } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Salem, Tamil Nadu",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    text: "The hospital facilities are amazing! Clean, modern, and very welcoming. Dr. Balaji's treatment room is well-equipped and the entire environment promotes healing.",
    treatment: "Skin Disorders",
    visitDate: "December 2023",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    text: "I was impressed by the cleanliness and organization of the hospital. The herbal medicine preparation area shows their commitment to authentic treatments.",
    treatment: "Arthritis",
    visitDate: "January 2024",
  },
  {
    id: 3,
    name: "Meera Devi",
    location: "Erode, Tamil Nadu",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
    text: "The patient care areas are so comfortable and peaceful. You can feel the healing energy the moment you enter. Highly recommend visiting this hospital.",
    treatment: "Thyroid Disorders",
    visitDate: "November 2023",
  },
]

export function GalleryTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700">
            <Camera className="w-4 h-4 mr-2" />
            Patient Experiences
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Patients Say About Our Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from patients who have experienced our hospital environment and healing facilities firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-green-200 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Patient Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>

                {/* Treatment Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <Badge variant="outline" className="text-green-700 border-green-200">
                      {testimonial.treatment}
                    </Badge>
                    <span className="text-gray-500">{testimonial.visitDate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
