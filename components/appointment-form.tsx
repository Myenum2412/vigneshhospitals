"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Calendar, Upload, FileText, X, MessageCircle, Clock, User, ChevronRight, CheckCircle } from "lucide-react"

const departments = [
  "Asthma",
"Kidney Stone",
"Arthritis",
"Piles",
"Hair Problems",
"Skin Problems",
"Menstrual Disorder",
"Impotency/Infertility",
"Nervous weakness",
"Ulcer",
]

const timeSlots = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
]

const appointmentTypes = [
  "New Consultation",
  "Follow-up Visit",
  "Emergency Consultation",
]

interface UploadedFile {
  file: File
  preview: string
  type: string
}

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    emergencyContact: "",
    department: "",
    appointmentType: "",
    appointmentDate: "",
    appointmentTime: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSection, setActiveSection] = useState<"personal" | "appointment">("personal")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    files.forEach((file) => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`)
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const newFile: UploadedFile = {
          file,
          preview: event.target?.result as string,
          type: file.type,
        }
        setUploadedFiles((prev) => [...prev, newFile])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const sendToWhatsApp = () => {
    const whatsappNumber = "919851234547"

    const appointmentMessage = `
🏥 *VIGNESH HOSPITAL - Appointment Request*

👤 *Personal Information:*
• Name: ${formData.firstName} ${formData.lastName}
• Age: ${formData.age} years
• Gender: ${formData.gender}
• Phone: ${formData.phone}
• Address: ${formData.address}
• Emergency Contact: ${formData.emergencyContact}

📅 *Appointment Details:*
• Department: ${formData.department}
• Appointment Type: ${formData.appointmentType}
• Preferred Date: ${formData.appointmentDate}
• Preferred Time: ${formData.appointmentTime}

📎 *Medical Reports:* ${uploadedFiles.length} file(s) uploaded
${uploadedFiles.map((f, i) => `${i + 1}. ${f.file.name}`).join("\n")}

---
*Please confirm this appointment request.*

Thank you!
    `.trim()

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(appointmentMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      sendToWhatsApp()
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phone: "",
        address: "",
        emergencyContact: "",
        department: "",
        appointmentType: "",
        appointmentDate: "",
        appointmentTime: "",
      })
      setUploadedFiles([])
      alert("Appointment request sent to WhatsApp successfully!")
    } catch (error) {
      alert("There was an error processing your request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <CardTitle className="text-2xl font-bold flex items-center space-x-2">
              <CheckCircle className="h-6 w-6" />
              <span>Book Your Appointment</span>
            </CardTitle>
            <div className="flex pt-4 space-x-4">
              <button
                type="button"
                className={`flex items-center space-x-2 pb-2 ${activeSection === "personal" ? "border-b-2 border-white font-medium" : "opacity-80"}`}
                onClick={() => setActiveSection("personal")}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600 text-sm font-bold">
                  1
                </span>
                <span>Personal Details</span>
              </button>
              <button
                type="button"
                className={`flex items-center space-x-2 pb-2 ${activeSection === "appointment" ? "border-b-2 border-white font-medium" : "opacity-80"}`}
                onClick={() => setActiveSection("appointment")}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-blue-600 text-sm font-bold">
                  2
                </span>
                <span>Appointment Details</span>
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              {activeSection === "personal" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-gray-700">Age *</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-gray-700">Gender *</Label>
                      <Select onValueChange={(value) => handleSelectChange("gender", value)} value={formData.gender}>
                        <SelectTrigger className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyContact" className="text-gray-700">WhatsApp Number *</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="tel"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      type="button"
                      onClick={() => setActiveSection("appointment")}
                      className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-lg font-medium flex items-center"
                    >
                      Continue to Appointment
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Appointment Details Section */}
              {activeSection === "appointment" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="department" className="text-gray-700">I am Looking for Treatment for ... *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("department", value)}
                        value={formData.department}
                      >
                        <SelectTrigger className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentType" className="text-gray-700">Appointment Type *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("appointmentType", value)}
                        value={formData.appointmentType}
                      >
                        <SelectTrigger className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="appointmentDate" className="text-gray-700">Appointment Date *</Label>
                      <Input
                        id="appointmentDate"
                        name="appointmentDate"
                        type="date"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentTime" className="text-gray-700">Appointment Time *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("appointmentTime", value)}
                        value={formData.appointmentTime}
                      >
                        <SelectTrigger className="mt-1 h-12 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-700 flex items-center">
                        <Upload className="h-5 w-5 mr-2 text-blue-600" />
                        Upload Medical Reports (if any)
                      </Label>
                      <div className="border-2 border-dashed border-blue-200 rounded-xl p-6 text-center bg-blue-50/50 hover:border-blue-300 transition-colors">
                        <div className="flex flex-col items-center justify-center space-y-2">
                          <Upload className="w-10 h-10 text-blue-400" />
                          <p className="text-sm text-gray-600">Drag & drop files here or</p>
                          <input
                            type="file"
                            multiple
                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="file-upload"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            onClick={() => document.getElementById("file-upload")?.click()}
                          >
                            Browse Files
                          </Button>
                          <p className="text-xs text-gray-500">Max 10MB per file</p>
                        </div>
                      </div>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-gray-700">Uploaded Files ({uploadedFiles.length})</Label>
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-blue-600" />
                                <div>
                                  <p className="text-sm font-medium text-gray-800">{file.file.name}</p>
                                  <p className="text-xs text-gray-500">{(file.file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                              </div>
                              <Button 
                                type="button" 
                                variant="ghost" 
                                size="sm" 
                                className="text-gray-500 hover:text-red-500"
                                onClick={() => removeFile(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clinic Information */}
                  <Alert className="border-blue-200 bg-blue-50/50 rounded-xl">
                    <div className="flex space-x-3">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <AlertTitle className="text-blue-800 font-medium">Clinic Information</AlertTitle>
                        <AlertDescription className="text-blue-700">
                          <p><strong>Timings:</strong> Mon-Sat: 10AM-1PM & 5PM-8:30PM</p>
                          <p><strong>Consultation Fee:</strong> ₹200 (may vary based on treatment)</p>
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>

                  <div className="flex justify-between pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 h-12 px-6 rounded-lg font-medium"
                      onClick={() => setActiveSection("personal")}
                    >
                      Back to Personal Details
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 h-12 px-6 rounded-lg font-medium flex items-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Submit & Send to WhatsApp
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
