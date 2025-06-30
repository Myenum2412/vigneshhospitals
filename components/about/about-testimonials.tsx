"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from "next/image"

export function AboutTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 45,
      condition: "Chronic Asthma",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "After 15 years of suffering from asthma, Dr. Vignesh's treatment gave me a new life. I can breathe freely now without any inhalers. The herbal medicines worked like magic! The entire family approach to treatment made me feel truly cared for.",
      duration: "Treated in 4 months",
      location: "Chennai",
      beforeAfter: {
        before: "Severe breathing difficulty, daily inhaler use",
        after: "Completely inhaler-free, normal breathing",
      },
    },
    {
      name: "Priya Sharma",
      age: 38,
      condition: "Skin Disorders",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "My skin problems that persisted for years were completely cured with their natural treatments. The doctors are very caring and the medicines have no side effects. I'm grateful for their patient approach and detailed explanations.",
      duration: "Treated in 3 months",
      location: "Bangalore",
      beforeAfter: {
        before: "Chronic eczema, constant itching",
        after: "Clear, healthy skin, no recurrence",
      },
    },
    {
      name: "Murugan S",
      age: 52,
      condition: "Arthritis",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "I was unable to walk properly due to severe joint pain. Thanks to the traditional Siddha treatment, I'm now completely pain-free and active again. The three-generation expertise really shows in their treatment approach.",
      duration: "Treated in 6 months",
      location: "Coimbatore",
      beforeAfter: {
        before: "Severe joint pain, mobility issues",
        after: "Pain-free movement, active lifestyle",
      },
    },
    {
      name: "Lakshmi Devi",
      age: 42,
      condition: "Digestive Issues",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Years of digestive problems were resolved with their holistic approach. The personalized treatment plan and regular follow-ups made all the difference. I feel healthier than I have in years.",
      duration: "Treated in 5 months",
      location: "Madurai",
      beforeAfter: {
        before: "Chronic indigestion, stomach pain",
        after: "Perfect digestion, no discomfort",
      },
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2 mb-6">
            <Quote className="h-4 w-4 mr-2" />
            Patient Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Healing Stories
            </span>{" "}
            from Our Patients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear directly from our patients about their transformative healing journeys and how traditional medicine
            changed their lives for the better.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`relative max-w-6xl mx-auto mb-12 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Patient Image & Info */}
              <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={testimonials[currentSlide].image || "/placeholder.svg"}
                      alt={testimonials[currentSlide].name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600 mb-1">
                    Age {testimonials[currentSlide].age} • {testimonials[currentSlide].location}
                  </p>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {testimonials[currentSlide].condition}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Before/After */}
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
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4 mr-2" />
                      Video Story
                    </Button>
                  </div>

                  {/* Navigation */}
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

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">29</div>
            <div className="text-sm text-gray-600">Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
  )
}
