import React from 'react'
import { events } from '../DATA'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card"
import { CalendarDays, MapPin, Users } from 'lucide-react'
import { Button } from "@/src/components/ui/button"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";

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

const Events = () => {
    return (
        <>
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
                                <Card className="flex h-full flex-col bg-card/50 backdrop-blur-sm overflow-hidden">
                                    <div className="w-full h-48 relative">
                                        {(event as any).videoUrl ? (
                                            <video
                                                src={(event as any).videoUrl}
                                                className="w-full h-full object-cover"
                                                autoPlay
                                                muted
                                                loop
                                            />
                                        ) : (
                                            <Image
                                                src={event.image || "/placeholder.svg"}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        )}
                                    </div>

                                    <CardHeader>
                                        <CardTitle>{event.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-1 pt-2">
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
                                        <div className="flex w-full gap-2">
                                            <Link href={`/rules/${event.slug}`}>
                                                <Button className="flex-1 transition-transform hover:scale-105">
                                                    Explore More <FaLongArrowAltRight />
                                                </Button>
                                            </Link>
                                            {/* <Button variant="outline" className="transition-transform hover:scale-105" asChild>
                                            </Button> */}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Events