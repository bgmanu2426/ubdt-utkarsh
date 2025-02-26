"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/src/lib/utils"

import { Button } from "@/src/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import Image from "next/image"
import { coordinators } from "../DATA"

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

const tabStyles = {
  tabContainer: "pb-2 overflow-x-auto scrollbar-hide",
  tabTrigger: "min-w-[120px] whitespace-nowrap",
}

export default function RulesPage() {
  const [activeTab, setActiveTab] = useState("hackathon")

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Event Rules</h1>
        </div>

        <motion.div initial="hidden" animate="visible" variants={container} className="space-y-8">
          <Tabs defaultValue="hackathon" className="w-full" onValueChange={setActiveTab}>
            <div className={tabStyles.tabContainer}>
              <TabsList className="flex w-full">
                <TabsTrigger value="hackathon" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  Hackathon
                </TabsTrigger>
                <TabsTrigger value="robotics" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  Robotics
                </TabsTrigger>
                <TabsTrigger value="coding" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  Coding
                </TabsTrigger>
                <TabsTrigger value="design" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  UI/UX Design
                </TabsTrigger>
                <TabsTrigger value="ctf" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  CTF Security
                </TabsTrigger>
                <TabsTrigger value="aiml" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  AI/ML Workshop
                </TabsTrigger>
                <TabsTrigger value="debate" className={cn("flex-shrink-0", tabStyles.tabTrigger)}>
                  Tech Debate
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="hackathon">
              <Card>
                <CardHeader>
                  <CardTitle>Hackathon Rules</CardTitle>
                  <CardDescription>24-hour coding competition to solve real-world problems</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "hackathon" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Teams must consist of exactly 4 members</li>
                        <li>All team members must be enrolled in the same college</li>
                        <li>Each participant can be part of only one team</li>
                        <li>Team members can be from different departments/years</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Competition Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>The hackathon will run for 24 consecutive hours</li>
                        <li>Teams will be given a set of problem statements at the start</li>
                        <li>Each team must choose one problem statement to work on</li>
                        <li>Teams must develop a working prototype within the time limit</li>
                        <li>Internet access will be provided for research and development</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Innovation and creativity (25%)</li>
                        <li>Technical complexity and implementation (25%)</li>
                        <li>Practicality and relevance to the problem (20%)</li>
                        <li>User experience and design (15%)</li>
                        <li>Presentation and demonstration (15%)</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Submission Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Working prototype of the solution</li>
                        <li>Source code (via GitHub repository)</li>
                        <li>Presentation slides (5 minutes max)</li>
                        <li>Brief documentation explaining the solution</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="robotics">
              <Card>
                <CardHeader>
                  <CardTitle>Robotics Challenge Rules</CardTitle>
                  <CardDescription>Build and program robots to complete specific tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "robotics" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Teams must consist of exactly 3 members</li>
                        <li>All team members must be enrolled in the same college</li>
                        <li>Each participant can be part of only one team</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Robot Specifications</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Maximum dimensions: 30cm × 30cm × 30cm</li>
                        <li>Maximum weight: 3kg</li>
                        <li>Voltage limit: 12V DC</li>
                        <li>Robots must be autonomous (no remote control)</li>
                        <li>Pre-built chassis are allowed, but custom modifications are required</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Competition Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>The competition consists of three rounds</li>
                        <li>Round 1: Obstacle course navigation</li>
                        <li>Round 2: Object sorting and placement</li>
                        <li>Round 3: Final challenge (revealed on competition day)</li>
                        <li>Teams will have 3 attempts per round</li>
                        <li>Best time/score from the attempts will be considered</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Task completion (40%)</li>
                        <li>Time taken (30%)</li>
                        <li>Design and innovation (20%)</li>
                        <li>Code efficiency (10%)</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="coding">
              <Card>
                <CardHeader>
                  <CardTitle>Coding Contest Rules</CardTitle>
                  <CardDescription>Test your programming skills with challenging problems</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "coding" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Participation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Individual participation only (no teams)</li>
                        <li>Participants must be enrolled in a recognized college or university</li>
                        <li>Valid college ID is required for verification</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Contest Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Duration: 3 hours</li>
                        <li>Platform: HackerRank/CodeForces (to be announced)</li>
                        <li>Languages allowed: C, C++, Java, Python</li>
                        <li>5-8 algorithmic problems of varying difficulty</li>
                        <li>Problems will cover data structures, algorithms, and mathematical concepts</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Scoring</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Each problem has a predefined point value based on difficulty</li>
                        <li>Partial scoring may be available for some problems</li>
                        <li>Time penalty for incorrect submissions</li>
                        <li>Ties will be broken based on submission time</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Rules</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Internet access is restricted to the contest platform only</li>
                        <li>Use of pre-written code is not allowed</li>
                        <li>Participants cannot communicate with others during the contest</li>
                        <li>Any form of plagiarism will result in disqualification</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="design">
              <Card>
                <CardHeader>
                  <CardTitle>UI/UX Design Challenge Rules</CardTitle>
                  <CardDescription>Design innovative user interfaces for given problem statements</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "design" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Teams must consist of exactly 2 members</li>
                        <li>All team members must be enrolled in the same college</li>
                        <li>Each participant can be part of only one team</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Competition Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Duration: 8 hours</li>
                        <li>Teams will be given a design brief at the start</li>
                        <li>Teams must create wireframes, mockups, and a prototype</li>
                        <li>Design tools allowed: Figma, Adobe XD, Sketch</li>
                        <li>Teams must present their designs to the judges</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Judging Criteria</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>User experience and usability (30%)</li>
                        <li>Visual design and aesthetics (25%)</li>
                        <li>Innovation and creativity (20%)</li>
                        <li>Adherence to design principles (15%)</li>
                        <li>Presentation and explanation (10%)</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Submission Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Wireframes and mockups</li>
                        <li>Interactive prototype</li>
                        <li>Design system documentation</li>
                        <li>Presentation slides (5 minutes max)</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ctf">
              <Card>
                <CardHeader>
                  <CardTitle>CTF Security Contest Rules</CardTitle>
                  <CardDescription>Capture the flag cybersecurity competition</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "ctf" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Team Composition</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Teams must consist of exactly 3 members</li>
                        <li>All team members must be enrolled in the same college</li>
                        <li>Each participant can be part of only one team</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Competition Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Duration: 6 hours</li>
                        <li>Jeopardy-style CTF with various categories</li>
                        <li>Categories include: Web, Crypto, Forensics, Reverse Engineering, Pwn</li>
                        <li>Each challenge has a point value based on difficulty</li>
                        <li>First team to solve a challenge gets bonus points</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Rules</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>No attacking the CTF infrastructure</li>
                        <li>No sharing of flags or solutions with other teams</li>
                        <li>No brute forcing the flag submission system</li>
                        <li>Teams must document their approach for each solved challenge</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Scoring</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Points are awarded for each solved challenge</li>
                        <li>Bonus points for first blood (first team to solve)</li>
                        <li>Time is used as a tiebreaker</li>
                        <li>Partial points may be awarded for partial solutions</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="aiml">
              <Card>
                <CardHeader>
                  <CardTitle>AI/ML Workshop Rules</CardTitle>
                  <CardDescription>Learn and implement machine learning algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "aiml" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Participation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Individual participation only</li>
                        <li>Participants must be enrolled in a recognized college or university</li>
                        <li>Basic knowledge of Python programming is required</li>
                        <li>Participants must bring their own laptops</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Workshop Format</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Duration: 6 hours (including breaks)</li>
                        <li>Hands-on workshop with guided exercises</li>
                        <li>Introduction to key ML libraries: NumPy, Pandas, Scikit-learn</li>
                        <li>Implementation of basic ML algorithms</li>
                        <li>Final mini-project to apply learned concepts</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Laptop with Python 3.7+ installed</li>
                        <li>Pre-installed libraries (requirements list will be provided)</li>
                        <li>Basic understanding of programming concepts</li>
                        <li>Jupyter Notebook or Google Colab account</li>
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeIn}>
                      <h3 className="text-lg font-semibold mb-2">Evaluation</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Participation certificate for all attendees</li>
                        <li>Mini-project evaluation for top performers</li>
                        <li>Best implementation award</li>
                        <li>Opportunity to join research projects</li>
                      </ul>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="debate">
              <Card>
                <CardHeader>
                  <CardTitle>Tech Debate Rules</CardTitle>
                  <CardDescription>Debate on current technology trends and ethical issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate={activeTab === "debate" ? "visible" : "hidden"}
                    className="space-y-6"
                  >
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
                        <li>Q&A session with judges (5 minutes)</li>
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
            </TabsContent>
          </Tabs>

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

        </motion.div>
      </div>
    </div>
  )
}

