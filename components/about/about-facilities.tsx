"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, Microscope, Leaf, Heart, Shield, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

export function AboutFacilities() {
  const [activeTab, setActiveTab] = useState(0)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      icon: Building,
      title: "Modern Consultation Rooms",
      description: "Comfortable and private spaces designed for detailed consultations and examinations.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Private consultation rooms", "Comfortable seating", "Modern equipment", "Peaceful environment"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Leaf,
      title: "Herbal Medicine Laboratory",
      description: "State-of-the-art facility for preparing fresh, authentic traditional medicines.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["In-house preparation", "Quality control", "Fresh medicines", "Traditional methods"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Microscope,
      title: "Diagnostic Center",
      description: "Modern diagnostic equipment for accurate assessment and treatment planning.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Advanced diagnostics", "Quick results", "Accurate testing", "Modern equipment"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Patient Care Areas",
      description: "Comfortable waiting areas and recovery spaces designed for patient comfort.",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Comfortable seating", "Health education", "Family areas", "Peaceful ambiance"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const amenities = [
    { icon: Shield, title: "Sanitized Environment", description: "Highest hygiene standards maintained" },
    { icon: Clock, title: "24/7 Emergency", description: "Round-the-clock emergency services" },
    { icon: Users, title: "Family Consultation", description: "Family-friendly consultation spaces" },
    { icon: Award, title: "ISO Certified", description: "International quality standards" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    const facilityItems = document.querySelectorAll(".facility-item")
    facilityItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2 mb-6">
            <Building className="h-4 w-4 mr-2" />
            Our Facilities
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Modern{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Infrastructure
            </span>{" "}
            for Traditional Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our hospital combines modern facilities with traditional healing environments to provide the best possible
            care for our patients in a comfortable, welcoming setting.
          </p>
        </div>

        {/* Facility Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <Button
                key={index}
                variant={activeTab === index ? "default" : "outline"}
                onClick={() => setActiveTab(index)}
                className={`${activeTab === index ? `bg-gradient-to-r ${facility.color} text-white border-none` : "hover:bg-gray-50"}`}
              >
                <IconComponent className="h-4 w-4 mr-2" />
                {facility.title}
              </Button>
            )
          })}
        </div>

        {/* Active Facility Display */}
        <div className="mb-16">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={facilities[activeTab].image || "/placeholder.svg"}
                  alt={facilities[activeTab].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${facilities[activeTab].color} rounded-xl flex items-center justify-center mr-4`}
                  >
                    {(() => {
                      const IconComponent = facilities[activeTab].icon
                      return <IconComponent className="h-6 w-6 text-white" />
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{facilities[activeTab].title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{facilities[activeTab].description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {facilities[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${facilities[activeTab].color} rounded-full mr-2`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <Card
                key={index}
                className={`facility-item text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 ${visibleItems.includes(index) ? "animate-fadeInUp" : "opacity-0"}`}
                data-index={index}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Take a Virtual Tour</h3>
            <p className="text-gray-600 mb-6">
              Experience our facilities from the comfort of your home with our interactive virtual tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Start Virtual Tour
              </Button>
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
