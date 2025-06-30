"use client"

import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

export function TreatmentsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const videoStats = [
    { icon: Clock, label: "5 Min", sublabel: "Watch Time" },
    { icon: Users, label: "10K+", sublabel: "Views" },
    { icon: Award, label: "Expert", sublabel: "Explanation" },
  ]

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200 px-4 py-2 mb-6">
            <Play className="h-4 w-4 mr-2" />
            How Siddha Treatment Works
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Understanding Our <span className="text-green-600">Treatment Approach</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch Dr. R. Ragavendra Balaji explain how traditional Siddha and Homeopathy medicine address the root cause of diseases for lasting healing and wellness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-100 to-blue-100">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src="https://er28c9gtkq.ufs.sh/f/PEBNjDyruEcTqcPmD6HqozJvutMehST1yrbsAjCZBcE2RKmL" // Replace with your actual video URL
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-white/90 hover:bg-white text-green-600 hover:text-green-700 shadow-2xl"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                </Button>
              </div>

              {/* Video Stats */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                {videoStats.map((stat, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                    <stat.icon className="h-5 w-5 text-green-600 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-900">{stat.label}</div>
                    <div className="text-xs text-gray-600">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </div>

            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">How Siddha medicine identifies root causes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">The role of pulse diagnosis in treatment</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Why natural medicines have no side effects</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">Success stories from our 15+ years of healing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About the Speaker</h3>
                  <div className="flex items-start space-x-4">
                    <Image
                      src="/images/Doctor.jpg" // Replace with actual image if available
                      alt="Dr. R. Ragavendra Balaji"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">Dr. R. Ragavendra Balaji</h4>
                      <p className="text-green-600 text-sm mb-2">Chief Medical Officer & Founder</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2">
                        BHMS, MD (Homeopathy), M.Sc Psychology
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-2">
                        <div>🌟 <strong>4.9</strong> Rating</div>
                        <div>👨‍⚕️ <strong>5000+</strong> Treated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
