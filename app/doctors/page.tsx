import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Phone, Star, Award, Users, Clock, Stethoscope, BookOpen, GraduationCap } from 'lucide-react'
import Image from "next/image"
import type { Metadata } from "next"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Our Expert Physicians - Vignesh Hospital",
  description: "Meet our team of highly qualified Siddha and Homeopathy specialists with decades of combined experience in traditional medicine.",
}

const doctors = [
  {
    id: "dr-p-ravi",
    name: "Dr. P. Ravi",
    designation: "Founder & Chief Siddha Physician",
    qualifications: ["BSMS", "DSMO (Retired)"],
    experience: "40+ Years",
    specializations: [
      "Traditional Siddha Medicine",
      "Chronic Conditions",
      "Fertility Treatments",
      "Panchakarma Therapies",
      "Geriatric Care"
    ],
    image: "/images/p-ravi.jpeg",
    rating: 4.9,
    patients: "50,000+",
    consultationFee: "₹200",
    availability: "Mon-Sat: 8AM-1PM, 3PM-7PM",
    languages: ["Tamil", "English"],
    about: "Fifth-generation Siddha practitioner with 40+ years experience. Founder of Vignesh Siddha Hospital and former District Siddha Medical Officer.",
    clinic: {
      name: "Vignesh Siddha Hospital",
      address: "No 220/135, 2nd Agrahara,Salem - 636001, Tamil Nadu"
    }
  },
  {
    id: "dr-ragavendra-balaji",
    name: "Dr. R. Ragavendra Balaji",
    designation: "Chief Physician & Medical Director",
    qualifications: ["BHMS", "MD (Homeopathy)", "M.Sc Psychology"],
    experience: "15+ Years",
    specializations: [
      "Chronic Diseases",
      "Mental Health",
      "Fertility & Reproductive Health",
      "Skin Disorders",
      "Respiratory Issues",
    ],
    image: "/images/ragavendra-balaji.jpeg",
    rating: 4.8,
    patients: "10,000+",
    consultationFee: "₹200",
    availability: "Mon-Sat: 10AM-1PM, 5PM-8:30PM",
    languages: ["Tamil", "English", "Malayalam", "Hindi"],
    about: "Specializes in treating chronic conditions with a holistic approach, combining traditional wisdom with modern diagnostic methods.",
    clinic: {
      name: "Vignesh Hospital",
      address: "No 220/135, 2nd Agrahara,Salem - 636001, Tamil Nadu",
    }
  }
]

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-green-700 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 bg-white/10 backdrop-blur-sm text-white border-white/20">
              <Stethoscope className="w-4 h-4 mr-2" />
              Our Medical Experts
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-green-300">Expert Physicians</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Combining decades of traditional healing wisdom with modern medical expertise
            </p>
            <WhatsAppPopup />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
              <Award className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900">55+</h3>
              <p className="text-gray-600">Combined Years</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900">60K+</h3>
              <p className="text-gray-600">Patients Treated</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900">4.8+</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-100">
              <GraduationCap className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-600">Qualifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialist Doctors</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each with unique expertise in different aspects of traditional medicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  {/* Doctor Image */}
                  <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-green-600 text-white">
                        {doctor.experience} Experience
                      </Badge>
                    </div>
                  </div>

                  {/* Doctor Details */}
                  <div className="w-full md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold text-gray-900">{doctor.name}</CardTitle>
                      <CardDescription className="text-green-600 font-medium">
                        {doctor.designation}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                          Qualifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doctor.qualifications.map((qual, i) => (
                            <Badge key={i} variant="outline" className="text-green-700">
                              {qual}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Stethoscope className="w-4 h-4 mr-2 text-blue-500" />
                          Specializations
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {doctor.specializations.slice(0, 4).map((spec, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></span>
                              <span className="text-sm text-gray-600">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4 pt-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{doctor.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-blue-500 mr-1" />
                          <span className="font-medium">{doctor.patients}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-green-500 mr-1" />
                          <span className="font-medium">{doctor.consultationFee}</span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-0 mt-6 flex flex-col sm:flex-row gap-3">
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                        <Link href={`/doctors/${doctor.id}`}>
                          <Calendar className="w-4 h-4 mr-2" />
                          View Profile
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link href="/appointment">
                          Book Consultation
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-blue-50 rounded-xl p-8 md:p-10 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vignesh Hospital</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                  Location
                </h4>
                <p className="text-gray-600">No 220/135, 2nd Agrahara,Salem - 636001, Tamil Nadu</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <Clock className="w-5 h-5 text-blue-500 mr-2" />
                  Consultation Hours
                </h4>
                <p className="text-gray-600">Monday to Saturday: 8:00 AM - 8:30 PM</p>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" className="border-blue-300 text-blue-600">
                <Link href="/contact">
                  Get Directions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
