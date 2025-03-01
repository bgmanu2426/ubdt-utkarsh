"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Linkedin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { coordinators } from "../../DATA"

function Carousel() {
    const images = [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <Image
                    src={images[currentIndex]}
                    alt={`Photo ${currentIndex + 1}`}
                    width={800}
                    height={400}
                    className="w-full"
                />
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                Prev
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
                Next
            </button>
        </div>
    )
}

export default function DebateRulesPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    return (
        <div className="min-h-screen bg-background pt-16">
            <div className="container mx-auto md:px-10 lg:px-8 px-3 py-12">
                <div className="mb-8 flex items-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <Link href="/">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">Tech Debate Rules</h1>
                </div>
                <motion.div initial="hidden" animate="visible" variants={container} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tech Debate Rules</CardTitle>
                            <CardDescription>Debate on current technology trends and ethical issues</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">
                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Teams must consist of exactly 2 members</li>
                                        <li>All team members must be enrolled in the same college</li>
                                        <li>Each participant can be part of only one team</li>
                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Debate Format</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Topics will be announced 24 hours before the event</li>
                                        <li>Each team will be assigned a position (for or against)</li>
                                        <li>7 minutes for opening statements</li>
                                        <li>5 minutes for rebuttal</li>
                                        <li>3 minutes for closing arguments</li>
                                        <li>Q&amp;A session with judges (5 minutes)</li>
                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Content and argument quality (30%)</li>
                                        <li>Technical accuracy (25%)</li>
                                        <li>Presentation and delivery (20%)</li>
                                        <li>Rebuttal effectiveness (15%)</li>
                                        <li>Time management (10%)</li>
                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Rules</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>No personal attacks or offensive language</li>
                                        <li>Teams must stick to their assigned position</li>
                                        <li>No interrupting the opposing team</li>
                                        <li>Citations and sources should be provided for facts</li>
                                        <li>Judges' decision is final</li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Button size="lg" className="w-full sm:w-auto">
                            Register Now
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto group"
                            onClick={() => window.open("/brochure.pdf", "_blank")}
                        >
                            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                            Download Brochure
                        </Button>
                    </div>

                    <section className="py-16">
                        <motion.h2
                            className="mb-6 text-center text-3xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Gallery
                        </motion.h2>
                        <Carousel />
                    </section>

                    <section id="coordinators" className="py-16 scroll-mt-16">
                        <div className="mx-auto max-w-6xl px-4">
                            <motion.h2
                                className="mb-12 text-center text-3xl font-bold"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Meet Our Coordinators
                            </motion.h2>
                            <motion.div
                                className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {coordinators.map((coordinator, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeIn}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex"
                                    >
                                        <Card className="w-full flex flex-row bg-card/50 backdrop-blur-sm overflow-hidden items-center justify-center">
                                            <div className="relative w-32 h-32">
                                                <Image
                                                    src={coordinator.image || "/placeholder.svg"}
                                                    alt={coordinator.name}
                                                    fill
                                                    className="object-cover rounded-full p-4"
                                                />
                                            </div>
                                            <CardContent className="w-2/3 p-4 flex flex-col justify-center">
                                                <h3 className="text-base font-bold mb-1">{coordinator.name}</h3>
                                                <p className="text-primary text-sm mb-2">{coordinator.role}</p>
                                                <div className="space-y-1 text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <Phone className="h-3 w-3 text-muted-foreground" />
                                                        <span className="text-xs">{coordinator.phone}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Linkedin className="h-3 w-3 text-muted-foreground" />
                                                        <a
                                                            href={coordinator.linkedin}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:text-primary transition-colors text-xs"
                                                        >
                                                            LinkedIn
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}
