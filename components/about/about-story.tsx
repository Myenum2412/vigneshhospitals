"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Quote, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slideInLeft" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2" />
                Our Heritage Story
              </Badge>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                A Legacy Born from{" "}
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Compassion
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  In 1995, Dr. Vignesh Senior had a simple yet profound vision: to bring the healing power of
                  traditional medicine to those who needed it most. What started as a small clinic in the heart of
                  Chennai has grown into a beacon of hope for thousands seeking natural, holistic healthcare.
                </p>

                <p>
                  Our founder believed that true healing comes not just from treating symptoms, but from understanding
                  the root cause of illness and addressing it with time-tested remedies passed down through generations
                  of traditional healers.
                </p>

                <p>
                  Today, as we continue this legacy through three generations, we remain committed to the same
                  principles that guided our founder: compassionate care, natural healing, and the belief that every
                  patient deserves personalized attention and treatment.
                </p>
              </div>
            </div>

            {/* Quote */}
            <Card className="border-none shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-green-600 mb-4 opacity-50" />
                <blockquote className="text-xl font-medium text-gray-900 mb-4 italic">
                  "Healing is not just about curing disease; it's about restoring harmony between mind, body, and
                  spirit. This philosophy has guided our family for three generations."
                </blockquote>
                <cite className="text-green-600 font-semibold">— Dr. Vignesh Senior, Founder</cite>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Link href="/doctors">
                  Meet Our Doctors
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                <Link href="/treatments">Our Treatments</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  {/* Large Image */}
                  <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Gallery-17-min-scaled.jpg"
                      alt="Hospital Heritage"
                      width={600}
                      height={300}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">Est. 1995</div>
                      <div className="text-xs opacity-80">Three Generations of Care</div>
                    </div>
                  </div>

                  {/* Small Images */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="images/medices.jpg"
                      alt="Traditional Medicine"
                      width={400}
                      height={400}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent"></div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/gener.jpg"
                      alt="Modern Facilities"
                      width={300}
                      height={200}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1000"></div>

              {/* Achievement Badge */}
              <div className="absolute top-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">29+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </div>

              {/* Patient Count Badge */}
              <div className="absolute bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl animate-float delay-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-xs text-gray-600">Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
