import type React from "react"
import './globals.css'
import { Inter } from "next/font/google"
import { cn } from "@/src/lib/utils"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "TechFest 2024 - Inter College Technical Festival",
  description: "Join the biggest inter-college technical festival.",
  other: {
    "link-preload": "/brochure.pdf",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <Header />
        {children}
      </body>
    </html>
  )
}


