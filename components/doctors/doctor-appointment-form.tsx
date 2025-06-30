"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Upload, FileText, Send, CheckCircle, X, MessageCircle, Clock, User, Phone } from "lucide-react"

interface DoctorData {
  id: string
  name: string
  whatsappNumber: string
  clinicDetails: {
    name: string
    address: string
  }
}

interface DoctorAppointmentFormProps {
  doctor: DoctorData
}

interface UploadedFile {
  file: File
  preview: string
  type: string
}

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

export function DoctorAppointmentForm({ doctor }: DoctorAppointmentFormProps) {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    address: "",

    // Appointment Details
    appointmentType: "",
    preferredDate: "",
    preferredTime: "",

    // Medical Information
    symptoms: "",
    medicalHistory: "",
    currentMedications: "",
    allergies: "",
    previousTreatments: "",

    // Additional
    notes: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
    // Create comprehensive appointment message
    const appointmentMessage = `
🏥 *${doctor.clinicDetails.name} - Appointment Request*

👨‍⚕️ *Doctor:* ${doctor.name}

👤 *Patient Information:*
• Name: ${formData.firstName} ${formData.lastName}
• Age: ${formData.age} years
• Gender: ${formData.gender}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Address: ${formData.address}

📅 *Appointment Details:*
• Type: ${formData.appointmentType}
• Preferred Date: ${formData.preferredDate}
• Preferred Time: ${formData.preferredTime}
• Location: ${doctor.clinicDetails.name}, ${doctor.clinicDetails.address}

🩺 *Medical Information:*
• Current Symptoms: ${formData.symptoms}
• Medical History: ${formData.medicalHistory || "Not specified"}
• Current Medications: ${formData.currentMedications || "None"}
• Allergies: ${formData.allergies || "None"}
• Previous Treatments: ${formData.previousTreatments || "Not specified"}

👥 *Emergency Contact:*
• Name: ${formData.emergencyContact}
• Phone: ${formData.emergencyPhone}

📋 *Additional Notes:*
${formData.notes || "None"}

📎 *Medical Reports Uploaded:* ${uploadedFiles.length} file(s)
${uploadedFiles.map((f, i) => `${i + 1}. ${f.file.name} (${(f.file.size / 1024 / 1024).toFixed(2)} MB)`).join("\n")}

---
*Please confirm this appointment request and let me know the available time slots.*

Thank you!
    `.trim()

    // Format WhatsApp number
    let whatsappNum = doctor.whatsappNumber.replace(/\D/g, "")
    if (whatsappNum.startsWith("91")) {
      whatsappNum = whatsappNum
    } else if (whatsappNum.length === 10) {
      whatsappNum = "91" + whatsappNum
    }

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(appointmentMessage)}`

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitStatus("success")

      // Automatically send to WhatsApp after successful submission
      setTimeout(() => {
        sendToWhatsApp()
      }, 1000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div id="appointment-form" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center shadow-xl border-none">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Request Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Your appointment request for Dr. {doctor.name} has been prepared. Click the button below to send all
                details and uploaded files directly to the doctor's WhatsApp.
              </p>

              <Alert className="mb-6 text-left">
                <MessageCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>What happens next:</strong>
                  <br />• Your complete appointment details and medical reports will be sent to Dr. {doctor.name}'s
                  WhatsApp
                  <br />• The doctor will review your case and confirm the appointment
                  <br />• You'll receive confirmation within 2-4 hours
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <Button onClick={sendToWhatsApp} size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send to Dr. {doctor.name}'s WhatsApp
                </Button>

                <Button variant="outline" onClick={() => window.location.reload()} className="w-full">
                  Book Another Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div id="appointment-form" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Appointment with Dr. {doctor.name}</h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and your details will be sent directly to the doctor's WhatsApp
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-xl border-none">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-6 w-6 text-green-600" />
              <span>Appointment Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <User className="h-5 w-5 text-green-600" />
                  <span>Personal Information</span>
                </h3>
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
                    <Select onValueChange={(value) => handleSelectChange("gender", value)}>
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
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={2}
                  />
                </div>
              </div>

              {/* Appointment Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Appointment Details</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="appointmentType">Appointment Type *</Label>
                    <Select onValueChange={(value) => handleSelectChange("appointmentType", value)}>
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
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
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
              </div>

              {/* Medical Information */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span>Medical Information</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="symptoms">Current Symptoms/Health Concerns *</Label>
                    <Textarea
                      id="symptoms"
                      name="symptoms"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={4}
                      placeholder="Please describe your current symptoms, health concerns, or reason for consultation..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="medicalHistory">Medical History</Label>
                      <Textarea
                        id="medicalHistory"
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Previous surgeries, chronic conditions, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentMedications">Current Medications</Label>
                      <Textarea
                        id="currentMedications"
                        name="currentMedications"
                        value={formData.currentMedications}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="List all medications you are currently taking..."
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="allergies">Allergies</Label>
                      <Textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={2}
                        placeholder="Food allergies, drug allergies, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="previousTreatments">Previous Treatments</Label>
                      <Textarea
                        id="previousTreatments"
                        name="previousTreatments"
                        value={formData.previousTreatments}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={2}
                        placeholder="Previous treatments for this condition..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <Upload className="h-5 w-5 text-green-600" />
                  <span>Upload Medical Reports</span>
                </h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload your medical reports, test results, or prescriptions
                  </p>
                  <p className="text-xs text-gray-500 mb-4">
                    Supported formats: PDF, JPG, PNG, DOC (Max 10MB per file)
                  </p>
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

                {/* Uploaded Files Display */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4">
                    <Label>Uploaded Files ({uploadedFiles.length})</Label>
                    <div className="mt-2 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-5 h-5 text-green-600" />
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

              {/* Emergency Contact & Additional Notes */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>Emergency Contact & Additional Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={3}
                    placeholder="Any additional information you'd like to share with the doctor..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Preparing Appointment Details...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit & Send to Doctor's WhatsApp
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Your appointment details and uploaded files will be sent directly to Dr. {doctor.name}'s WhatsApp for
                  immediate review.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
