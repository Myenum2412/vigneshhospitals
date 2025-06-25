import type { Metadata } from "next"
import { FileText, AlertTriangle, Shield, Scale, Clock, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Terms and Conditions - Vignesh Hospital",
  description: "Terms and conditions governing the use of Vignesh Hospital's website and services",
  keywords: [
    "Vignesh Hospital terms",
    "website terms and conditions",
    "hospital website policies",
    "medical website terms",
    "healthcare terms of use"
  ],
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <WhatsAppPopup />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl mb-6">Website Usage Agreement</p>
          <p className="text-lg opacity-90">
            Governing your use of Vignesh Hospital's website and services
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <FileText className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Last Updated:</strong> December 2024 | <strong>Effective Date:</strong> January 1, 2025
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Vignesh Hospital accessible at <a href="https://vigneshhospitals.com/" className="text-blue-600 hover:underline">https://vigneshhospitals.com/</a>.
                </p>
                <p className="text-gray-700">
                  These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                </p>
                <p className="text-gray-700">
                  Minors or people below 18 years old are not allowed to use this Website.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-green-600" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Other than the content you own, under these Terms, Vignesh Hospital and/or its licensors own all the intellectual property rights and materials contained in this Website.
                </p>
                <p className="text-gray-700">
                  You are granted limited license only for purposes of viewing the material contained on this Website.
                </p>
              </CardContent>
            </Card>

            {/* Restrictions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                  Restrictions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You are specifically restricted from all of the following:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>publishing any Website material in any other media;</li>
                  <li>selling, sublicensing and/or otherwise commercializing any Website material;</li>
                  <li>publicly performing and/or showing any Website material;</li>
                  <li>using this Website in any way that is or may be damaging to this Website;</li>
                  <li>using this Website in any way that impacts user access to this Website;</li>
                  <li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li>
                  <li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li>
                  <li>using this Website to engage in any advertising or marketing.</li>
                </ul>
                <p className="text-gray-700">
                  Certain areas of this Website are restricted from being access by you and Vignesh Hospital may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                </p>
              </CardContent>
            </Card>

            {/* Your Content */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-purple-600" />
                  Your Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Vignesh Hospital a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                </p>
                <p className="text-gray-700">
                  Your Content must be your own and must not be invading any third-party's rights. Vignesh Hospital reserves the right to remove any of Your Content from this Website at any time without notice.
                </p>
              </CardContent>
            </Card>

            {/* Your Privacy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Please read our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                </p>
              </CardContent>
            </Card>

            {/* No warranties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
                  No warranties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  This Website is provided "as is," with all faults, and Vignesh Hospital express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-red-600" />
                  Limitation of liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  In no event shall Vignesh Hospital, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Vignesh Hospital, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                </p>
              </CardContent>
            </Card>

            {/* Indemnification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-purple-600" />
                  Indemnification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You hereby indemnify to the fullest extent Vignesh Hospital from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Severability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  Severability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                </p>
              </CardContent>
            </Card>

            {/* Variation of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-indigo-600" />
                  Variation of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Vignesh Hospital is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
                </p>
              </CardContent>
            </Card>

            {/* Assignment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-green-600" />
                  Assignment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Vignesh Hospital is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                </p>
              </CardContent>
            </Card>

            {/* Entire Agreement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  Entire Agreement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  These Terms constitute the entire agreement between Vignesh Hospital and you in relation to your use of this Website, and supersede all prior agreements and understandings.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law & Jurisdiction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-6 w-6 mr-2 text-blue-600" />
                  Governing Law & Jurisdiction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  These Terms will be governed by and interpreted in accordance with the laws of the State of Tamil Nadu, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Tamil Nadu for the resolution of any disputes.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-green-600" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  For questions about these Terms and Conditions, please contact us:
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Phone: +91 93612 02502</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">Email: vigneshospital@gmail.com</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <FileText className="h-4 w-4 text-green-600 mt-1" />
                      <div className="text-gray-700">
                        <p>
                          <strong>Address:</strong>
                        </p>
                        <p>Vignesh Hospital</p>
                        <p>No 220/135, 2nd Agrahara,</p>
                        <p>Salem - 636001, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}