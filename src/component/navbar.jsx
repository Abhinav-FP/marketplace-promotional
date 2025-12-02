"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative w-full">
      <div className="absolute top-4 left-0 right-0 max-w-7xl bg-white/95 rounded-full mx-4 flex items-center justify-between px-6 md:px-12 py-2">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image 
            src="/Logo (2).png"
            height={60}
            width={60}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <Link href="#hero" className="text-gray-800 hover:text-blue-400 transition">Home</Link>
          <Link href="#features" className="text-gray-800 hover:text-blue-400 transition">Features</Link>
          <Link href="#work" className="text-gray-800 hover:text-blue-400 transition">How it works</Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-400 transition">Contact Us</Link>
        </div>
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-white"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-transparent backdrop-blur-xl px-6 pb-6 text-white flex flex-col gap-6 text-lg">
          <Link onClick={() => setOpen(false)} href="#hero">Home</Link>
          <Link onClick={() => setOpen(false)} href="#features">Features</Link>
          <Link onClick={() => setOpen(false)} href="#work">How it works</Link>
          <Link onClick={() => setOpen(false)} href="#contact">Contact Us</Link>
        </div>
      )}

    </nav>
  )
}
