import type { Metadata } from "next"
import { Shield, Lock, Eye, Database, Phone, Mail, FileText, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Privacy Policy - Vignesh Hospital | Medical Data Protection",
  description:
    "Learn how Vignesh Hospital protects your personal and medical information. Our comprehensive privacy policy covers data collection, usage, security measures, and your rights regarding medical privacy.",
  keywords: [
    "vignesh hospital privacy policy",
    "medical data protection",
    "patient privacy rights",
    "healthcare data security",
    "medical information confidentiality",
    "HIPAA compliance",
    "patient data protection",
    "medical privacy salem",
  ],
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      <WhatsAppPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl mb-6">Your Medical Information is Protected</p>
          <p className="text-lg opacity-90">
            Vignesh Multi Speciality Hospital is committed to protecting your personal and medical information
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
              <br />
              This privacy policy applies to all three branches: Salem (Main), Namakkal, and Rasipuram
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
                  <Shield className="h-6 w-6 mr-2 text-green-600" />
                  Our Commitment to Your Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  At Vignesh Multi Speciality Hospital, we understand that your medical information is highly personal
                  and sensitive. We are committed to protecting your privacy and maintaining the confidentiality of your
                  health information in accordance with applicable laws and medical ethics.
                </p>
                <p className="text-gray-700">
                  This Privacy Policy explains how we collect, use, protect, and share your personal and medical
                  information across all our branches in Salem, Namakkal, and Rasipuram.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-blue-600" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Name, age, date of birth, gender</li>
                    <li>Contact information (phone, email, address)</li>
                    <li>Emergency contact details</li>
                    <li>Identity verification documents</li>
                    <li>Insurance information (if applicable)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Medical history and current health conditions</li>
                    <li>Symptoms, diagnoses, and treatment plans</li>
                    <li>Medications, allergies, and adverse reactions</li>
                    <li>Laboratory results and medical reports</li>
                    <li>Treatment outcomes and follow-up notes</li>
                    <li>Consultation records and doctor's notes</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Information:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Website usage data and cookies</li>
                    <li>Appointment booking system logs</li>
                    <li>Communication preferences</li>
                    <li>Device and browser information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-purple-600" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Medical Care & Treatment:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Providing medical consultations and treatments</li>
                    <li>Developing personalized treatment plans</li>
                    <li>Monitoring your health progress</li>
                    <li>Coordinating care between our branches</li>
                    <li>Emergency medical situations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Administrative Purposes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Scheduling and managing appointments</li>
                    <li>Billing and payment processing</li>
                    <li>Insurance claim processing</li>
                    <li>Maintaining medical records</li>
                    <li>Quality improvement initiatives</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Communication:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Appointment reminders and confirmations</li>
                    <li>Treatment follow-up communications</li>
                    <li>Health education and wellness tips</li>
                    <li>Emergency notifications</li>
                    <li>Service updates and announcements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-orange-600" />
                  When We Share Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <strong>Important:</strong> We never sell your personal or medical information to third parties.
                    Information sharing is strictly limited to the purposes outlined below.
                  </AlertDescription>
                </Alert>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Authorized Sharing:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>
                      <strong>With Your Consent:</strong> When you explicitly authorize us to share information
                    </li>
                    <li>
                      <strong>Medical Referrals:</strong> With other healthcare providers for your treatment
                    </li>
                    <li>
                      <strong>Emergency Situations:</strong> To protect your life or health in emergencies
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or court orders
                    </li>
                    <li>
                      <strong>Insurance Processing:</strong> For claim verification and processing
                    </li>
                    <li>
                      <strong>Family Members:</strong> With your designated emergency contacts when necessary
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Providers:</h4>
                  <p className="text-gray-700">
                    We may share limited information with trusted service providers who help us operate our hospital,
                    such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Medical equipment and software providers</li>
                    <li>Laboratory and diagnostic services</li>
                    <li>Pharmacy services</li>
                    <li>IT support and security services</li>
                    <li>Billing and payment processors</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-2">
                    All service providers are bound by strict confidentiality agreements and data protection
                    requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-red-600" />
                  How We Protect Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Safeguards:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>SSL encryption for all online communications</li>
                    <li>Secure, password-protected medical record systems</li>
                    <li>Regular security updates and system monitoring</li>
                    <li>Encrypted data storage and backup systems</li>
                    <li>Secure network infrastructure with firewalls</li>
                    <li>Multi-factor authentication for staff access</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Physical Safeguards:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Restricted access to medical records areas</li>
                    <li>Locked filing cabinets for physical documents</li>
                    <li>Security cameras in sensitive areas</li>
                    <li>Visitor access controls and identification</li>
                    <li>Secure disposal of confidential documents</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Administrative Safeguards:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Staff training on privacy and confidentiality</li>
                    <li>Regular privacy policy updates and reviews</li>
                    <li>Access controls based on job responsibilities</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Regular privacy compliance audits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-green-600" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You have the following rights regarding your personal and medical information:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Access Rights:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Request copies of your medical records</li>
                      <li>Review your personal information</li>
                      <li>Obtain treatment summaries</li>
                      <li>Access billing and payment records</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Control Rights:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Request corrections to inaccurate information</li>
                      <li>Restrict certain uses of your information</li>
                      <li>Request confidential communications</li>
                      <li>Withdraw consent for non-essential uses</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Notification Rights:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Be notified of privacy breaches</li>
                      <li>Receive updates to privacy policies</li>
                      <li>Know who has accessed your records</li>
                      <li>Understand how your information is used</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complaint Rights:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>File complaints about privacy practices</li>
                      <li>Report suspected privacy violations</li>
                      <li>Request privacy officer consultation</li>
                      <li>Appeal privacy-related decisions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-indigo-600" />
                  Data Retention & Disposal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Retention Periods:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>
                      <strong>Medical Records:</strong> Retained for 7 years after last treatment or as required by law
                    </li>
                    <li>
                      <strong>Billing Records:</strong> Retained for 7 years for tax and audit purposes
                    </li>
                    <li>
                      <strong>Appointment Records:</strong> Retained for 3 years for scheduling and follow-up
                    </li>
                    <li>
                      <strong>Website Data:</strong> Retained for 2 years or until you request deletion
                    </li>
                    <li>
                      <strong>Emergency Records:</strong> Retained permanently for critical health information
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Disposal:</h4>
                  <p className="text-gray-700">
                    When retention periods expire, we securely dispose of your information using:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Secure shredding for physical documents</li>
                    <li>Certified data wiping for electronic records</li>
                    <li>Documented destruction processes</li>
                    <li>Third-party certified disposal services when necessary</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-blue-600" />
                  Privacy Officer Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If you have questions about this privacy policy, want to exercise your privacy rights, or need to
                  report a privacy concern, please contact our Privacy Officer:
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Email: Contact for Privacy Officer Email</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Phone: Contact for Privacy Officer Phone</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-blue-600 mt-1" />
                      <div className="text-gray-700">
                        <p>
                          <strong>Mailing Address:</strong>
                        </p>
                        <p>Privacy Officer</p>
                        <p>Vignesh Multi Speciality Hospital</p>
                        <p>Opp. to Uzhavar Sandhai, Junction</p>
                        <p>Salem – 636005, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="border-green-200 bg-green-50">
                  <Shield className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Response Time:</strong> We will respond to your privacy requests within 30 days. For urgent
                    privacy concerns, please call us directly for immediate assistance.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-purple-600" />
                  Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  We may update this privacy policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. When we make significant changes, we will:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Post the updated policy on our website</li>
                  <li>Send notification emails to registered patients</li>
                  <li>Display notices in our hospital branches</li>
                  <li>Provide a summary of key changes</li>
                  <li>Allow time for review before implementation</li>
                </ul>

                <p className="text-gray-700">
                  Your continued use of our services after policy updates indicates your acceptance of the revised
                  privacy policy.
                </p>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-red-600" />
                  Legal Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  This privacy policy is designed to comply with applicable laws and regulations, including:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Information Technology Act, 2000 (India)</li>
                  <li>Personal Data Protection Bill (India)</li>
                  <li>Medical Council of India guidelines</li>
                  <li>Tamil Nadu Medical Council regulations</li>
                  <li>Healthcare data protection standards</li>
                  <li>International privacy best practices</li>
                </ul>

                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Legal Disclaimer:</strong> This privacy policy does not create any contractual rights or
                    legal obligations beyond those required by applicable law. For specific legal advice regarding your
                    privacy rights, please consult with a qualified attorney.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
