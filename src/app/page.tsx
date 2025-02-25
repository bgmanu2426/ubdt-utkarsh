"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import {
  CalendarDays,
  MapPin,
  Users,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  Menu,
  Download,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function calculateTimeLeft() {
    const difference = +new Date("2024-03-15") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            TechFest
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="#events" className="hover:text-primary transition-colors">
              Events
            </Link>
            <Link href="#timeline" className="hover:text-primary transition-colors">
              Timeline
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Button>Register Now</Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4">
                <Link href="#" className="text-lg">
                  Home
                </Link>
                <Link href="#events" className="text-lg">
                  Events
                </Link>
                <Link href="#timeline" className="text-lg">
                  Timeline
                </Link>
                <Link href="#about" className="text-lg">
                  About
                </Link>
                <Button className="mt-4">Register Now</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

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
              <h2 className="text-white mb-6 text-xl">Event Starts In:</h2>
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
      <section id="events" className="py-16 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-4">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured Events
          </motion.h2>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {events.map((event) => (
              <motion.div key={event.id} variants={fadeIn} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="flex h-full flex-col bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="mb-4 text-muted-foreground">{event.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CalendarDays className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full transition-transform hover:scale-105">Register</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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

      {/* Footer with Map */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1644262220000!5m2!1sen!2sus"
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
                    <p>150 Park Row, New York, NY 10007</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>info@techfest2024.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Event Coordinators</h3>
                <div className="space-y-2">
                  <p>John Doe - Technical Head</p>
                  <p>+1 (555) 234-5678</p>
                  <p>Jane Smith - Event Coordinator</p>
                  <p>+1 (555) 345-6789</p>
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

const events = [
  {
    id: 1,
    title: "Hackathon",
    description: "24-hour coding competition to solve real-world problems",
    date: "March 15, 2024",
    venue: "Main Auditorium",
    teamSize: "Team of 4",
  },
  {
    id: 2,
    title: "Robotics Challenge",
    description: "Build and program robots to complete specific tasks",
    date: "March 16, 2024",
    venue: "Engineering Block",
    teamSize: "Team of 3",
  },
  {
    id: 3,
    title: "Coding Contest",
    description: "Test your programming skills with challenging problems",
    date: "March 17, 2024",
    venue: "Computer Labs",
    teamSize: "Individual",
  },
]

const timeline = [
  {
    date: "Day 1",
    time: "9:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and event kickoff",
  },
  {
    date: "Day 1",
    time: "10:00 AM",
    title: "Hackathon Begins",
    description: "24-hour coding marathon starts",
  },
  {
    date: "Day 2",
    time: "10:00 AM",
    title: "Robotics Challenge",
    description: "Robot assembly and programming competition",
  },
  {
    date: "Day 3",
    time: "2:00 PM",
    title: "Coding Contest",
    description: "Competitive programming contest",
  },
  {
    date: "Day 3",
    time: "6:00 PM",
    title: "Closing Ceremony",
    description: "Prize distribution and closing remarks",
  },
]

