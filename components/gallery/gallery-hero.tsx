"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Award, Users, Building } from "lucide-react"
import Link from "next/link"

export function GalleryHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">
            <Camera className="w-4 h-4 mr-2" />
            Visual Journey Through Our Hospital
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
            Experience Our
            <span className="block">Healing Environment</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take a visual tour of our modern facilities, treatment rooms, and patient care areas. See why thousands of
            patients choose Vignesh Hospital for their healing journey.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Treatment Rooms</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Daily Patients</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">29</div>
              <div className="text-sm text-gray-600">Years Legacy</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
              <Camera className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Gallery Images</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              <Link href="#gallery">
                <Camera className="w-5 h-5 mr-2" />
                Explore Gallery
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-200 hover:bg-green-50">
              <Link href="/appointment">Visit Our Hospital</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
