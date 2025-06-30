'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const phoneNumber = '+919361202502'
const message = 'Hi, I would like to know more about your services.'
const whatsappLink = `https://wa.me/+919361202502?text=${encodeURIComponent(message)}`
const shoppingLink = 'https://buyherbals.in/'
const helpLink = '/appointment' // New button link

export default function FloatingActionButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Icons shown when open */}
      {open && (
        <>
          {/* Help */}
          <Link
            href={helpLink}
            className="bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:scale-105 transition"
          >
            <Image
              src="/images/appoiment.png"
              alt="Help"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>

          {/* Shopping */}
          <Link
            href={shoppingLink}
            className="bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:scale-105 transition"
          >
            <Image
              src="/images/shopping.jpeg"
              alt="Shop"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>

          {/* WhatsApp */}
          <Link
            href={whatsappLink}
            target="_blank"
            className="bg-white p-2 rounded-full shadow-lg border border-gray-300 hover:scale-105 transition"
          >
            <Image
              src="/images/whatsapp.jpeg"
              alt="WhatsApp"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
        </>
      )}

      {/* Main toggle button with bell icon */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-white p-3 rounded-full shadow-xl border border-gray-300 hover:scale-105 transition"
        aria-label="Toggle Action Buttons"
      >
        <Image
          src="/images/bell.png"
          alt="Toggle"
          width={40}
          height={40}
          className="rounded-full"
        />
      </button>
    </div>
  )
}