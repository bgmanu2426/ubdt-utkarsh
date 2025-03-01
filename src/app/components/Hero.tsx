import { Button } from '@/src/components/ui/button'
import { Download } from 'lucide-react'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useState } from 'react'

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const Hero = () => {
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
        <div>
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
                        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Utkarsh - 2k25</h1>
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
                                        <div className="text-4xl font-bold text-white mb-1">
                                            {timeLeft[interval as keyof typeof timeLeft]}
                                        </div>
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
        </div>
    )
}

export default Hero