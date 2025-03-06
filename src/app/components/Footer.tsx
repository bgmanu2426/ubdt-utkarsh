import { IoIosCall } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";

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
                                <h3 className="text-2xl font-bold mb-4">Event Venue</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <LuMapPin className="h-5 w-5 text-primary" />
                                        <p>Hadadi Road, Post Box No. 304, Davangere-577004. Karnataka</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4">Technical Secretaries</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-medium">Nandini SR</span>
                                        <div className="flex items-center gap-2">
                                            <IoIosCall className="h-5 w-5 text-primary" />
                                            <Link href="tel:+916362626353">+916362626353</Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-1">
                                        <span className="font-medium">Lakshminarayana BG</span>
                                        <div className="flex items-center gap-2">
                                            <IoIosCall className="h-5 w-5 text-primary" />
                                            <Link href="tel:+917204000742">+917204000742</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Social Media</h3>
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center gap-2">
                                        <FaInstagram className="h-5 w-5 text-primary" />
                                        <Link href="https://instagram.com/ubdtutkarsh" target="_blank" rel="noopener noreferrer">
                                            @ubdtutkarsh
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} UBDT Utkarsh. All rights reserved.</p>
                        <br />
                        <p>
                            Developed by <Link href="https://lnbg.in" target="_blank" rel="noopener noreferrer">bgmanu2426</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer