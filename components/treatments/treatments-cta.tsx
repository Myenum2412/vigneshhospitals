"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Phone, MessageCircle, Clock, Award, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export function TreatmentsCTA() {
  const benefits = [
    { icon: Shield, text: "100% Natural medicines with no side effects" },
    { icon: Award, text: "29+ years of proven treatment experience" },
    { icon: CheckCircle, text: "95% success rate in chronic diseases" },
    { icon: Clock, text: "Same-day appointments available" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Start Your Healing Journey Today
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Think You May Need{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Treatment?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Don't let health issues hold you back. Our expert doctors are ready to provide personalized, natural
            treatment plans that address your specific condition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main CTA Card */}
          <Card className="lg:col-span-2 border-none shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Consultation Now</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">What happens next?</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      1
                    </div>
                    <span>Book your appointment online or call us</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      2
                    </div>
                    <span>Detailed consultation & diagnosis</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      3
                    </div>
                    <span>Personalized treatment plan</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex-1"
                >
                  <Link href="/appointment">
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-200 text-green-700 hover:bg-green-50 flex-1"
                >
                  <Link href="tel:+919626361797">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact Card */}
          <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Emergency Hotline</div>
                  <div className="text-lg font-semibold text-gray-900">+91 98765 43210</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                  <div className="text-lg font-semibold text-gray-900">+91 98512 34547</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="text-sm text-gray-900">info@vigneshhospital.com</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Button asChild variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  <Link href="https://wa.me/+919851234547">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Chat
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/contact">View Location</Link>
                </Button>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Clinic Hours:</div>
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sunday: 9:00 AM - 2:00 PM</div>
                  <div className="text-green-600 font-medium mt-2">Emergency: 24/7</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-white/80">Patients Treated</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">29+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <div className="text-white/80">Emergency Care</div>
          </div>
        </div>
      </div>
    </section>
  )
}
