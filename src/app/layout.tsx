import type React from "react"
import './globals.css'
import { Inter } from "next/font/google"
import { cn } from "@/src/lib/utils"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "UBDT Utkarsh 2k25 - Inter College Technical Festival",
  description: "UBDT Utkarsh is an inter college technical festival organized by University BDT College of Engineering, Davangere.",
  keywords: [
    "UBDT", 
    "Utkarsh",
    "2k25",
    "technical festival",
    "college festival",
    "inter college",
    "University BDT College",
    "Davangere"
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
