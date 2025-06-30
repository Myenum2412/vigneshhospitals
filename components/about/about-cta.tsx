"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, MessageCircle, Award, Clock, Heart } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Begin Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Healing Journey?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients who have experienced the transformative power of traditional medicine. Our
            three-generation legacy of healing excellence awaits you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main CTA Card */}
          <Card className="lg:col-span-2 border-none shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Your Consultation Today</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Take the first step towards natural healing. Our experienced doctors will create a personalized
                    treatment plan just for you.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Same-day appointments available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Personalized treatment plans</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
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
                      <Link href="tel:+919876543210">
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-4">What to Expect:</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span>Detailed health assessment and consultation (30-45 minutes)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Personalized treatment plan based on your condition</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <span>Natural medicine prescription with detailed instructions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                      <span>Follow-up schedule and progress monitoring</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <span>Lifestyle and dietary recommendations</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="border-none shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Emergency Hotline</div>
                  <div className="text-lg font-semibold text-gray-900">+91 98765 43210</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <div className="text-lg font-semibold text-gray-900">info@vigneshhospital.com</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Address</div>
                  <div className="text-sm text-gray-900">
                    123 Healing Street
                    <br />
                    Chennai - 600001
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  <Link href="https://wa.me/919876543210">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Chat
                  </Link>
                </Button>
                <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/contact">View Location</Link>
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <div className="font-semibold mb-2">Clinic Hours:</div>
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sunday: 9:00 AM - 2:00 PM</div>
                  <div className="text-green-600 font-medium mt-1">Emergency: 24/7</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-3xl font-bold mb-2">29+ Years</div>
            <div className="text-white/80">Trusted Legacy</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <div className="text-white/80">Happy Patients</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
