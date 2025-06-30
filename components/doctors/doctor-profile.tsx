"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Clock,
  Star,
  Users,
  Award,
  Phone,
  Calendar,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Heart,
  Brain,
  Baby,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"

interface DoctorData {
  id: string
  name: string
  title: string
  specialization: string
  experience: string
  location: string
  clinic: string
  consultationFee: string
  whatsappNumber: string
  image: string
  rating: number
  totalPatients: string
  successRate: string
  qualifications: Array<{
    degree: string
    fullForm: string
    university: string
    year: string
  }>
  specializations: {
    [key: string]: string[]
  }
  treatmentSystems: string[]
  clinicDetails: {
    name: string
    address: string
    timings: {
      weekdays: string
      sunday: string
    }
  }
  highlights: string[]
  platforms: string[]
}

interface DoctorProfileProps {
  doctor: DoctorData
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  const scrollToAppointment = () => {
    document.getElementById("appointment-form")?.scrollIntoView({
      behavior: "smooth",
    })
  }

  const contactWhatsApp = () => {
    const message = `Hello Dr. ${doctor.name}, I would like to inquire about a consultation.`
    const whatsappUrl = `https://wa.me/919626361797?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-2xl border-none">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={doctor.image || "/placeholder.svg"}
                        alt={doctor.name}
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full p-2">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold mb-2">{doctor.name}</h1>
                      <p className="text-xl opacity-90 mb-2">{doctor.title}</p>
                      <p className="text-lg opacity-80">{doctor.specialization}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{doctor.experience} Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-300" />
                      <span>{doctor.rating}/5 Rating</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={scrollToAppointment}
                      size="lg"
                      className="bg-white text-green-600 hover:bg-gray-100"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Appointment
                    </Button>
                    <Button
                      onClick={contactWhatsApp}
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-green-600"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white/10 backdrop-blur border-white/20">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                      <div className="text-2xl font-bold">{doctor.totalPatients}</div>
                      <div className="text-sm opacity-80">Patients Treated</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur border-white/20">
                    <CardContent className="p-4 text-center">
                      <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-300" />
                      <div className="text-2xl font-bold">{doctor.successRate}</div>
                      <div className="text-sm opacity-80">Success Rate</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
                <span>Qualifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {doctor.qualifications.map((qual, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-lg">{qual.degree}</h4>
                  <p className="text-gray-600">{qual.fullForm}</p>
                  <p className="text-sm text-gray-500">
                    {qual.university} - {qual.year}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-lg border-none">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-green-600" />
                <span>Treatment Systems</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {doctor.treatmentSystems.map((system, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">{system}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-3">Patient Experience Highlights:</h4>
                <div className="space-y-2">
                  {doctor.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specializations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(doctor.specializations).map(([category, conditions], index) => {
              const icons = [Heart, Brain, Baby]
              const Icon = icons[index] || Heart

              return (
                <Card key={category} className="shadow-lg border-none hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon className="h-6 w-6 text-green-600" />
                      <span className="text-lg">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Clinic Details */}
        <Card className="shadow-lg border-none mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-green-600" />
              <span>Clinic Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3">{doctor.clinicDetails.name}</h4>
                <p className="text-gray-600 mb-4">{doctor.clinicDetails.address}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Consultation Fee: {doctor.consultationFee}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-3">Clinic Timings</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">{doctor.clinicDetails.timings.weekdays}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">{doctor.clinicDetails.timings.sunday}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium mb-2">Available on Platforms:</h5>
                  <div className="space-y-1">
                    {doctor.platforms.map((platform, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-1">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
