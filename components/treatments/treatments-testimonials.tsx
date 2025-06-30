"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TreatmentsTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 45,
      condition: "Chronic Asthma",
      treatment: "Respiratory Care",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "After 15 years of suffering from asthma, Dr. Vignesh's treatment gave me a new life. I can breathe freely now without any inhalers. The herbal medicines worked like magic!",
      duration: "Treated in 4 months",
      beforeAfter: {
        before: "Daily inhaler use, frequent attacks",
        after: "Completely inhaler-free, normal breathing",
      },
    },
    {
      name: "Priya Sharma",
      age: 38,
      condition: "Chronic Eczema",
      treatment: "Skin Disorders",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My skin problems that persisted for years were completely cured with their natural treatments. The doctors are very caring and the medicines have no side effects.",
      duration: "Treated in 3 months",
      beforeAfter: {
        before: "Severe itching, red patches",
        after: "Clear, healthy skin, no recurrence",
      },
    },
    {
      name: "Murugan S",
      age: 52,
      condition: "Severe Arthritis",
      treatment: "Joint & Bone Care",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I was unable to walk properly due to severe joint pain. Thanks to the traditional Siddha treatment, I'm now completely pain-free and active again.",
      duration: "Treated in 6 months",
      beforeAfter: {
        before: "Severe joint pain, mobility issues",
        after: "Pain-free movement, active lifestyle",
      },
    },
    {
      name: "Kavitha Reddy",
      age: 29,
      condition: "PCOD",
      treatment: "Women's Health",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My PCOD is completely under control and my periods are regular now. The holistic approach addressed all my hormonal issues naturally.",
      duration: "Treated in 5 months",
      beforeAfter: {
        before: "Irregular periods, hormonal imbalance",
        after: "Regular cycles, balanced hormones",
      },
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-white text-green-700 border-green-200 px-4 py-2 mb-6">
            <Quote className="h-4 w-4 mr-2" />
            Treatment Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Results from <span className="text-green-600">Real Patients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from patients who experienced complete healing through our traditional treatment approaches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Patient Info */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <Image
                    src={testimonials[currentSlide].image || "/placeholder.svg"}
                    alt={testimonials[currentSlide].name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto border-4 border-white shadow-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600 mb-2">Age {testimonials[currentSlide].age}</p>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">
                    {testimonials[currentSlide].condition}
                  </Badge>
                </div>

                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <span className="font-semibold text-red-700">Before: </span>
                    <span className="text-red-600">{testimonials[currentSlide].beforeAfter.before}</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="font-semibold text-green-700">After: </span>
                    <span className="text-green-600">{testimonials[currentSlide].beforeAfter.after}</span>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {testimonials[currentSlide].duration}
                  </Badge>
                </div>
              </div>

              {/* Testimonial Content */}
              <CardContent className="p-8 flex flex-col justify-center">
                <Quote className="h-12 w-12 text-green-600 opacity-50 mb-6" />
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {testimonials[currentSlide].treatment}
                  </Badge>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" onClick={prevSlide}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500">
                      {currentSlide + 1} / {testimonials.length}
                    </span>
                    <Button variant="outline" size="sm" onClick={nextSlide}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-green-600 w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
