"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Award, Users, Heart, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const achievements = [
    { icon: Award, label: "29+ Years", sublabel: "Legacy" },
    { icon: Users, label: "10,000+", sublabel: "Patients" },
    { icon: Heart, label: "95%", sublabel: "Success Rate" },
    { icon: Clock, label: "24/7", sublabel: "Emergency" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-none px-4 py-2 text-sm font-medium">
                Since 1995 • Three Generations of Excellence
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Healing</span>
                <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block text-3xl lg:text-4xl font-normal text-gray-300 mt-2">
                  Passed Down Through Generations
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                From a small clinic with big dreams to a trusted healthcare institution, our journey spans three decades
                of dedicated service, combining ancient wisdom with modern medical excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-none px-8 py-4 text-lg font-medium"
              >
                <Link href="/appointment">Start Your Journey</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Our Story
              </Button>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    isVisible ? "animate-slideInLeft" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <achievement.icon className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{achievement.label}</div>
                  <div className="text-sm text-gray-300">{achievement.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className={`relative ${isVisible ? "animate-slideInRight" : "opacity-0"}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/care.jpg"
                  alt="Vignesh Hospital Heritage"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certified Excellence</div>
                    <div className="text-sm text-gray-600">ISO Certified Hospital</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float delay-1000">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Patient First</div>
                    <div className="text-sm text-gray-600">Compassionate Care</div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
