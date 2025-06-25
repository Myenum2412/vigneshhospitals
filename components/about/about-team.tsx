"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Award, Calendar, MessageCircle, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutTeam() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const teamMembers = [
    {
      name: "Dr. Vignesh Kumar",
      title: "Chief Medical Officer & Founder's Son",
      specialization: "Siddha Medicine Specialist",
      experience: "25+ Years",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.9,
      patients: "5000+",
      education: ["BSMS - Bachelor of Siddha Medicine", "MD - Traditional Medicine", "Certified Pulse Diagnosis"],
      highlights: ["Good Communicator", "Organized", "Great Bedside Manner", "Research Expert"],
      description:
        "Leading the second generation of our family practice, Dr. Vignesh Kumar combines traditional wisdom with modern medical knowledge to provide comprehensive care.",
      achievements: ["29 years family legacy", "5000+ successful treatments", "Research publications"],
    },
    {
      name: "Dr. Priya Vignesh",
      title: "Senior Homeopathy Doctor",
      specialization: "Women's Health & Pediatrics",
      experience: "15+ Years",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.8,
      patients: "3500+",
      education: ["BHMS - Bachelor of Homeopathy", "MD - Homeopathic Medicine", "Women's Health Specialist"],
      highlights: ["Patient-Focused", "Gentle Approach", "Expert Diagnostician", "Child Specialist"],
      description:
        "Representing the third generation, Dr. Priya specializes in women's health and pediatric care with a gentle, compassionate approach to healing.",
      achievements: ["Women's health expert", "3500+ patients treated", "Pediatric specialist"],
    },
    {
      name: "Dr. Rajesh Vignesh",
      title: "Traditional Medicine Expert",
      specialization: "Chronic Disease Management",
      experience: "20+ Years",
      image: "/placeholder.svg?height=400&width=400",
      rating: 4.9,
      patients: "4200+",
      education: ["BAMS - Bachelor of Ayurveda", "BSMS - Siddha Medicine", "Chronic Disease Specialist"],
      highlights: ["Research-Oriented", "Innovative Treatments", "Compassionate Care", "Holistic Approach"],
      description:
        "Completing our third generation team, Dr. Rajesh focuses on chronic disease management using innovative traditional medicine approaches.",
      achievements: ["Chronic disease expert", "4200+ successful cases", "Treatment innovations"],
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

    const teamItems = document.querySelectorAll(".team-item")
    teamItems.forEach((item) => observer.observe(item))

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
            <Users className="h-4 w-4 mr-2" />
            Meet Our Expert Team
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Generations of{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Medical Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team of qualified doctors brings decades of experience in traditional medicine, combining ancient wisdom
            with modern healthcare practices to provide exceptional patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`team-item group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden ${
                visibleItems.includes(index) ? "animate-fadeInUp" : "opacity-0"
              }`}
              data-index={index}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-gray-900">{member.rating}</span>
                    </div>
                    <div className="text-xs text-gray-600">{member.patients}</div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.title}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Specialization */}
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-2">
                      {member.specialization}
                    </Badge>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-green-600" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

                  {/* Education */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Education & Certifications:</h4>
                    <ul className="space-y-1">
                      {member.education.map((edu, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <Heart className="w-3 h-3 text-red-500 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-4">
                    <Button asChild size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-xs">
                      <Link href="/appointment">
                        <Calendar className="h-3 w-3 mr-1" />
                        Book Appointment
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">12,700+</div>
              <div className="text-sm text-gray-600">Total Patients Treated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">60+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9</div>
              <div className="text-sm text-gray-600">Average Patient Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Treatment Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
