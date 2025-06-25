import type { Metadata } from "next"
import { Shield, Package, RefreshCw, Gift, Mail, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import WhatsAppPopup from "@/components/WhatsAppPopup"

export const metadata: Metadata = {
  title: "Return & Refund Policy - Vignesh Hospital | Salem",
  description:
    "Review Vignesh Hospital's return and refund policy for purchases. Learn about cancellation rights, return conditions, and refund procedures for our products and services.",
  keywords: [
    "vignesh hospital return policy",
    "hospital refund policy Salem",
    "medical purchase returns",
    "healthcare product refunds",
    "hospital cancellation policy",
    "medical goods returns",
    "vignesh hospital terms",
  ],
}

export default function ReturnRefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <WhatsAppPopup />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
          <p className="text-xl mb-6">Our Policies for Your Purchases</p>
          <p className="text-lg opacity-90">
            Vignesh Multi Speciality Hospital is committed to your satisfaction with our products and services
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Alert className="max-w-4xl mx-auto border-blue-200 bg-blue-50">
            <RefreshCw className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Last Updated:</strong> January 30, 2023
              <br />
              This policy applies to all purchases made at Vignesh Hospital branches in Salem, Namakkal, and Rasipuram
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
                  <Package className="h-6 w-6 mr-2 text-green-600" />
                  Our Return & Refund Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Thank you for shopping at Vignesh Hospital. If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.
                </p>
                <p className="text-gray-700">
                  The following terms are applicable for any products that You purchased with Us.
                </p>
              </CardContent>
            </Card>

            {/* Interpretation and Definitions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Interpretation and Definitions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interpretation</h4>
                  <p className="text-gray-700">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Definitions</h4>
                  <p className="text-gray-700 mb-2">For the purposes of this Return and Refund Policy:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Vignesh Hospital, 220/135, 2nd Agraharam, Salem – 636001.</li>
                    <li><strong>Goods</strong> refer to the items offered for sale on the Service.</li>
                    <li><strong>Orders</strong> mean a request by You to purchase Goods from Us.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>Website</strong> refers to Vignesh Hospital, accessible from https://vigneshhospitals.com/</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Order Cancellation Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RefreshCw className="h-6 w-6 mr-2 text-purple-600" />
                  Your Order Cancellation Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You are entitled to cancel Your Order within 14 days without giving any reason for doing so.
                </p>
                <p className="text-gray-700">
                  The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
                </p>
                <p className="text-gray-700">
                  In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>By visiting this page on our website: https://vigneshhospitals.com/contact/</li>
                </ul>
                <p className="text-gray-700">
                  We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.
                </p>
              </CardContent>
            </Card>

            {/* Conditions for Returns */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-2 text-orange-600" />
                  Conditions for Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  In order for the Goods to be eligible for a return, please make sure that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>The Goods were purchased in the last 14 days</li>
                  <li>The Goods are in the original packaging</li>
                </ul>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The following Goods cannot be returned:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                    <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                    <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                    <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                  </ul>
                </div>

                <p className="text-gray-700">
                  We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.
                </p>
                <p className="text-gray-700">
                  Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.
                </p>
              </CardContent>
            </Card>

            {/* Returning Goods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-6 w-6 mr-2 text-blue-600" />
                  Returning Goods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 font-medium">Vignesh Hospital</p>
                  <p className="text-gray-700">220/135, 2nd Agraharam,</p>
                  <p className="text-gray-700">Salem – 636001</p>
                </div>
                <p className="text-gray-700">
                  We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.
                </p>
              </CardContent>
            </Card>

            {/* Gifts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Gift className="h-6 w-6 mr-2 text-red-600" />
                  Gifts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.
                </p>
                <p className="text-gray-700">
                  If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.
                </p>
              </CardContent>
            </Card>

            {/* Contact Us */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-green-600" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  If you have any questions about our Returns and Refunds Policy, please contact us:
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Email: vigneshospital@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Phone: Contact for Customer Service Phone</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-blue-600 mt-1" />
                      <div className="text-gray-700">
                        <p>
                          <strong>Mailing Address:</strong>
                        </p>
                        <p>Customer Service</p>
                        <p>Vignesh Multi Speciality Hospital</p>
                        <p>220/135, 2nd Agraharam</p>
                        <p>Salem – 636001, Tamil Nadu</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-gray-700">Website: https://vigneshhospitals.com/contact/</span>
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