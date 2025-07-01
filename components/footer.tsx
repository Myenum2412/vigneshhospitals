"use client";

import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Hospital Info */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/vignesh-logo.png"
                alt="Vignesh Hospital Salem Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-bold text-lg text-emerald-400">Vignesh Hospital</h2>
                <p className="text-sm text-gray-300">Siddha & Homeopathy</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading Siddha and Homeopathy hospital in Salem with 29+ years of experience in traditional healing and
              natural treatments.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/vigneshhospital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/vigneshospital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@Dr.Ragavendrabalaji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/919361202502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </section>

          
          {/* Quick Links */}
          <section className="space-y-4">
            <h3 className="font-semibold text-lg text-emerald-400">Quick Links</h3>
            <nav className="space-y-2" role="navigation" aria-label="Footer navigation">
              <Link href="/about" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                About Us
              </Link>
              <Link href="/treatments" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Treatments
              </Link>
              <Link href="/doctors" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Our Doctors
              </Link>
              <Link
                href="/appointment"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Book Appointment
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Gallery
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Health Blog
              </Link>
              <Link href="/store" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Online Store
              </Link>
            </nav>
          </section>

          {/* Treatments */}
          <section className="space-y-4">
            <h3 className="font-semibold text-lg text-emerald-400">Specializations</h3>
            <nav className="space-y-2" role="navigation" aria-label="Treatment specializations">
              <Link
                href="/treatments#respiratory"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Respiratory Disorders
              </Link>
              <Link
                href="/treatments#joint-bone"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Joint & Bone Disorders
              </Link>
              <Link
                href="/treatments#skin"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Skin Disorders
              </Link>
              <Link
                href="/treatments#digestive"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Digestive Disorders
              </Link>
              <Link
                href="/treatments#urological"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Urological Disorders
              </Link>
              <Link
                href="/treatments#womens-health"
                className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm"
              >
                Women's Health
              </Link>
            </nav>
          </section>

          {/* Policies */}
          <section className="space-y-4">
            <h3 className="font-semibold text-lg text-emerald-400">Policies</h3>
            <nav className="space-y-2" role="navigation" aria-label="Policy links">
              <Link href="/terms" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/refunds" className="block text-gray-300 hover:text-emerald-400 transition-colors text-sm">
                Refunds & Cancellations
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="pt-4">
              <h3 className="font-semibold text-lg text-emerald-400">Contact Information</h3>
              <address className="not-italic space-y-6 text-sm text-gray-300">
                {/* Branch 1 */}
                <div>
                  <h4 className="font-medium text-emerald-300 mb-1">Main Vignesh Hospital</h4>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>
                      No 220/135, 2nd Agraharam,
                      <br />
                      Salem - 636001, Tamil Nadu
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                    <a href="https://wa.me/919851234547" className="hover:text-emerald-400 transition-colors">
                    +91 96263 61797 
                    </a>
                  </div>
                </div>
              </address>
            </div>
          </section>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Vignesh Siddha and Homeopathy Hospital. All rights reserved.
          </p>
          <nav className="flex space-x-6" role="navigation" aria-label="Legal links">
            <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
