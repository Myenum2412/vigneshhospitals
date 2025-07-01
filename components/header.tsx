"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      {/* Top Contact Bar */}
      <div className="bg-emerald-600 text-white py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <a href="tel:+919626361797" className="flex items-center space-x-1 hover:text-emerald-200 transition-colors" aria-label="Call Vignesh Hospital Salem">
              <Phone className="h-4 w-4" />
              <span>+91 96263 61797</span>
            </a>
            <a href="mailto:vigneshospital@gmail.com" className="flex items-center space-x-1 hover:text-emerald-200 transition-colors" aria-label="Email Vignesh Hospital Salem">
              <Mail className="h-4 w-4" />
              <span>vigneshospital@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs">Salem Main Branch</span>
            <a href="https://wa.me/919626361797" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-emerald-200 transition-colors" aria-label="WhatsApp Vignesh Hospital Salem">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link href="/" className="flex items-center space-x-2" aria-label="Vignesh Hospital Salem Home">
          <Image src="/images/vignesh-logo.png" alt="Vignesh Hospital Salem Logo" width={40} height={40} className="rounded-full" priority />
          <div>
            <h1 className="font-bold text-lg text-emerald-600">Vignesh Hospital</h1>
            <p className="text-xs text-muted-foreground">Siddha & Homeopathy</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Treatments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {treatments.map((treatment) => (
                    <ListItem key={treatment.title} title={treatment.title} href={treatment.href}>
                      {treatment.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/doctors">Doctors</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="https://buyherbals.in/" target="_self">Store</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile & Book Button */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/appointment">Book Appointment</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
                <Link href="/" className="flex items-center space-x-2 pb-4 border-b" onClick={() => setIsOpen(false)}>
                  <Image src="/images/vignesh-logo.png" alt="Vignesh Hospital Logo" width={32} height={32} className="rounded-full" />
                  <div>
                    <div className="font-bold text-emerald-600">Vignesh Hospital</div>
                    <div className="text-xs text-muted-foreground">Siddha & Homeopathy</div>
                  </div>
                </Link>
                <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/treatments" onClick={() => setIsOpen(false)}>Treatments</Link>
                <Link href="/doctors" onClick={() => setIsOpen(false)}>Doctors</Link>
                <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/store" onClick={() => setIsOpen(false)}>Store</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                <Button asChild className="mt-4">
                  <Link href="/appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

// Treatments array in specified order
const treatments = [
  {
    title: "Asthma",
    href: "/treatments",
    description: "Herbal remedies for managing asthma symptoms effectively.",
  },
  {
    title: "Kidney Stone",
    href: "/treatments",
    description: "Natural treatments to dissolve and prevent kidney stones.",
  },
  {
    title: "Arthritis",
    href: "/treatments",
    description: "Reduce inflammation and pain with holistic care.",
  },
  {
    title: "Piles",
    href: "/treatments",
    description: "Painless herbal approach to managing hemorrhoids.",
  },
  {
    title: "Hair Problems",
    href: "/treatments",
    description: "Stop hair fall and promote healthy regrowth.",
  },
  {
    title: "Skin Problems",
    href: "/treatments",
    description: "Clear skin with natural remedies for various skin issues.",
  },
  {
    title: "Menstrual Disorder",
    href: "/treatments",
    description: "Restore hormonal balance for better menstrual health.",
  },
  {
    title: "Impotency / Infertility",
    href: "/treatments",
    description: "Improve fertility with Siddha and Homeo care.",
  },
  {
    title: "Nervous Weakness",
    href: "/treatments",
    description: "Boost nerve strength and overcome fatigue naturally.",
  },
]

// ListItem component
const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"
