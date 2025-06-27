import { DoctorProfile } from "@/components/doctors/doctor-profile"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. R. Ragavendra Balaji - BHMS, MD (Homeopathy), M.Sc Psychology",
  description:
    "Book appointment with Dr. R. Ragavendra Balaji in Salem - 15+ years experienced Siddha & Homeopathy physician. Expert in chronic diseases, mental health, fertility treatments. BHMS, MD qualified doctor.",
  keywords: [
    "Dr Ragavendra Balaji appointment",
    "Dr Ragavendra Balaji salem",
    "BHMS doctor salem",
    "MD homeopathy doctor salem",
    "psychology doctor salem",
    "chronic disease specialist salem",
    "fertility specialist salem",
    "mental health doctor salem",
    "homeopathy consultation salem",
    "siddha medicine doctor salem",
    "experienced homeopath salem",
    "book appointment salem doctor",
  ],
  openGraph: {
    title: "Dr. R. Ragavendra Balaji - Expert Siddha & Homeopathy Physician Salem",
    description:
      "15+ years experienced doctor with BHMS, MD (Homeopathy), M.Sc Psychology. Specializing in chronic diseases, mental health, and fertility treatments in Salem.",
    url: "/doctors/dr-ragavendra-balaji",
    images: [
      {
        url: "/images/ragavendra-balaji.jpeg", // correct local image path
        width: 1200,
        height: 630,
        alt: "Dr Ragavendra Balaji Profile Salem",
      },
    ],
  },
}

const doctorData = {
  id: "dr-ragavendra-balaji",
  name: "Dr. R. Ragavendra Balaji",
  title: "BHMS, MD (Homeopathy), M.Sc Psychology",
  specialization: "Siddha & Homeopathy Physician",
  experience: "15+ Years",
  location: "Salem, Tamil Nadu",
  clinic: "Vignesh Hospital",
  consultationFee: "₹200",
  whatsappNumber: "+919626361797",
  image: "/images/ragavendra-balaji.jpeg", // ✅ fixed image path
  rating: 4.8,
  totalPatients: "10,000+",
  successRate: "95%",
  qualifications: [
    {
      degree: "BHMS",
      fullForm: "Bachelor of Homeopathic Medicine and Surgery",
      university: "Tamil Nadu Dr. M.G.R. Medical University",
      year: "2008",
    },
    {
      degree: "MD (Homeopathy)",
      fullForm: "Doctor of Medicine in Homeopathy",
      university: "Tamil Nadu Dr. M.G.R. Medical University",
      year: "2012",
    },
    {
      degree: "M.Sc Psychology",
      fullForm: "Master of Science in Psychology",
      university: "Bharathiar University",
      year: "2015",
    },
  ],
  specializations: {
    "Chronic Diseases": [
      "Diabetes Management",
      "Hypertension Control",
      "Arthritis & Joint Pain",
      "Thyroid Disorders",
      "Kidney Stone Treatment",
      "Liver Disorders",
      "Respiratory Issues",
      "Digestive Problems",
    ],
    "Mental Health": [
      "Depression & Anxiety",
      "Stress Management",
      "Sleep Disorders",
      "Behavioral Issues",
      "Addiction Recovery",
      "PTSD Treatment",
      "Panic Disorders",
      "Mood Disorders",
    ],
    "Women's Health": [
      "PCOS/PCOD Treatment",
      "Menstrual Disorders",
      "Fertility Enhancement",
      "Pregnancy Care",
      "Menopause Management",
      "Hormonal Imbalance",
      "Reproductive Health",
      "Lactation Support",
    ],
  },
  treatmentSystems: [
    "Classical Homeopathy",
    "Siddha Medicine",
    "Constitutional Treatment",
    "Miasmatic Prescribing",
    "Psychological Counseling",
    "Lifestyle Medicine",
    "Nutritional Therapy",
    "Mind-Body Healing",
  ],
  clinicDetails: {
    name: "Vignesh Hospital - Salem Main Branch",
    address: "123 Main Street, Salem, Tamil Nadu 636001",
    timings: {
      weekdays: "Monday to Saturday: 9:00 AM - 1:00 PM, 4:00 PM - 8:00 PM",
      sunday: "Sunday: 9:00 AM - 1:00 PM (Emergency Only)",
    },
  },
  highlights: [
    "29 Years Hospital Experience",
    "10,000+ Patients Treated",
    "95% Success Rate",
    "Chronic Disease Specialist",
    "Mental Health Expert",
    "Fertility Specialist",
    "Award-Winning Doctor",
    "Research Publications",
  ],
  platforms: [
    "Practo",
    "Justdial",
    "Google My Business",
    "Hospital Website",
    "WhatsApp Consultation",
    "Telemedicine Available",
  ],
}

export default function DoctorProfilePage() {
  return <DoctorProfile doctor={doctorData} />
}
