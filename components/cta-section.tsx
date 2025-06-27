import { Button } from "@/components/ui/button"
import { Calendar, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Start Your <span className="text-yellow-300">Healing Journey?</span>
          </h2>
          <p className="text-xl opacity-90 leading-relaxed">
            Take the first step towards natural healing. Our experienced doctors are ready to provide personalized
            treatment plans that address your specific health concerns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/appointment">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Link href="tel:+919876543210">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Link href="https://wa.me/919851234547">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="text-sm opacity-80">Initial assessment at no cost</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Same Day Appointment</div>
              <div className="text-sm opacity-80">Quick scheduling available</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7 Emergency</div>
              <div className="text-sm opacity-80">Always here when you need us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
