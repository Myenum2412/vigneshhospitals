import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Stethoscope, Bone, Sparkles, BabyIcon as Kidney, Heart, Shield, User, MoreHorizontal, Gem, CircleDotDashed, Scissors, Droplets, Activity } from "lucide-react"

export function TreatmentsPreview() {
  const treatments = [
    {
      icon: Stethoscope,
      title: "Asthma",
      description: "Natural respiratory care with proven Siddha remedies",
      duration: "3-6 months",
      successRate: "92%",
    },
    {
      icon: Gem,
      title: "Kidney Stone",
      description: "Non-invasive stone dissolution therapy",
      duration: "1-3 months",
      successRate: "90%",
    },
    {
      icon: Bone,
      title: "Arthritis",
      description: "Joint pain relief through traditional herbal treatments",
      duration: "4-8 months",
      successRate: "88%",
    },
    {
      icon: CircleDotDashed,
      title: "Piles",
      description: "Gentle treatment without surgical intervention",
      duration: "2-4 months",
      successRate: "93%",
    },
    {
      icon: Scissors,
      title: "Hair Problems",
      description: "Restore hair growth with herbal treatments",
      duration: "3-6 months",
      successRate: "87%",
    },
    {
      icon: Sparkles,
      title: "Skin Problems",
      description: "Holistic skin care for lasting results",
      duration: "2-4 months",
      successRate: "95%",
    },
    {
      icon: Droplets,
      title: "Menstrual Disorder",
      description: "Natural hormonal balance and cycle regulation",
      duration: "3-6 months",
      successRate: "91%",
    },
    {
      icon: MoreHorizontal,
      title: "Impotency/Infertility",
      description: "Confidential treatment with proven results",
      duration: "4-8 months",
      successRate: "89%",
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">Our Specializations</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-green-600">Treatment Options</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in treating chronic conditions with natural, time-tested remedies that provide lasting relief
            without side effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-600 transition-colors">
                  <treatment.icon className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Duration:</span>
                    <Badge variant="outline" className="text-xs">
                      {treatment.duration}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Success Rate:</span>
                    <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">
                      {treatment.successRate}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/treatments">View All Treatments</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
