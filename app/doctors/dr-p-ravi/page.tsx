import { DoctorProfile } from "@/components/doctors/doctor-profile"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. P. Ravi - BSMS, DSMO (Retired) | Fifth-Generation Siddha Practitioner",
  description:
    "Book appointment with Dr. P. Ravi in Salem - Founder of Vignesh Siddha Hospital with 40+ years experience. Fifth-generation Siddha practitioner, former District Siddha Medical Officer for Salem & Namakkal.",
  keywords: [
    "Dr P Ravi appointment",
    "Dr P Ravi salem",
    "BSMS doctor salem",
    "Siddha doctor salem",
    "Vignesh Siddha Hospital",
    "District Siddha Medical Officer",
    "traditional siddha practitioner",
    "experienced siddha doctor",
    "siddha medicine specialist",
    "book appointment siddha doctor",
    "fifth-generation siddha doctor",
    "salem siddha hospital",
  ],
  openGraph: {
    title: "Dr. P. Ravi - Fifth-Generation Siddha Practitioner | Salem",
    description:
      "Founder of Vignesh Siddha Hospital with 40+ years experience. BSMS, former District Siddha Medical Officer for Salem & Namakkal districts.",
    url: "/doctors/dr-p-ravi",
    images: [
      {
        url: "/images/dad.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr P Ravi Profile Salem",
      },
    ],
  },
}

const doctorData = {
  id: "dr-p-ravi",
  name: "Dr. P. Ravi",
  title: "BSMS, DSMO (Retired)",
  specialization: "Fifth-Generation Siddha Practitioner",
  experience: "40+ Years",
  location: "Salem, Tamil Nadu",
  clinic: "Vignesh Siddha Hospital",
  consultationFee: "₹200",
  whatsappNumber: "+919626361797",
  image: "/images/p-ravi.jpeg",
  rating: 4.9,
  totalPatients: "50,000+",
  successRate: "98%",
  qualifications: [
    {
      degree: "BSMS",
      fullForm: "Bachelor of Siddha Medicine and Surgery",
      university: "Government Siddha Medical College, Palayamkottai",
      year: "1981",
    },
    {
      degree: "DSMO",
      fullForm: "District Siddha Medical Officer",
      description: "For Salem & Namakkal districts",
      year: "2009-2015",
    },
  ],
  specializations: {
    "Traditional Siddha": [
      "Panchakarma Therapies",
      "Detoxification Treatments",
      "Rasayana Chikitsa",
      "Kayakalpa Therapy",
      "Marma Therapy",
      "Herbal Formulations",
      "Classical Siddha Protocols",
      "Ancient Healing Techniques"
    ],
    "Chronic Conditions": [
      "Arthritis & Joint Disorders",
      "Neurological Conditions",
      "Skin Diseases",
      "Respiratory Ailments",
      "Digestive Disorders",
      "Metabolic Diseases",
      "Autoimmune Conditions",
      "Geriatric Care"
    ],
    "Specialized Care": [
      "Fertility Treatments",
      "Pediatric Care",
      "Women's Health",
      "Men's Health",
      "Post-COVID Recovery",
      "Lifestyle Disorders",
      "Stress Management",
      "Rejuvenation Therapies"
    ],
  },
  treatmentSystems: [
    "Traditional Siddha Medicine",
    "Classical Formulations",
    "Herbal Preparations",
    "Diet & Lifestyle Therapy",
    "Yogic Practices",
    "Detoxification Protocols",
    "Rasayana Treatments",
    "Kayakalpa Therapies"
  ],
  clinicDetails: {
    name: "Vignesh Siddha Hospital",
    address: "123 Main Street, Salem, Tamil Nadu 636001",
    timings: {
      weekdays: "Monday to Saturday: 8:00 AM - 1:00 PM, 3:00 PM - 7:00 PM",
      sunday: "Sunday: Emergency Only (Prior Appointment)",
    },
    foundingYear: "1995",
  },
  highlights: [
    "Fifth-Generation Siddha Practitioner",
    "40+ Years Clinical Experience",
    "Founder - Vignesh Siddha Hospital",
    "Former District Siddha Medical Officer",
    "50,000+ Patients Treated",
    "98% Success Rate",
    "Traditional Family Healing Legacy",
    "Expert in Classical Siddha Treatments"
  ],
  careerMilestones: [
    "Started medical service in 1984",
    "Established Vignesh Siddha Hospital in 1995",
    "Served as DSMO for Salem & Namakkal (2009-2015)",
    "Worked as Drug Inspector under AYUSH Department",
    "Continuing 5-generation family healing tradition"
  ],
  platforms: [
    "Hospital Website",
    "Google My Business",
    "Justdial",
    "WhatsApp Consultation",
    "Walk-in Appointments"
  ],
}

export default function DoctorProfilePage() {
  return <DoctorProfile doctor={doctorData} />
}
