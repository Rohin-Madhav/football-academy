import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl sticky top-0 z-50 border-b-2 border-amber-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                        <Link to="/" className="flex items-center">
                            <svg width="70" height="70" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                                <path d="M200,40 L340,80 L340,200 C340,280 200,360 200,360 C200,360 60,280 60,200 L60,80 Z" fill="#001F3F" stroke="#D4AF37" strokeWidth="8" />
                                <path d="M64,130 L336,130" stroke="#D4AF37" strokeWidth="4" fill="none" />
                                <text x="200" y="210" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="64" textAnchor="middle" fill="#FFFFFF">RMFC</text>
                                <text x="200" y="250" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="18" textAnchor="middle" fill="#D4AF37" letterSpacing="4">ACADEMY</text>
                                <g transform="translate(180, 275) scale(0.8)">
                                    <circle cx="25" cy="25" r="22" fill="white" stroke="#001F3F" strokeWidth="2" />
                                    <path d="M25,3 L35,10 L33,22 L17,22 L15,10 Z" fill="#001F3F" />
                                    <path d="M35,10 L45,15 L43,28 L33,22 Z" fill="none" stroke="#001F3F" strokeWidth="1.5" />
                                    <path d="M15,10 L5,15 L7,28 L17,22 Z" fill="none" stroke="#001F3F" strokeWidth="1.5" />
                                    <path d="M33,22 L38,35 L25,43 L12,35 L17,22 Z" fill="none" stroke="#001F3F" strokeWidth="1.5" />
                                </g>
                                <polygon points="200,55 204,65 215,65 206,72 209,83 200,76 191,83 194,72 185,65 196,65" fill="#D4AF37" />
                            </svg>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/players">Players</NavLink>
                        <NavLink to="/staffs">Staffs</NavLink>
                        <NavLink to="/schedule">Schedule</NavLink>
                        <NavLink to="/contact-us" className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                            Contact Us
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-amber-500 hover:text-amber-400 focus:outline-none p-2"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-amber-500/20">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
                        <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
                        <MobileNavLink to="/players" onClick={() => setIsOpen(false)}>Players</MobileNavLink>
                        <MobileNavLink to="/staffs" onClick={() => setIsOpen(false)}>Staffs</MobileNavLink>
                        <MobileNavLink to="/schedule" onClick={() => setIsOpen(false)}>Schedule</MobileNavLink>
                        <MobileNavLink to="/contact-us" onClick={() => setIsOpen(false)} className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-center">
                            Contact Us
                        </MobileNavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

function NavLink({ to, children, className = "" }) {
    return (
        <Link
            to={to}
            className={`relative px-4 py-2.5 text-gray-200 hover:text-amber-400 font-semibold transition-all duration-300 group ${className}`}
        >
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
        </Link>
    )
}

function MobileNavLink({ to, children, onClick, className = "" }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`block px-4 py-3 text-gray-200 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-all duration-300 font-semibold ${className}`}
        >
            {children}
        </Link>
    )
}

export default Navbar