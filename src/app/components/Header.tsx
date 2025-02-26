import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet"
import { Menu } from 'lucide-react'

const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        TechFest
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="#events" className="hover:text-primary transition-colors">
                            Events
                        </Link>
                        <Link href="#timeline" className="hover:text-primary transition-colors">
                            Timeline
                        </Link>
                    </nav>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </SheetTrigger>
                        <SheetContent>
                            <nav className="flex flex-col gap-4">
                                <Link href="#" className="text-lg">
                                    Home
                                </Link>
                                <Link href="#events" className="text-lg">
                                    Events
                                </Link>
                                <Link href="#timeline" className="text-lg">
                                    Timeline
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    )
}

export default Header