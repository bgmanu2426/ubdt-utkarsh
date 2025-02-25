import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechFest 2024 - Inter College Technical Festival",
  description: "Join the biggest inter-college technical festival.",
  other: {
    "link-preload": "/brochure.pdf",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>{children}</body>
    </html>
  )
}



import './globals.css'