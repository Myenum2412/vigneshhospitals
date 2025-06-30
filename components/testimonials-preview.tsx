import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: 45,
      condition: "Chronic Asthma",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "After 15 years of suffering from asthma, Dr. Vignesh's treatment gave me a new life. I can breathe freely now without any inhalers. The herbal medicines worked like magic!",
      duration: "Treated in 4 months",
    },
    {
      name: "Priya Sharma",
      age: 38,
      condition: "Skin Disorders",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My skin problems that persisted for years were completely cured with their natural treatments. The doctors are very caring and the medicines have no side effects.",
      duration: "Treated in 3 months",
    },
    {
      name: "Murugan S",
      age: 52,
      condition: "Arthritis",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I was unable to walk properly due to severe joint pain. Thanks to the traditional Siddha treatment, I'm now completely pain-free and active again.",
      duration: "Treated in 6 months",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Patient Stories</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real <span className="text-green-600">Success Stories</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our patients who have experienced the healing power of traditional medicine and transformed their
            lives naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 opacity-50" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      Age {testimonial.age} • {testimonial.condition}
                    </p>
                    <p className="text-xs text-green-600 font-medium mt-1">{testimonial.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="https://www.google.com/search?sca_esv=f633a9267bff6583&sxsrf=AE3TifMXq2ejMXp9Qh-kc4OZrl2dWSR2jQ:1750831782809&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E41iGjBJSJZAZgjJ2evrFT9g0gBCBUjjKYNZIKt6FZwsWmgEM1e5uvGY_xJM6OMrbwiVAA1XPTeeWUsT-5vmVyaHZ2wY3Wcqr2IfNRrIfdvDDTr_2ZmTOd4u9qy8PE2vWP06B7LT9pbPgLOgpgZGxOhTAvekGLhmxOT7gwdFBSuKOtYlFfjZTenRCespGrRtt4rgqEvKV_w88jIJ1SBcNxuTCMQD&q=Vignesh+Hospital+%28pain+relief,ortho+doctors,Piles,Sexologist+Doctors+in+salem,Obesity,Hairfall+treatment%29+Reviews&sa=X&ved=2ahUKEwirgufT9IuOAxWM3TgGHUW0BegQ0bkNegQINhAE">Read More Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
