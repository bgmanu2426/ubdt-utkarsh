import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { coordinators } from '../DATA'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail, Phone } from 'lucide-react'

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

const Coordinators = () => {
    return (
        <>
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
                        className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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
                                className="flex flex-col items-center"
                            >
                                <Card className="w-full bg-card/50 backdrop-blur-sm overflow-hidden">
                                    <div className="h-32 relative overflow-hidden">
                                        <Image
                                            src={coordinator.image || "/placeholder.svg"}
                                            alt={coordinator.name}
                                            fill
                                            className="object-cover transition-transform hover:scale-105"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-base font-bold mb-1">{coordinator.name}</h3>
                                        <p className="text-primary text-sm mb-2">{coordinator.role}</p>

                                        <div className="space-y-1 text-sm">
                                            <div className="flex items-center gap-1">
                                                <Phone className="h-3 w-3 text-muted-foreground" />
                                                <span className="text-xs">{coordinator.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Mail className="h-3 w-3 text-muted-foreground" />
                                                <span className="text-xs">{coordinator.email}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Linkedin className="h-3 w-3 text-muted-foreground" />
                                                <a href={coordinator.linkedin} />
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
        </>
    )
}

export default Coordinators