import React from 'react'
import { timeline } from '../DATA'
import { motion } from 'framer-motion'

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

const Timeline = () => {
    return (
        <>
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
        </>
    )
}

export default Timeline