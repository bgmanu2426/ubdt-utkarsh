"use client"

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
} from "lucide-react"
import Events from "./components/Events"
import Hero from "./components/Hero"
import Timeline from "./components/Timeline"
import Footer from "./components/Footer"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Events */}
      <Events />

      {/* Timeline */}
      <Timeline />

      {/* Footer with Map */}
      <Footer />
    </div>
  )
}

