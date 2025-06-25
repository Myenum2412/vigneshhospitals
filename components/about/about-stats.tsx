"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Clock, Heart, Star, Shield, Leaf } from "lucide-react"

export function AboutStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    patients: 0,
    years: 0,
    success: 0,
    doctors: 0,
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  const finalValues = {
    patients: 10000,
    years: 29,
    success: 95,
    doctors: 15,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          animateCounters()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps

      setCounters({
        patients: Math.floor(finalValues.patients * progress),
        years: Math.floor(finalValues.years * progress),
        success: Math.floor(finalValues.success * progress),
        doctors: Math.floor(finalValues.doctors * progress),
      })

      if (step >= steps) {
        clearInterval(timer)
        setCounters(finalValues)
      }
    }, stepDuration)
  }

  const stats = [
    {
      icon: Users,
      number: counters.patients.toLocaleString(),
      suffix: "+",
      label: "Happy Patients",
      description: "Successfully treated with natural remedies",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Award,
      number: counters.years,
      suffix: "+",
      label: "Years of Excellence",
      description: "Three generations of trusted service",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      number: counters.success,
      suffix: "%",
      label: "Success Rate",
      description: "In chronic disease treatment",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Heart,
      number: counters.doctors,
      suffix: "+",
      label: "Expert Doctors",
      description: "Qualified traditional medicine specialists",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "Round-the-clock medical assistance",
    },
    {
      icon: Star,
      title: "5-Star Patient Rating",
      description: "Consistently rated excellent by patients",
    },
    {
      icon: Shield,
      title: "ISO Certified",
      description: "International quality standards",
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure herbal medicines with no side effects",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Impact</span> in
            Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of dedication have resulted in thousands of success stories and a legacy of healing that
            continues to grow stronger each day.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-none shadow-lg overflow-hidden ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center relative">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div
                  className={`w-20 h-20 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-10 w-10 ${stat.iconColor}`} />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {stat.number}
                    <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-gray-800">{stat.label}</div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-current transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:bg-white/80 transition-all duration-300 ${
                isVisible ? "animate-slideInLeft" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 4) * 200}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
