"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, MapPin, Clock, Star, Shield, Heart, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200 rounded-full opacity-20 animate-pulse delay-2000"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                <Award className="w-4 h-4 mr-1" />
                25+ Years Experience
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                <Users className="w-4 h-4 mr-1" />
                10,000+ Patients Treated
              </Badge>
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                <Shield className="w-4 h-4 mr-1" />
                Natural Healing
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Traditional Healing
                <span className="block text-green-600">Modern Care</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience the power of Siddha and Homeopathy medicine at Vignesh Multi Speciality Hospital. Three
                generations of trusted healing across Salem.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Side-Effect Free</p>
                  <p className="text-sm text-gray-600">Natural treatments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Care</p>
                  <p className="text-sm text-gray-600">Qualified doctors</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">3 Locations</p>
                  <p className="text-sm text-gray-600">Convenient access</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Emergency</p>
                  <p className="text-sm text-gray-600">Always available</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment">
                <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                onClick={() => window.open("tel:+919626361797", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91 96263 61797
              </Button>
            </div>

            {/* Contact Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <a
                      href="tel:+919626361797"
                      className="font-semibold text-gray-900 hover:text-green-600 transition-colors"
                    >
                      +91 96263 61797
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Main Branch</p>
                    <p className="font-semibold text-gray-900">2nd Agraharam, Car St, Salem</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Open Today</p>
                    <p className="font-semibold text-gray-900">10 AM - 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                <Image
                  src="/images/care.jpg"
                  alt="Dr. R. Ragavendra Balaji - Vignesh Hospital"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-lg"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. R. Ragavendra Balaji</p>
                    <p className="text-sm text-gray-600">BHMS, MD (Homeopathy)</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">15+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
