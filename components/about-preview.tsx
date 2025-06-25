import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  const features = [
    {
      icon: Award,
      title: "29+ Years Legacy",
      description: "Three generations of trusted traditional medicine practice",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified doctors with deep knowledge in Siddha & Homeopathy",
    },
    {
      icon: Heart,
      title: "Patient-Centric",
      description: "Personalized treatment plans for every individual",
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock availability for urgent medical needs",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide">About Vignesh Hospital</h2>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Three Generations of <span className="text-green-600">Healing Excellence</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1995, Vignesh Siddha and Homeopathy Hospital has been a beacon of traditional healing in our
                community. Founded by our grandfather and continued through three generations, we combine ancient wisdom
                with modern healthcare standards.
              </p>
              <p className="text-gray-600">
                Our hospital specializes in natural, holistic treatments that address the root cause of ailments rather
                than just symptoms. We believe in the power of traditional medicine to restore balance and promote
                long-lasting health.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-4">
                    <feature.icon className="h-8 w-8 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/images/gener.jpg"
              alt="Hospital Interior"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
