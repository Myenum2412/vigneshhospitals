"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Clock, Award, Leaf, Star, Globe } from "lucide-react"

export function AboutValues() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const values = [
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description:
        "Every treatment plan is personalized to address individual health needs and concerns with compassion.",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      features: ["Personalized treatment", "Compassionate approach", "Individual attention"],
    },
    {
      icon: Shield,
      title: "Traditional Excellence",
      description: "Preserving and practicing authentic Siddha and Homeopathy medicine with proven results.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      features: ["Authentic methods", "Proven results", "Time-tested remedies"],
    },
    {
      icon: Users,
      title: "Family Legacy",
      description: "Three generations of dedicated service, passing down knowledge and expertise through the family.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      features: ["29+ years experience", "Family tradition", "Generational wisdom"],
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 emergency care and consultation services for our patients' peace of mind and wellbeing.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      features: ["24/7 emergency", "Quick response", "Always accessible"],
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO certified hospital maintaining highest standards in traditional medicine and patient care.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      features: ["ISO certified", "Quality standards", "Continuous improvement"],
    },
    {
      icon: Leaf,
      title: "Natural Healing",
      description:
        "100% natural medicines with no side effects, focusing on root cause treatment and holistic wellness.",
      color: "from-green-600 to-teal-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      features: ["No side effects", "Natural ingredients", "Holistic approach"],
    },
    {
      icon: Star,
      title: "Excellence Recognition",
      description: "Consistently rated 5-stars by patients for exceptional care and successful treatment outcomes.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      features: ["5-star rating", "Patient satisfaction", "Proven outcomes"],
    },
    {
      icon: Globe,
      title: "Modern Integration",
      description: "Combining traditional wisdom with modern diagnostic tools for comprehensive healthcare solutions.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      features: ["Modern diagnostics", "Traditional wisdom", "Comprehensive care"],
    },
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

    const valueItems = document.querySelectorAll(".value-item")
    valueItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2 mb-6">
            <Heart className="h-4 w-4 mr-2" />
            Our Core Values
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Principles
            </span>{" "}
            That Guide Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our values are the foundation of everything we do, ensuring that every patient receives the highest quality
            care rooted in tradition and delivered with compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className={`value-item group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden cursor-pointer ${
                visibleItems.includes(index) ? "animate-fadeInUp" : "opacity-0"
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center relative h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}
                  >
                    <value.icon className={`h-10 w-10 ${value.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">{value.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {value.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                          <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full mr-2`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Our Values in Action</h3>
            <p className="text-gray-600 mb-6">
              These principles guide every interaction, treatment, and decision we make for our patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Book Consultation
              </button>
              <button className="border border-green-200 text-green-700 px-8 py-3 rounded-xl font-medium hover:bg-green-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
