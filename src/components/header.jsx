import logo from '../assets/logo.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const isActive = (path) => {
        return location.pathname === path
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-4 ">
            <div className="flex justify-between items-center py-4 sm:justify-center sm:relative sm:pt-8 lg:py-20">
                {/* Logo - centered on desktop, left on mobile */}
                <div className="flex-shrink-0 flex justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <img src={logo} alt="Logo" className="h-14 sm:h-20 w-auto" />
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

            {/* Beautiful Overlay Menu */}
            <div className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                        isMenuOpen ? 'opacity-60' : 'opacity-0'
                    }`}
                    onClick={closeMenu}
                ></div>
                
                {/* Menu Content */}
                <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {/* Close Button */}
                    <div className="flex justify-end p-6">
                        <button
                            onClick={closeMenu}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Close menu">
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className="block w-5 h-0.5 bg-gray-700 transform rotate-45 translate-y-0.5"></span>
                                <span className="block w-5 h-0.5 bg-gray-700 transform -rotate-45 -translate-y-0.5"></span>
                            </div>
                        </button>
                    </div>

                    {/* Logo in Menu */}
                    <div className="flex justify-center mb-12">
                        <img src={logo} alt="Logo" className="h-16 w-auto opacity-80" />
                    </div>

                    {/* Navigation Links */}
                    <nav className="px-8">
                        <ul className="space-y-8">
                            <li className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{transitionDelay: '100ms'}}>
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className={`block text-xl font-light tracking-wider py-3 border-b border-gray-100 transition-colors duration-200 ${
                                        isActive('/') 
                                            ? 'text-gray-900 font-normal' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}>
                                    HOME
                                    {isActive('/') && <div className="w-8 h-0.5 bg-red-500 mt-2"></div>}
                                </Link>
                            </li>
                            <li className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{transitionDelay: '200ms'}}>
                                <Link
                                    to="/my-portfolio"
                                    onClick={closeMenu}
                                    className={`block text-xl font-light tracking-wider py-3 border-b border-gray-100 transition-colors duration-200 ${
                                        isActive('/my-portfolio') 
                                            ? 'text-gray-900 font-normal' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}>
                                    MY PORTFOLIO
                                    {isActive('/my-portfolio') && <div className="w-8 h-0.5 bg-red-500 mt-2"></div>}
                                </Link>
                            </li>
                            <li className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{transitionDelay: '300ms'}}>
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={`block text-xl font-light tracking-wider py-3 border-b border-gray-100 transition-colors duration-200 ${
                                        isActive('/contact') 
                                            ? 'text-gray-900 font-normal' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}>
                                    CONTACT
                                    {isActive('/contact') && <div className="w-8 h-0.5 bg-red-500 mt-2"></div>}
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Social Media Icons in Menu */}
                    <div className={`absolute bottom-8 left-8 right-8 transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{transitionDelay: '400ms'}}>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                                <i className="fab fa-instagram text-gray-500 text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                                <i className="fab fa-facebook-f text-gray-500 text-lg"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                                <i className="fab fa-youtube text-gray-500 text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}