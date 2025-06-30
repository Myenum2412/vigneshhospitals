import { AppointmentForm } from "@/components/appointment-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Phone, Calendar } from 'lucide-react'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Appointment - Online Consultation Booking",
  description:
    "Book your appointment online with Dr. R. Ragavendra Balaji at Vignesh Hospital Salem. Easy online booking for Siddha and Homeopathy consultation. Available Mon-Sat with flexible timings.",
  keywords: [
    "book appointment salem",
    "online appointment booking salem",
    "homeopathy appointment salem",
    "siddha medicine appointment salem",
    "Dr Ragavendra Balaji appointment",
    "consultation booking salem",
    "medical appointment salem",
    "hospital appointment salem",
    "online consultation salem",
    "book doctor appointment salem",
  ],
  openGraph: {
    title: "Book Appointment - Vignesh Hospital Salem Online Booking",
    description:
      "Easy online appointment booking with experienced Siddha & Homeopathy physicians. Book your consultation today for natural healing treatments.",
    url: "/appointment",
    images: [
      {
        url: "/images/vignesh-logo.png",
        width: 1200,
        height: 630,
        alt: "Book Appointment Vignesh Hospital Salem",
      },
    ],
  },
}

export default function AppointmentPage() {
  return (
    <article className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your <span className="text-green-600">Appointment</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule a consultation with our experienced doctors. We're here to help you on your journey to natural
            healing and wellness.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2" aria-label="Appointment booking form">
            <AppointmentForm />
          </section>

          <aside className="space-y-6" aria-label="Hospital information">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" aria-hidden="true" />
                  <span>Clinic Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergency</span>
                  <span className="font-medium text-green-600">24/7 Available</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-600" aria-hidden="true" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="text-gray-600 mb-3 not-italic">
                  123 Healing Street
                  <br />
                  Traditional Medicine District
                  <br />
                  Chennai - 600001
                </address>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-600" aria-hidden="true" />
                    <a href="tel:+919626361797" className="text-sm hover:text-green-600 transition-colors">+91 96263 61797</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-green-600" aria-hidden="true" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="mb-2">• Detailed consultation (30-45 minutes)</p>
                  <p className="mb-2">• Complete health assessment</p>
                  <p className="mb-2">• Personalized treatment plan</p>
                  <p className="mb-2">• Natural medicine prescription</p>
                  <p>• Follow-up scheduling</p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  )
}
