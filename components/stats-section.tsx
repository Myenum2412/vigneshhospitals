import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Patients",
      description: "Successfully treated over the years",
    },
    {
      icon: Award,
      number: "29+",
      label: "Years Experience",
      description: "Three generations of expertise",
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "In chronic disease treatment",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Care",
      description: "Always available for urgent needs",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands of <span className="text-green-600">Patients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence and patient care has made us a trusted name in traditional medicine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
