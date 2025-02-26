"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Download,
} from "lucide-react"

import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { coordinators, timeline } from "./DATA"
import Events from "./components/Events"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [mounted, setMounted] = useState(false)

  function calculateTimeLeft() {
    const difference = +new Date("2025-03-15") - +new Date()
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-90">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20"
            style={{ opacity }}
          />
        </div>
        <motion.div
          className="relative container mx-auto px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">TechFest 2024</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
              Join the biggest inter-college technical festival. Showcase your skills, compete with the best, and win
              exciting prizes.
            </p>

            {/* Countdown Timer */}
            <div className="mb-12 mt-8">
              <h2 className="text-white mb-6 text-xl">Registaration Ends In:</h2>
              <div className="flex justify-center gap-6">
                {Object.keys(timeLeft).map((interval) => (
                  <div
                    key={interval}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[120px] transform hover:scale-105 transition-transform"
                  >
                    <div className="text-4xl font-bold text-white mb-1">{timeLeft[interval]}</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">{interval}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-purple-900 hover:bg-gray-100 transition-transform hover:scale-105 group"
                onClick={() => window.open("/brochure.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Events */}
      <Events />

      {/* Timeline */}
      <section id="timeline" className="bg-muted/50 py-16 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Event Timeline
          </motion.h2>
          <motion.div className="space-y-8" variants={container} initial="hidden" animate="visible">
            {timeline.map((item, index) => (
              <motion.div key={index} className="flex gap-8" variants={fadeIn} custom={index}>
                <div className="flex-none text-right">
                  <div className="font-bold">{item.time}</div>
                  <div className="text-sm text-muted-foreground">{item.date}</div>
                </div>
                <div className="relative border-l border-primary pl-8">
                  <motion.div
                    className="absolute -left-1.5 top-2 h-3 w-3 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                  />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section id="coordinators" className="py-16 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Event Coordinators
          </motion.h2>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {coordinators.map((coordinator) => (
              <motion.div key={coordinator.id} variants={fadeIn} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="flex h-full flex-col bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <img src={coordinator.photo} alt={coordinator.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
                    <CardTitle>{coordinator.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center gap-2 text-sm justify-center">
                      <Linkedin className="h-4 w-4" />
                      <Link href={coordinator.linkedin} target="_blank" className="hover:text-primary transition-colors">
                        {coordinator.linkedin}
                      </Link>
                    </div>
                    <div className="flex items-center gap-2 text-sm justify-center mt-2">
                      <Phone className="h-4 w-4" />
                      <Link href={`tel:${coordinator.phone}`} className="hover:text-primary transition-colors">
                        {coordinator.phone}
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Footer with Map */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.545433001722!2d75.91899577403161!3d14.452402158193664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba256dffbbba99%3A0x2e095478f115a69b!2sUniversity%20BDT%20College%20of%20Engineering%20(UBDT)%20%7C%7C%20Davangere!5e0!3m2!1sen!2sin!4v1740457805142!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <p>Hadadi Road, Post Box No. 304, Davangere-577004. Karnataka</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <Link href="tel:123456789">123456789</Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <Link href="mailto:demo@demo.com">demo@demo.com</Link>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Event Coordinators</h3>
                <div className="space-y-2">
                  <p>John Doe - Technical 1</p>
                  <Link href="tel:123456789">123456789</Link>
                  <p>Jane Smith - Technical 2</p>
                  <Link href="tel:123456789">123456789</Link>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="hover:text-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TechFest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

