"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, MapPin, Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

export function GalleryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white hover:bg-white/30">
            <Camera className="w-4 h-4 mr-2" />
            Experience Our Hospital
          </Badge>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Our
            <span className="block">Healing Environment?</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Visit our modern hospital facilities and experience the perfect blend of traditional medicine and
            contemporary healthcare. Book your appointment today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80">+91 98765 43210</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-white/80">Second Agraharam, Salem</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Timings</h3>
              <p className="text-white/80">Mon-Sat: 10AM-8:30PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
