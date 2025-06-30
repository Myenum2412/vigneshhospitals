"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Upload, FileText, X, MessageCircle, Clock, User, ChevronDown, ChevronRight } from "lucide-react"

const departments = [
  "Siddha Medicine",
  "Homeopathy",
  "General Medicine",
  "Chronic Disease Management",
  "Fertility Treatment",
  "Mental Health",
  "Skin Disorders",
  "Respiratory Disorders",
  "Joint & Bone Health",
  "Digestive Health",
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
  "Second Opinion",
  "Emergency Consultation",
  "Chronic Disease Management",
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
      // Simulate form processing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Send to WhatsApp
      sendToWhatsApp()

      // Reset form
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Card className="shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section Toggle Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  type="button"
                  variant={activeSection === "personal" ? "default" : "outline"}
                  className="flex items-center justify-between w-full"
                  onClick={() => setActiveSection("personal")}
                >
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span>Personal Information</span>
                  </div>
                  {activeSection === "personal" ? (
                    <ChevronDown className="h-5 w-5 ml-2" />
                  ) : (
                    <ChevronRight className="h-5 w-5 ml-2" />
                  )}
                </Button>
                <Button
                  type="button"
                  variant={activeSection === "appointment" ? "default" : "outline"}
                  className="flex items-center justify-between w-full"
                  onClick={() => setActiveSection("appointment")}
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Appointment Details</span>
                  </div>
                  {activeSection === "appointment" ? (
                    <ChevronDown className="h-5 w-5 ml-2" />
                  ) : (
                    <ChevronRight className="h-5 w-5 ml-2" />
                  )}
                </Button>
              </div>

              {/* Personal Information Section */}
              {activeSection === "personal" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleSelectChange("gender", value)} value={formData.gender}>
                        <SelectTrigger className="mt-1">
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
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyContact">WhatsApp Number *</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="tel"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setActiveSection("appointment")}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Next: Appointment Details
                    </Button>
                  </div>
                </div>
              )}

              {/* Appointment Details Section */}
              {activeSection === "appointment" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="department">Department/Specialization *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("department", value)}
                        value={formData.department}
                      >
                        <SelectTrigger className="mt-1">
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
                    <div>
                      <Label htmlFor="appointmentType">Appointment Type *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("appointmentType", value)}
                        value={formData.appointmentType}
                      >
                        <SelectTrigger className="mt-1">
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
                    <div>
                      <Label htmlFor="appointmentDate">Appointment Date *</Label>
                      <Input
                        id="appointmentDate"
                        name="appointmentDate"
                        type="date"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="appointmentTime">Appointment Time *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("appointmentTime", value)}
                        value={formData.appointmentTime}
                      >
                        <SelectTrigger className="mt-1">
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
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                      <Upload className="h-5 w-5 text-blue-600" />
                      <span>Upload Medical Reports (if any)</span>
                    </h3>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Choose Files</p>
                      <p className="text-xs text-gray-500 mb-4">Max 10MB per file</p>
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
                        onClick={() => document.getElementById("file-upload")?.click()}
                      >
                        Choose Files
                      </Button>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="mt-4">
                        <Label>Uploaded Files ({uploadedFiles.length})</Label>
                        <div className="mt-2 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-blue-600" />
                                <div>
                                  <p className="text-sm font-medium">{file.file.name}</p>
                                  <p className="text-xs text-gray-500">{(file.file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                              </div>
                              <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Clinic Information */}
                  <Alert className="border-blue-200 bg-blue-50">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800">
                      <strong>Clinic Timings:</strong> Mon-Sat: 10AM-1PM & 5PM-8:30PM
                      <br />
                      <strong>Consultation Fee:</strong> ₹100 (may vary based on treatment)
                    </AlertDescription>
                  </Alert>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveSection("personal")}
                    >
                      Back to Personal Information
                    </Button>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
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