"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Stethoscope,
  Bone,
  Sparkles,
  BabyIcon as Kidney,
  Heart,
  Shield,
  User,
  Baby,
  Clock,
  CheckCircle,
  Calendar,
  ArrowRight,
  Brain,
  Activity,
} from "lucide-react"
import Link from "next/link"

export function TreatmentsGrid() {
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null)

  const treatments = [
    {
      id: "asthma",
      icon: Stethoscope,
      title: "Asthma",
      category: "Respiratory",
      shortDescription: "Breathing difficulty, wheezing, tight chest, and chronic cough.",
      fullDescription:
        "Asthma is a chronic respiratory condition that affects millions worldwide. Our Siddha approach focuses on strengthening the respiratory system naturally while addressing the root causes of inflammation and hypersensitivity.",
      approach: "Natural bronchodilators, immune system balancing herbs, and personalized homeopathic formulas.",
      symptoms: ["Shortness of breath", "Wheezing sounds", "Chest tightness", "Chronic cough", "Fatigue"],
      duration: "3-6 months",
      successRate: "92%",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      treatmentSteps: [
        "Initial assessment and pulse diagnosis",
        "Customized herbal formulations",
        "Breathing exercises and lifestyle guidance",
        "Regular monitoring and adjustments",
      ],
      testimonial: {
        name: "Rajesh Kumar",
        text: "After 15 years of asthma, I'm now completely inhaler-free thanks to Dr. Vignesh's treatment.",
        rating: 5,
      },
    },
    {
      id: "kidney-stones",
      icon: Kidney,
      title: "Kidney Stone",
      category: "Urological",
      shortDescription: "Pain in abdomen, painful urination, blood in urine.",
      fullDescription:
        "Kidney stones can cause severe pain and complications. Our natural approach helps dissolve stones and prevents recurrence without invasive procedures.",
      approach: "Herbal formulations that break down stones, along with hydration therapy.",
      symptoms: ["Severe abdominal pain", "Painful urination", "Blood in urine", "Nausea", "Frequent urination"],
      duration: "1-3 months",
      successRate: "90%",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
      treatmentSteps: [
        "Ultrasound assessment",
        "Stone-dissolving herbal medicines",
        "Hydration therapy protocol",
        "Prevention guidelines",
      ],
      testimonial: {
        name: "Arun Kumar",
        text: "Avoided surgery completely. The stones dissolved naturally with their herbal treatment.",
        rating: 5,
      },
    },
    {
      id: "arthritis",
      icon: Bone,
      title: "Arthritis",
      category: "Joint & Bone",
      shortDescription: "Joint pain, stiffness, inflammation, especially in knees, elbows, and spine.",
      fullDescription:
        "Arthritis causes joint inflammation and pain that can severely impact daily life. Our traditional approach combines anti-inflammatory herbs with lifestyle modifications for long-lasting relief.",
      approach: "Anti-inflammatory Siddha herbs, lifestyle modification, pain-relief massage oils.",
      symptoms: ["Joint pain", "Morning stiffness", "Swelling", "Reduced mobility", "Muscle weakness"],
      duration: "4-8 months",
      successRate: "88%",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      treatmentSteps: [
        "Comprehensive joint assessment",
        "Anti-inflammatory herbal medicines",
        "Therapeutic massage oils",
        "Diet and exercise recommendations",
      ],
      testimonial: {
        name: "Murugan S",
        text: "I was unable to walk properly due to severe joint pain. Now I'm completely pain-free and active again.",
        rating: 5,
      },
    },
    {
      id: "piles",
      icon: Heart,
      title: "Piles",
      category: "Digestive",
      shortDescription: "Pain, swelling, and bleeding during bowel movements.",
      fullDescription:
        "Piles can be extremely uncomfortable and embarrassing. Our gentle, non-surgical approach provides relief and prevents recurrence.",
      approach: "Internal medicine, dietary regulation, external herbal applications.",
      symptoms: ["Rectal bleeding", "Pain during bowel movements", "Swelling", "Itching", "Discomfort"],
      duration: "2-4 months",
      successRate: "93%",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      treatmentSteps: [
        "Gentle examination and assessment",
        "Internal healing medicines",
        "External herbal applications",
        "Dietary and lifestyle changes",
      ],
      testimonial: {
        name: "Venkat Rao",
        text: "Completely cured without surgery. The treatment was gentle and very effective.",
        rating: 5,
      },
    },
    {
      id: "hair-fall",
      icon: User,
      title: "Hair Problems",
      category: "Skin Health",
      shortDescription: "Hair fall, thinning hair, dandruff, itchy scalp, bald spots.",
      fullDescription:
        "Hair problems often indicate internal imbalances. Our comprehensive approach addresses both scalp health and internal factors affecting hair growth.",
      approach: "Herbal oils, internal blood purifiers, and lifestyle guidance.",
      symptoms: ["Excessive hair fall", "Thinning hair", "Dandruff", "Itchy scalp", "Bald patches"],
      duration: "3-6 months",
      successRate: "87%",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
      treatmentSteps: [
        "Scalp and hair analysis",
        "Specialized herbal hair oils",
        "Internal blood purifying medicines",
        "Nutritional guidance",
      ],
      testimonial: {
        name: "Suresh Kumar",
        text: "My hair fall stopped completely and new hair growth is visible within 3 months.",
        rating: 5,
      },
    },
    {
      id: "skin-disorders",
      icon: Sparkles,
      title: "Skin Problems",
      category: "Skin Health",
      shortDescription: "Psoriasis, eczema, acne, rashes, discoloration, allergies.",
      fullDescription:
        "Skin disorders often reflect internal imbalances. Our holistic approach treats both internal causes and external symptoms for clear, healthy skin.",
      approach: "Internal detox using herbal mixtures and topical natural applications.",
      symptoms: ["Skin rashes", "Itching", "Discoloration", "Dry patches", "Acne breakouts"],
      duration: "2-4 months",
      successRate: "95%",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      treatmentSteps: [
        "Skin analysis and blood purification",
        "Internal detox medicines",
        "Topical herbal applications",
        "Dietary and lifestyle guidance",
      ],
      testimonial: {
        name: "Priya Sharma",
        text: "My skin problems that persisted for years were completely cured with their natural treatments.",
        rating: 5,
      },
    },
    {
      id: "menstrual-disorder",
      icon: Baby,
      title: "Menstrual Disorder",
      category: "Women's Health",
      shortDescription: "PCOD, irregular periods, heavy bleeding, painful periods, hormonal imbalance.",
      fullDescription:
        "Menstrual disorders can significantly impact a woman's quality of life. Our approach addresses hormonal balance, reproductive health, and overall wellness through natural methods.",
      approach: "Hormonal balancing herbs, uterine tonics, and stress management techniques.",
      symptoms: ["Irregular periods", "Heavy bleeding", "Painful periods", "PCOD/PCOS", "Mood swings"],
      duration: "4-8 months",
      successRate: "91%",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
      treatmentSteps: [
        "Comprehensive hormonal assessment",
        "Hormonal balancing medicines",
        "Uterine cleansing therapy",
        "Lifestyle and dietary guidance",
      ],
      testimonial: {
        name: "Kavitha Reddy",
        text: "My PCOD is completely under control and my periods are regular now.",
        rating: 5,
      },
    },
    {
      id: "male-impotency",
      icon: Shield,
      title: "Impotency/Infertility",
      category: "Sexual Health",
      shortDescription: "Lack of stamina, erection issues, infertility, low sperm count.",
      fullDescription:
        "Sexual health issues can affect confidence and relationships. Our confidential treatment approach addresses both physical and psychological aspects for both men and women.",
      approach: "Personalized tonics, stress relief methods, hormonal balance treatments.",
      symptoms: ["Low stamina", "Erectile dysfunction", "Premature ejaculation", "Low libido", "Infertility"],
      duration: "4-8 months",
      successRate: "89%",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      treatmentSteps: [
        "Confidential consultation",
        "Personalized tonic preparations",
        "Stress management techniques",
        "Lifestyle optimization",
      ],
      testimonial: {
        name: "Anonymous Patient",
        text: "Completely confidential treatment with excellent results. My confidence is restored.",
        rating: 5,
      },
    },
    {
      id: "nervous-weakness",
      icon: Brain,
      title: "Nervous Weakness",
      category: "Neurological",
      shortDescription: "Mental fatigue, memory loss, anxiety, depression, stress-related disorders.",
      fullDescription:
        "Nervous weakness affects mental clarity and emotional well-being. Our approach strengthens the nervous system naturally while addressing underlying stress factors.",
      approach: "Nerve-strengthening herbs, stress management, and mental wellness therapies.",
      symptoms: ["Mental fatigue", "Memory problems", "Anxiety", "Depression", "Concentration issues"],
      duration: "3-6 months",
      successRate: "85%",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      treatmentSteps: [
        "Mental health assessment",
        "Nerve-strengthening medicines",
        "Stress management techniques",
        "Meditation and lifestyle guidance",
      ],
      testimonial: {
        name: "Ramesh Patel",
        text: "My anxiety and mental fatigue are completely gone. I feel mentally strong and focused now.",
        rating: 5,
      },
    },
    {
      id: "ulcer",
      icon: Activity,
      title: "Ulcer",
      category: "Digestive",
      shortDescription: "Stomach pain, acidity, gastritis, peptic ulcers, digestive disorders.",
      fullDescription:
        "Ulcers can cause severe discomfort and affect daily life. Our natural approach heals ulcers from within while preventing recurrence through dietary and lifestyle modifications.",
      approach: "Ulcer-healing herbs, digestive tonics, and dietary regulation.",
      symptoms: ["Stomach pain", "Burning sensation", "Acidity", "Nausea", "Loss of appetite"],
      duration: "2-4 months",
      successRate: "92%",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      treatmentSteps: [
        "Digestive system assessment",
        "Ulcer-healing herbal medicines",
        "Digestive fire enhancement",
        "Dietary and lifestyle modifications",
      ],
      testimonial: {
        name: "Lakshmi Devi",
        text: "My chronic ulcer problem is completely healed. No more stomach pain or acidity issues.",
        rating: 5,
      },
    },
  ]

  return (
    <section id="treatments" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Treatment Specializations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive natural treatments for chronic conditions with proven results and no side effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={treatment.id}
              className="group hover:shadow-2xl transition-all duration-300 border-none shadow-lg overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${treatment.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <treatment.icon className={`h-6 w-6 ${treatment.iconColor}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {treatment.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {treatment.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{treatment.shortDescription}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {treatment.duration}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Success Rate:</span>
                    <Badge className="text-xs bg-green-100 text-green-700 hover:bg-green-100">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {treatment.successRate}
                    </Badge>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1 hover:bg-green-50 hover:text-green-600 hover:border-green-600 bg-transparent"
                        onClick={() => setSelectedTreatment(treatment)}
                      >
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      {selectedTreatment && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="flex items-center space-x-3 text-2xl">
                              <div
                                className={`w-12 h-12 ${selectedTreatment.bgColor} rounded-xl flex items-center justify-center`}
                              >
                                <selectedTreatment.icon className={`h-6 w-6 ${selectedTreatment.iconColor}`} />
                              </div>
                              <span>{selectedTreatment.title}</span>
                            </DialogTitle>
                          </DialogHeader>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                            <div className="space-y-6">
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-3">About the Condition</h3>
                                <p className="text-gray-600 leading-relaxed">{selectedTreatment.fullDescription}</p>
                              </div>

                              <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Our Approach</h3>
                                <p className="text-gray-600 leading-relaxed">{selectedTreatment.approach}</p>
                              </div>

                              <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Common Symptoms</h3>
                                <ul className="space-y-2">
                                  {selectedTreatment.symptoms.map((symptom: string, idx: number) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                      {symptom}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div>
                                <h3 className="font-semibold text-gray-900 mb-3">Treatment Process</h3>
                                <ol className="space-y-3">
                                  {selectedTreatment.treatmentSteps.map((step: string, idx: number) => (
                                    <li key={idx} className="flex items-start">
                                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                        {idx + 1}
                                      </div>
                                      <span className="text-gray-600">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-3">Patient Success Story</h3>
                                <blockquote className="text-gray-600 italic mb-2">
                                  "{selectedTreatment.testimonial.text}"
                                </blockquote>
                                <cite className="text-green-600 font-medium">
                                  — {selectedTreatment.testimonial.name}
                                </cite>
                              </div>

                              <div className="flex space-x-2">
                                <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                                  <Link href="/appointment">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Book Appointment
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>

                  <Button asChild className="flex-1 bg-green-600 hover:bg-green-700">
                    <Link href="/appointment">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Condition Listed?</h3>
            <p className="text-gray-600 mb-6">
              We treat many more conditions using traditional Siddha and Homeopathy medicine. Contact us for a
              personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/appointment">Schedule Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-200 text-green-700 hover:bg-green-50 bg-transparent"
              >
                <Link href="tel:+919851234547">Call for Guidance</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
