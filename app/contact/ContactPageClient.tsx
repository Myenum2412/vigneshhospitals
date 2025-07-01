"use client"

import {
  MapPin, Phone, Mail, Navigation, Shield
} from "lucide-react"
import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPageClient() {
  const branches = [
    {
      name: "Vignesh Hospital - Agrahara",
      address: "No 220/135, 2ND Agraharam, SALEM - 636001.",
      phone: "+91 94871 61797",
      email: "vigneshospital@gmail.com",
      whatsapp: "+91 94871 61797",
      isMain: true,
      color: "green",
      landmarks: ["2nd Agrahara", "Salem Town"],
      directions: "Located in 2nd Agraharam, Salem. Easily accessible from town bus routes.",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4038.9289011661354!2d78.1674673!3d11.6583909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ce5a73d94d%3A0x3fc9713c5f90387a!2s2nd%20Agraharam%2C%20Car%20St%2C%20Salem%2C%20Tamil%20Nadu%20636001!5e0!3m2!1sen!2sin!4v1719063000000"
    },
    {
      name: "Vignesh Hospital - Junction",
      address: "POLICE STATION OPPOSITE, SIVA COFFEE BAR UPSTAIR, JUNCTION, SALEM.",
      phone: "+91 96162 13713",
      email: "vigneshospital@gmail.com",
      whatsapp: "+91 96162 13713",
      isMain: false,
      color: "blue",
      landmarks: ["Siva Coffee Bar", "Police Station", "Junction"],
      directions: "Located above Siva Coffee Bar, opposite the police station in Salem Junction.",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4039.1512193655835!2d78.1161014!3d11.6709773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1e76756d1e1%3A0x9d3d65fef08909d3!2sVSN%20complex%2C%20underground%2C%20uzhavar%20sandhai%20oppsite%2C%20junction%2C%20Tamil%20Nadu%20636005!5e0!3m2!1sen!2sin!4v1719063000001"
    },
    {
      name: "Ruthra Clinic (Unit of Vignesh Hospital)",
      address: "1st FLOOR, GV COMPLEX, NEAR SARATHY HOTEL, THIRUVAGOUNDANUR BYPASS, SALEM, TAMIL NADU – 636005.",
      phone: "+91 96829 26829",
      email: "vigneshospital@gmail.com",
      whatsapp: "+91 96829 26829",
      isMain: false,
      color: "orange",
      landmarks: ["GV Complex", "Sarathy Hotel", "Thiruvagoundanur Bypass"],
      directions: "Located near Sarathy Hotel in GV Complex, Thiruvagoundanur Bypass.",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4039.0789382150947!2d78.1240007!3d11.6678995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf11397f68a3b%3A0xc2022a669870c383!2sGV%20complex%2C%20byepass%2C%20near%20sarathy%20hotel%2C%20Rajapuram%2C%20Thiruvakavundanur%2C%20Salem%2C%20Tamil%20Nadu%20636005!5e0!3m2!1sen!2sin!4v1719063000002"
    }
  ]

  return (
    <article className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Vignesh Hospital</h1>
          <p className="text-xl mb-6">Multiple Locations in Salem, Tamil Nadu</p>
          <div className="flex flex-wrap justify-center gap-4">
            {branches.map((branch, i) => (
              <Badge key={i} variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
                {branch.name.split(" - ")[1] || branch.name}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <Shield className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Privacy & Security:</strong> Your personal information is protected with encryption. Used only for medical purposes.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Branch Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit any of our branches for expert Siddha and Homeopathy treatments. Agrahara is our main branch.
            </p>
          </header>

          <div className="space-y-12">
            {branches.map((branch, index) => (
              <Card key={index} className={`overflow-hidden border-l-4 border-l-${branch.color}-500`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{branch.name}</CardTitle>
                    {branch.isMain && <Badge className="bg-green-100 text-green-800">Main Branch</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <address className="flex items-start space-x-3 not-italic">
                        <MapPin className={`h-5 w-5 mt-1 text-${branch.color}-500`} />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600">{branch.address}</p>
                        </div>
                      </address>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Phone className={`h-5 w-5 text-${branch.color}-500`} />
                          <div>
                            <p className="font-medium text-gray-900">WhatsApp</p>
                            <a href={`https://wa.me/${branch.phone.replace(/\D/g, "")}`} className="text-gray-600 text-sm hover:text-green-600">{branch.whatsapp}</a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className={`h-5 w-5 text-${branch.color}-500`} />
                          <div>
                            <p className="font-medium text-gray-900">Email</p>
                            <a href={`mailto:${branch.email}`} className="text-gray-600 text-sm hover:text-green-600">{branch.email}</a>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Navigation className={`h-5 w-5 mt-1 text-${branch.color}-500`} />
                        <div>
                          <p className="font-medium text-gray-900">Directions</p>
                          <p className="text-gray-600">{branch.directions}</p>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Nearby Landmarks:</p>
                        <div className="flex flex-wrap gap-2">
                          {branch.landmarks.map((landmark, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{landmark}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Button className={`bg-${branch.color}-600 hover:bg-${branch.color}-700`} onClick={() => window.open(`tel:${branch.phone}`, "_self")}> <Phone className="h-4 w-4 mr-2" />Call Now</Button>
                        <Button variant="outline" onClick={() => window.open(branch.embedUrl, "_blank")}> <Navigation className="h-4 w-4 mr-2" />Get Directions</Button>
                      </div>
                    </div>
                    <div className="h-80 border rounded-lg overflow-hidden">
                      <iframe
                        src={branch.embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${branch.name} Location Map`}
                      />
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
