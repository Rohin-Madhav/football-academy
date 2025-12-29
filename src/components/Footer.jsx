import React from 'react'
import { Copyright, Instagram, Facebook, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>

          {/* Copyright Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-500">
              <Copyright className="w-5 h-5" />
              <span className="font-semibold text-lg">RMFC Academy</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              All Rights Reserved RMFC Academy
            </p>
            <p className="text-gray-400 text-xs">
              Developing champions on and off the field since our foundation.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500 mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link
                to={"/about"}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
              >
                → About Us
              </Link>
              <Link
                to={"/players"}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
              >
                → Players
              </Link>
              <Link
                to={"/staffs"}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
              >
                → Staffs
              </Link>
              <Link
                to={"/schedule"}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
              >
                → Schedule
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500 mb-4">Follow Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay connected with us on social media
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-6 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} RMFC Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer