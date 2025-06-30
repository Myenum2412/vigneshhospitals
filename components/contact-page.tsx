"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Phone,
  MapPin,
  Clock,
  Mail,
  Car,
  Ambulance,
  Stethoscope,
  Building2,
  Users,
  Calendar,
  Shield,
  Star,
} from "lucide-react"

const locations = [
  {
    id: "main",
    name: "Main Campus",
    address: "123 Healthcare Avenue, Medical District, MD 12345",
    phone: "(555) 123-4567",
    emergency: "(555) 911-HELP",
    email: "main@medicare-hospital.com",
    hours: {
      emergency: "24/7",
      outpatient: "6:00 AM - 10:00 PM",
      visiting: "8:00 AM - 8:00 PM",
    },
    specialties: ["Cardiology", "Neurology", "Oncology", "Emergency Medicine", "Surgery"],
    features: ["Level 1 Trauma Center", "Helicopter Landing", "500+ Beds", "Full Service"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    description:
      "Our flagship medical center offering comprehensive healthcare services with state-of-the-art facilities and 24/7 emergency care.",
  },
  {
    id: "north",
    name: "North Branch",
    address: "456 Wellness Boulevard, Northside, MD 12346",
    phone: "(555) 234-5678",
    emergency: "(555) 911-HELP",
    email: "north@medicare-hospital.com",
    hours: {
      emergency: "24/7",
      outpatient: "7:00 AM - 9:00 PM",
      visiting: "9:00 AM - 7:00 PM",
    },
    specialties: ["Family Medicine", "Pediatrics", "Women's Health", "Orthopedics", "Radiology"],
    features: ["Family-Focused Care", "Pediatric Wing", "200+ Beds", "Outpatient Surgery"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0159413!3d40.7227753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    description:
      "Community-focused healthcare facility specializing in family medicine, pediatrics, and women's health services.",
  },
  {
    id: "south",
    name: "South Campus",
    address: "789 Recovery Drive, Southgate, MD 12347",
    phone: "(555) 345-6789",
    emergency: "(555) 911-HELP",
    email: "south@medicare-hospital.com",
    hours: {
      emergency: "24/7",
      outpatient: "6:30 AM - 9:30 PM",
      visiting: "8:30 AM - 7:30 PM",
    },
    specialties: ["Rehabilitation", "Physical Therapy", "Mental Health", "Geriatrics", "Chronic Care"],
    features: ["Rehabilitation Center", "Mental Health Wing", "150+ Beds", "Long-term Care"],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0259413!3d40.7027753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzA2LjAiTiA3NMKwMDEnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
    description:
      "Specialized facility focusing on rehabilitation services, mental health care, and long-term patient support.",
  },
]

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState("main")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "main",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our healthcare professionals across our three convenient locations. We're here to provide
            exceptional medical care when you need it most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Ambulance className="w-4 h-4 mr-2" />
              24/7 Emergency Care
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Phone className="w-4 h-4 mr-2" />
              Multilingual Support
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Insurance Accepted
            </Badge>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <Ambulance className="w-6 h-6 text-white mr-3" />
            <div className="text-white">
              <span className="font-bold">Medical Emergency?</span>
              <span className="ml-2">Call +91 96263 61797 </span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three convenient locations to serve you better, each offering specialized care and services tailored to
              your community's needs.
            </p>
          </div>

          <Tabs value={selectedLocation} onValueChange={setSelectedLocation} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {locations.map((location) => (
                <TabsTrigger key={location.id} value={location.id} className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {locations.map((location) => (
              <TabsContent key={location.id} value={location.id}>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Location Details */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          {location.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600">{location.description}</p>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium">Address</p>
                              <p className="text-gray-600">{location.address}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium">Phone Numbers</p>
                              <p className="text-gray-600">General: {location.phone}</p>
                              <p className="text-red-600 font-medium">Emergency: {location.emergency}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-gray-600">{location.email}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                            <div>
                              <p className="font-medium">Hours</p>
                              <p className="text-gray-600">Emergency: {location.hours.emergency}</p>
                              <p className="text-gray-600">Outpatient: {location.hours.outpatient}</p>
                              <p className="text-gray-600">Visiting: {location.hours.visiting}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">Specialties</p>
                          <div className="flex flex-wrap gap-2">
                            {location.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                <Stethoscope className="w-3 h-3 mr-1" />
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">Key Features</p>
                          <div className="flex flex-wrap gap-2">
                            {location.features.map((feature) => (
                              <Badge key={feature} variant="outline">
                                <Star className="w-3 h-3 mr-1" />
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Appointment
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Car className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Google Map */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Location Map</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="aspect-[4/3] w-full">
                          <iframe
                            src={location.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-b-lg"
                          ></iframe>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Information</CardTitle>
                      </CardHeader>
                      <CardContent>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Insurance</p>
                            <p className="font-semibold">Most Accepted</p>
                          </div>
                          <div className="text-center p-3 bg-purple-50 rounded-lg">
                            <Ambulance className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">Emergency</p>
                            <p className="font-semibold">24/7 Available</p>
                          </div>
                          
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
    </div>
  )
}
