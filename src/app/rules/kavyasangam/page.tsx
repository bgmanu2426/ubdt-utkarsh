"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { KavyasangamCoordinators, paperpresentationCoordinators } from "../../DATA"
import { FaDownload, FaLinkedin, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

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

export default function PaperPresentation() {
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
                            <FaArrowLeft className="h-4 w-4" />
                        </Link>
                    </Button>
                    <h1 className="text-3xl font-bold">Kavya Sangam</h1>
                </div>
                <motion.div initial="hidden" animate="visible" variants={container} className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rules for Kavya Sangam</CardTitle>
                            <CardDescription>
                                A platform for students to express their creativity and passion for the Kannada language through poetry recitation.                              </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">
                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li> Students from any branch are allowed to participate. </li>
                                        <li>Only one participant can participate.</li>

                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Event Format</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>  Only Kannada poetry is allowed.</li>
                                        <li>	Specify if original compositions are mandatory, or if published works are allowed.</li>
                                        <li>If published works are allowed, specify if there are any restrictions on the era or style of poetry.</li>
                                        <li> 	Time limit is maximum 10 min</li>



                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li> Content and originality.</li>
                                        <li>Clarity of pronunciation and diction.</li>
                                        <li>Expression and emotional delivery.</li>
                                        <li>Rhythm and cadence.</li>
                                        <li>Overall presentation and stage presence.</li>

                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Prizes</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>	First prize : Medal with certificate.</li>
                                        <li> Second prize : Medal with certificate.</li>

                                    </ul>
                                </motion.div>

                                <motion.div variants={fadeIn}>
                                    <h3 className="text-lg font-semibold mb-2">Registration fee</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>₹100/- per individual</li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                        </CardContent>
                    </Card>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto"
                            onClick={() => window.open("https://forms.gle/eaypxkPybXGo6ysr7", "_blank")}
                        >
                            Register Now
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto group"
                            onClick={() => window.open("https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/utkarsh-rulebook/Kavyasangam.pdf", "_blank")}
                        >
                            <FaDownload className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                            Download Brochure
                        </Button>
                    </div>

                    {/* <section className="py-16">
                        <motion.h2
                            className="mb-6 text-center text-3xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Gallery
                        </motion.h2>
                        <Carousel />
                    </section> */}

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
                                className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                            >
                                {KavyasangamCoordinators.map((coordinator, index) => {
                                    const { name, phone, linkedin } = coordinator as { name: string; phone: string; linkedin?: string };
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={fadeIn}
                                            whileHover={{ scale: 1.03 }}
                                            transition={{ duration: 0.2 }}
                                            className="flex"
                                        >
                                            <Card className="w-full bg-card/50 backdrop-blur-sm overflow-hidden items-center justify-center">
                                                <CardContent className="p-4 flex flex-col justify-center text-center">
                                                    <h3 className="text-base font-bold mb-1">
                                                        {name}
                                                    </h3>
                                                    <div className="space-y-1 text-sm">
                                                        <div className="flex items-center gap-1 justify-center">
                                                            <FaPhoneAlt className="h-3 w-3 text-muted-foreground" />
                                                            <a
                                                                href={`tel:${phone}`}
                                                                className="hover:text-primary transition-colors text-xs"
                                                            >
                                                                {phone}
                                                            </a>
                                                        </div>
                                                        {linkedin && (
                                                            <div className="flex items-center gap-1 justify-center">
                                                                <FaLinkedin className="h-3 w-3 text-muted-foreground" />
                                                                <a
                                                                    href={linkedin}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="hover:text-primary transition-colors text-xs"
                                                                >
                                                                    {linkedin
                                                                        ?.split("/")
                                                                        .filter(Boolean)
                                                                        .pop()}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}
