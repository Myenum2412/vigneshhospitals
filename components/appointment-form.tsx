"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Upload, FileText, CheckCircle, X, MessageCircle, Download, Shield, Lock } from "lucide-react"
import jsPDF from "jspdf"

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
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
]

const appointmentTypes = [
  "New Consultation",
  "Follow-up Visit",
  "Second Opinion",
  "Emergency Consultation",
  "Chronic Disease Management",
  "Fertility Consultation",
  "Mental Health Consultation",
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
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    age: "",
    department: "",
    preferredDate: "",
    preferredTime: "",
    appointmentType: "",
    emergencyContact: "",
    emergencyPhone: "",
    notes: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [currentStep, setCurrentStep] = useState(1)
  const [generatedPDF, setGeneratedPDF] = useState<string | null>(null)

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

  const generatePDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.width
    const margin = 20
    let yPosition = 20

    const addText = (text: string, x: number, y: number, maxWidth: number, fontSize = 10) => {
      doc.setFontSize(fontSize)
      const lines = doc.splitTextToSize(text, maxWidth)
      doc.text(lines, x, y)
      return y + lines.length * (fontSize * 0.4)
    }

    // Header
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold")
    doc.text("VIGNESH MULTI SPECIALITY HOSPITAL", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 10

    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text("Siddha & Homeopathy • Salem, Tamil Nadu", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 5
    doc.text("APPOINTMENT REQUEST FORM", pageWidth / 2, yPosition, { align: "center" })
    yPosition += 15

    // Draw line
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 10

    // Doctor Information
    doc.setFontSize(14)
    doc.setFont("helvetica", "bold")
    doc.text("FOR: Dr. R. Ragavendra Balaji", margin, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text("BHMS, MD (Homeopathy), M.Sc Psychology", margin, yPosition)
    yPosition += 5
    doc.text("15+ Years Experience | Vignesh Hospital, Salem", margin, yPosition)
    yPosition += 15

    // Patient Information Section
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("PATIENT INFORMATION", margin, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")

    const patientInfo = [
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Age: ${formData.age} years`,
      `Gender: ${formData.gender}`,
      `Date of Birth: ${formData.dateOfBirth}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Address: ${formData.address}`,
    ]

    patientInfo.forEach((info) => {
      if (info.split(": ")[1]) {
        doc.text(info, margin, yPosition)
        yPosition += 5
      }
    })

    yPosition += 5

    // Emergency Contact
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("EMERGENCY CONTACT", margin, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(`Name: ${formData.emergencyContact}`, margin, yPosition)
    yPosition += 5
    doc.text(`Phone: ${formData.emergencyPhone}`, margin, yPosition)
    yPosition += 10

    // Appointment Details
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text("APPOINTMENT DETAILS", margin, yPosition)
    yPosition += 8

    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")

    const appointmentInfo = [
      `Department: ${formData.department}`,
      `Appointment Type: ${formData.appointmentType}`,
      `Preferred Date: ${formData.preferredDate}`,
      `Preferred Time: ${formData.preferredTime}`,
    ]

    appointmentInfo.forEach((info) => {
      if (info.split(": ")[1]) {
        doc.text(info, margin, yPosition)
        yPosition += 5
      }
    })

    yPosition += 10

    // Uploaded Files
    if (uploadedFiles.length > 0) {
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("UPLOADED DOCUMENTS", margin, yPosition)
      yPosition += 8

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")

      uploadedFiles.forEach((file, index) => {
        doc.text(`${index + 1}. ${file.file.name} (${(file.file.size / 1024 / 1024).toFixed(2)} MB)`, margin, yPosition)
        yPosition += 5
      })
      yPosition += 5
    }

    // Additional Notes
    if (formData.notes) {
      doc.setFontSize(12)
      doc.setFont("helvetica", "bold")
      doc.text("ADDITIONAL NOTES", margin, yPosition)
      yPosition += 8

      doc.setFontSize(10)
      doc.setFont("helvetica", "normal")
      yPosition = addText(formData.notes, margin, yPosition, pageWidth - 2 * margin)
      yPosition += 10
    }

    // Footer
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 10

    doc.setFontSize(8)
    doc.setFont("helvetica", "italic")
    doc.text(`Generated on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`, margin, yPosition)

    const pdfBlob = doc.output("blob")
    const pdfUrl = URL.createObjectURL(pdfBlob)
    return pdfUrl
  }

  const sendToWhatsApp = () => {
    const doctorWhatsApp = "919361202502"
    
    const whatsappMessage = `
🏥 *VIGNESH MULTI SPECIALITY HOSPITAL*
📋 *New Appointment Request*

👨‍⚕️ *For:* Dr. R. Ragavendra Balaji

👤 *Patient Information:*
- Name: ${formData.firstName} ${formData.lastName}
- Age: ${formData.age} years
- Gender: ${formData.gender}
- DOB: ${formData.dateOfBirth}
- Phone: ${formData.phone}
- Email: ${formData.email}

📅 *Appointment Details:*
- Department: ${formData.department}
- Type: ${formData.appointmentType}
- Preferred Date: ${formData.preferredDate}
- Preferred Time: ${formData.preferredTime}

📎 *Attachments:*
- ${uploadedFiles.length} document(s) attached

📝 *Notes:*
${formData.notes || "No additional notes"}

*Request submitted on:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim()

    const whatsappUrl = `https://wa.me/${doctorWhatsApp}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const sendToEmail = async (pdfBlob: Blob) => {
    const formData = new FormData()
    formData.append("email", "vigneshospital@gmail.com")
    formData.append("subject", `New Appointment Request - ${this.formData.firstName} ${this.formData.lastName}`)
    formData.append("message", "Please find attached the appointment request details.")
    formData.append("attachment", pdfBlob, `Appointment_${this.formData.firstName}_${this.formData.lastName}.pdf`)

    try {
      await fetch("https://your-email-service-endpoint.com/send", {
        method: "POST",
        body: formData
      })
    } catch (error) {
      console.error("Failed to send email:", error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate PDF
      const pdfUrl = generatePDF()
      setGeneratedPDF(pdfUrl)

      // Get PDF blob for email
      const pdfBlob = await fetch(pdfUrl).then(res => res.blob())

      // Send to WhatsApp
      sendToWhatsApp()

      // Send to email
      await sendToEmail(pdfBlob)

      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Personal Information"
      case 2:
        return "Appointment Details"
      case 3:
        return "Review & Submit"
      default:
        return ""
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Request Sent!</h2>
              <p className="text-gray-600 mb-6">
                Your appointment request has been sent to Dr. Ragavendra Balaji. You will receive a confirmation shortly.
              </p>

              <div className="space-y-4">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <section className="py-6 bg-green-50">
        <div className="max-w-4xl mx-auto px-4">
          <Alert className="border-green-200 bg-green-50">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Secure & Confidential:</strong> This form is protected with SSL encryption. 
              Your information will be sent directly to the hospital.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step <= currentStep ? "bg-blue-600 border-blue-600 text-white" : "border-gray-300 text-gray-400"
                  }`}
                >
                  {step}
                </div>
                <div className="ml-2 hidden sm:block">
                  <p className={`text-sm font-medium ${step <= currentStep ? "text-green-600" : "text-gray-400"}`}>
                    {getStepTitle(step)}
                  </p>
                </div>
                {step < 3 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 ${step < currentStep ? "bg-green-600" : "bg-gray-300"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  {getStepTitle(currentStep)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-3 gap-6">
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
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div className="grid md:grid-cols-2 gap-6">
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
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="department">Department/Specialization *</Label>
                        <Select onValueChange={(value) => handleSelectChange("department", value)}>
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
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

                    <div>
                      <Label htmlFor="fileUpload">
                        <Upload className="w-4 h-4 mr-2 inline" />
                        Upload Medical Reports (Optional)
                      </Label>
                      <Input
                        id="fileUpload"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileUpload}
                        className="mt-1"
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        Max 10MB per file (PDF, JPG, PNG, DOC, DOCX)
                      </p>
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Uploaded Files:</h4>
                        <div className="space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-blue-600" />
                                <div>
                                  <p className="font-medium text-sm">{file.file.name}</p>
                                  <p className="text-xs text-gray-600">
                                    {(file.file.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                              </div>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <Alert>
                      <Calendar className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Clinic Timings:</strong> Mon-Sat: 10AM-1PM & 5PM-8:30PM
                        <br />
                        <strong>Consultation Fee:</strong> ₹100 (may vary based on treatment)
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Any special requests or additional information..."
                      />
                    </div>

                    <Alert className="border-blue-200 bg-blue-50">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>By submitting this form:</strong>
                        <br />• Your information will be sent to Dr. Balaji via WhatsApp
                        <br />• A copy will be emailed to vigneshospital@gmail.com
                        <br />• You'll receive a confirmation shortly
                      </AlertDescription>
                    </Alert>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    Previous
                  </Button>

                  {currentStep < 3 ? (
                    <Button type="button" onClick={nextStep} className="flex items-center">
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-600 hover:bg-green-700 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Submit Appointment Request
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </section>
    </div>
  )
}