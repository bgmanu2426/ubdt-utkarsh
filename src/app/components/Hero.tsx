import { Button } from '@/src/components/ui/button'
import { FaDownload } from "react-icons/fa6";
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
        const difference = +new Date("2025-03-18") - +new Date()
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
                            UTKARSH 2K25 is a platform for students to showcase their technical skills and knowledge hosted by Student Association and Technical Commitee of UBDT College of Engineering, Davangere.
                        </p>

                        <div className="mb-12 mt-8">
                            <h2 className="text-white mb-6 text-base md:text-xl">Registration Ends In:</h2>
                            <div className="flex justify-center md:gap-5 gap-3">
                                {Object.keys(timeLeft).map((interval) => (
                                    <div
                                        key={interval}
                                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:min-w-[120px] min-w-[60px] transform hover:scale-105 transition-transform"
                                    >
                                        <div className="text-xl md:text-4xl font-bold text-white mb-1">
                                            {timeLeft[interval as keyof typeof timeLeft]}
                                        </div>
                                        <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">{interval}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center gap-4">
                            <Button
                                size="lg"
                                className="bg-white text-purple-900 hover:bg-gray-100 transition-transform hover:scale-105 group"
                                onClick={() => window.open("https://pub-860021a8f6b84064bf1a11e6264b53ed.r2.dev/Utkarsh-2k25.pdf", "_blank")}
                            >
                                <FaDownload className="mr-2 h-4 w-4 group-hover:animate-bounce" />
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