import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Award, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function DoctorsPreview() {
  const doctors = [
    {
      name: "Dr. R. Ragavendra Balaji",
      title: "Chief Medical Officer & Founder",
      specialization: "BHMS, MD (Homeopathy), M.Sc Psychology",
      experience: "15+ Years",
      image: "/images/ragavendra-balaji.jpeg",
      rating: 4.9,
      patients: "5000+ Treated",
      highlights: [
        "BHMS Graduate 2010",
        "MD Homeopathy 2014",
        "Psychology Expert",
        "Chronic Disease Specialist",
      ],
    },
    {
      name: "Dr. P. Ravi",
      title: "Founder – Salem Vignesh Siddha Hospital",
      specialization: "District siddha medical officer (retaired)",
      experience: "40+ Years",
      image: "/images/dad.jpeg",
      rating: 5.0,
      patients: "8000+ Treated",
      highlights: [
        "BSMS Graduate 1981",
        "District Siddha Medical Officer",
        "AYUSH Drug Inspector",
        "5th-Gen Siddha Healer",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Meet Our Experts</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experienced <span className="text-green-600">Medical Professionals</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of qualified doctors brings decades of experience in traditional medicine, combining ancient wisdom
            with modern healthcare practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center max-w-5xl mx-auto mb-12">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg bg-white/80 backdrop-blur"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white rounded-full p-2">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h4>
                  <p className="text-green-600 font-medium mb-1">{doctor.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.specialization}</p>

                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">{doctor.patients}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{doctor.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-900 text-sm">Key Highlights:</h5>
                  <div className="flex flex-wrap gap-2">
                    {doctor.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/doctors">Meet All Our Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
