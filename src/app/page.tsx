"use client"

import Events from "./components/Events"
import Hero from "./components/Hero"
import Timeline from "./components/Timeline"


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Events */}
      <Events />

      {/* Timeline */}
      <Timeline />
    </div>
  )
}

