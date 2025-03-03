import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold">
                        Utkarsh - 2k25
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header