import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-muted py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Map */}
                        <div className="h-[400px] rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7953.545433001722!2d75.91899577403161!3d14.452402158193664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba256dffbbba99%3A0x2e095478f115a69b!2sUniversity%20BDT%20College%20of%20Engineering%20(UBDT)%20%7C%7C%20Davangere!5e0!3m2!1sen!2sin!4v1740457805142!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <p>Hadadi Road, Post Box No. 304, Davangere-577004. Karnataka</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <Link href="tel:123456789">123456789</Link>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <Link href="mailto:demo@demo.com">demo@demo.com</Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">Event Coordinators</h3>
                                <div className="space-y-2">
                                    <p>John Doe - Technical 1</p>
                                    <Link href="tel:123456789">123456789</Link>
                                    <p>Jane Smith - Technical 2</p>
                                    <Link href="tel:123456789">123456789</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} UBDT Utkarsh. All rights reserved.</p>
                        <br />
                        <p>
                          Developed by <Link href="https://github.com/bgmanu2426" target="_blank" rel="noopener noreferrer">bgmanu2426</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer