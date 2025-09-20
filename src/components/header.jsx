import logo from '../assets/logo.png'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-4 ">
            <div className="flex justify-between items-center py-4 sm:justify-center sm:relative sm:pt-8 lg:py-20">
                {/* Logo - centered on desktop, left on mobile */}
                <div className="flex-shrink-0 flex justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto" />
                </div>

                {/* Hamburger Menu - always on the right */}
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:absolute sm:right-0 cursor-pointer"
                    aria-label="Toggle menu">
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'
                        }`}></span>
                        <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : 'mb-1'
                        }`}></span>
                        <span className={`block w-5 h-0.5 bg-current transform transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''
                        }`}></span>
                    </div>
                </button>
            </div>

            {/* Test to show menu state */}
            {isMenuOpen && (
                <div className="p-4 bg-blue-100 rounded-lg text-center">
                    <p className="text-blue-800">Menu is open! 🎉</p>
                </div>
            )}
        </div>
    )
}