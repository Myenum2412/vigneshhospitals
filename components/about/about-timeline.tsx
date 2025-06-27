"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Users, Building, Leaf, Globe, Star } from "lucide-react"

export function AboutTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const milestones = [
    {
      year: "1995",
      title: "The Beginning",
      description:
        "Dr. P. Ravi Senior founded the hospital with a vision to provide authentic traditional medicine to the community.",
      icon: Building,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      achievements: ["First clinic established", "Traditional medicine focus", "Community trust building"],
    },
    {
      year: "2000",
      title: "Growing Recognition",
      description:
        "Expanded services and gained recognition for successful treatment of chronic conditions using natural remedies.",
      icon: Award,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      achievements: ["500+ patients treated", "Chronic disease specialization", "Local recognition"],
    },
    {
      year: "2005",
      title: "Modern Integration",
      description:
        "Integrated modern diagnostic facilities while maintaining traditional treatment approaches for comprehensive care.",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      achievements: ["Modern diagnostics added", "Comprehensive care model", "Technology integration"],
    },
    {
      year: "2010",
      title: "Second Generation",
      description:
        "A new generation joined, bringing fresh perspectives while preserving traditional wisdom and values to continue the hospital's legacy.",
      icon: Users,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      achievements: ["Second generation leadership", "Expanded medical team", "Enhanced patient care"],
    },
    {
      year: "2015",
      title: "Herbal Manufacturing",
      description:
        "Launched in-house herbal medicine manufacturing unit to ensure quality and authenticity of treatments.",
      icon: Leaf,
      color: "from-green-600 to-teal-500",
      bgColor: "bg-green-50",
      achievements: ["Manufacturing unit launched", "Quality control systems", "Authentic medicine production"],
    },
    {
      year: "2020",
      title: "Third Generation",
      description:
        "Dr. R. Ragavendra Balaji joined, continuing the family legacy with modern medical knowledge.",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      achievements: ["Third generation doctors", "Specialized treatments", "Women's health focus"],
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description:
        "Embraced digital healthcare while maintaining personal touch, serving 10,000+ patients with online presence.",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      achievements: ["Digital presence", "10,000+ patients served", "Online consultations"],
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
      { threshold: 0.3 },
    )

    const timelineItems = document.querySelectorAll(".timeline-item")
    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2 mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            Our Journey Through Time
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Decades of{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Healing Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to becoming a trusted healthcare institution, our timeline reflects our commitment to
            traditional medicine and patient care.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-200 via-blue-200 to-purple-200 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                data-index={index}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card
                    className={`border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                      visibleItems.includes(index)
                        ? index % 2 === 0
                          ? "animate-slideInLeft"
                          : "animate-slideInRight"
                        : "opacity-0"
                    }`}
                  >
                    <CardContent className="p-8 relative">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-5`}></div>

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 ${milestone.bgColor} rounded-xl flex items-center justify-center`}>
                            <milestone.icon
                              className={`h-6 w-6 bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}
                            />
                          </div>
                          <Badge className={`bg-gradient-to-r ${milestone.color} text-white border-none`}>
                            {milestone.year}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{milestone.description}</p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {milestone.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center">
                                <div className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mr-2`}></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="relative z-20">
                  <div
                    className={`w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full border-4 border-white shadow-lg transform transition-all duration-500 ${
                      visibleItems.includes(index) ? "scale-100" : "scale-0"
                    }`}
                  ></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
