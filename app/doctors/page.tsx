import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Phone, Star, Award, Users, Clock, Stethoscope } from 'lucide-react'
import Image from "next/image"
import type { Metadata } from "next"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Our Doctors - Expert Siddha & Homeopathy Physicians",
  description:
    "Meet Dr. R. Ragavendra Balaji - BHMS, MD (Homeopathy), M.Sc Psychology with 15+ years experience in Salem. Expert in chronic diseases, mental health, fertility treatments, and traditional medicine.",
  keywords: [
    "Dr Ragavendra Balaji salem",
    "homeopathy doctor salem",
    "siddha doctor salem",
    "BHMS doctor salem",
    "MD homeopathy salem",
    "psychology doctor salem",
    "chronic disease specialist salem",
    "fertility doctor salem",
    "mental health doctor salem",
    "traditional medicine doctor salem",
    "experienced homeopath salem",
    "qualified siddha physician salem",
  ],
  openGraph: {
    title: "Dr. R. Ragavendra Balaji - Expert Siddha & Homeopathy Physician Salem",
    description:
      "15+ years experienced doctor specializing in Siddha and Homeopathy treatments. BHMS, MD (Homeopathy), M.Sc Psychology qualified physician in Salem.",
    url: "/doctors",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Dr Ragavendra Balaji Salem",
      },
    ],
  },
}

const doctors = [
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
    rating: 4.9,
    patients: "5000+",
    consultationFee: "₹200",
    availability: "Mon-Sat: 10AM-1PM, 5PM-8:30PM",
    languages: ["Tamil", "English", "Malayalam","Hindi"],
    about:
      "Dr. Ragavendra Balaji is a highly experienced physician with over 15 years of expertise in Siddha and Homeopathy medicine. He specializes in treating chronic conditions with a holistic approach, combining traditional wisdom with modern diagnostic methods.",
  },
]

export default function DoctorsPage() {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-green-100 text-green-700">
              <Stethoscope className="w-4 h-4 mr-2" aria-hidden="true" />
              Expert Medical Team
            </Badge>
            <WhatsAppPopup />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
              Meet Our
              <span className="block">Expert Doctors</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our experienced physicians combine traditional Siddha and Homeopathy wisdom with modern medical knowledge
              to provide comprehensive healthcare solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Award className="w-8 h-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-gray-900">4.9</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" aria-hidden="true" />
                <div className="text-2xl font-bold text-gray-900">6</div>
                <div className="text-sm text-gray-600">Days a Week</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Doctors Grid */}
      <section className="py-16 bg-white" aria-label="Doctor profiles">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <article className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Doctor Image */}
                    <div className="relative aspect-[4/5] md:aspect-auto">
                      <Image src={doctor.image || "/placeholder.svg"} alt={`${doctor.name} - ${doctor.designation}`} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-green-600 text-white">{doctor.experience} Experience</Badge>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <header className="mb-6">
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                          <p className="text-lg text-green-600 font-medium">{doctor.designation}</p>
                        </header>

                        {/* Qualifications */}
                        <section className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-2">Qualifications:</h3>
                          <div className="flex flex-wrap gap-2">
                            {doctor.qualifications.map((qual, index) => (
                              <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                                {qual}
                              </Badge>
                            ))}
                          </div>
                        </section>

                        {/* Specializations */}
                        <section className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-2">Specializations:</h3>
                          <div className="flex flex-wrap gap-2">
                            {doctor.specializations.map((spec, index) => (
                              <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </section>

                        {/* About */}
                        <p className="text-gray-600 mb-6 leading-relaxed">{doctor.about}</p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                            <span className="font-semibold">{doctor.rating}</span>
                            <span className="text-gray-600">Rating</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" aria-hidden="true" />
                            <span className="font-semibold">{doctor.patients}</span>
                            <span className="text-gray-600">Patients</span>
                          </div>
                        </div>

                        {/* Contact Info */}
                        <address className="space-y-3 mb-6 not-italic">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Phone className="w-5 h-5 text-green-600" aria-hidden="true" />
                            <span>Consultation Fee: {doctor.consultationFee}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <Clock className="w-5 h-5 text-green-600" aria-hidden="true" />
                            <span>{doctor.availability}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="w-5 h-5 text-green-600" aria-hidden="true" />
                            <span>Vignesh Hospital, Salem</span>
                          </div>
                        </address>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="flex-1 bg-gradient-to-r from-green-600 to-green-700">
                          <Link href={`/doctors/${doctor.id}`}>
                            <Calendar className="w-4 h-4 mr-2" aria-hidden="true" />
                            View Full Profile
                          </Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1 border-green-200 hover:bg-green-50">
                          <Link href="/appointment">Book Appointment</Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
