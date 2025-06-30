"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Leaf, Heart, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TreatmentsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const highlights = [
    { icon: Leaf, label: "100% Natural", sublabel: "No Side Effects" },
    { icon: Heart, label: "Root Cause", sublabel: "Treatment" },
    { icon: Award, label: "29+ Years", sublabel: "Experience" },
    { icon: Stethoscope, label: "Proven", sublabel: "Results" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
                <Leaf className="h-4 w-4 mr-2" />
                Natural Healing Solutions
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Complete</span>
                <span className="block text-yellow-300">Root-Cause</span>
                <span className="block text-2xl lg:text-3xl font-normal text-white/90 mt-2">Based Treatments</span>
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                We provide comprehensive treatments using proven Siddha and Homeopathy techniques that address the root
                cause of diseases, not just symptoms. Experience natural healing with lasting results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium"
              >
                <Link href="#treatments">Explore Treatments</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
                asChild
              >
                <Link href="/appointment">Book Consultation</Link>
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    isVisible ? "animate-slideInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <highlight.icon className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{highlight.label}</div>
                  <div className="text-sm text-white/80">{highlight.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hall.png"
                  alt="Traditional Medicine Treatment"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">95% Success Rate</div>
                    <div className="text-sm text-gray-600">In Chronic Diseases</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float delay-1000">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">10,000+ Patients</div>
                    <div className="text-sm text-gray-600">Successfully Treated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
