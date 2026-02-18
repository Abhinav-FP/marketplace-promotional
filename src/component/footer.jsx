import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer({scrollFns}) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-0 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <Image 
            src="/Logo (2).png" 
            height={150} 
            width={150} 
            alt="Company Logo" 
            className="select-none"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h1>
          <ul className="space-y-2 font-poppins">
            <li>
              <button onClick={() => scrollFns?.hero?.()} className="hover:text-blue-400 transition cursor-pointer">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollFns?.feature?.()} className="hover:text-blue-400 transition cursor-pointer">
                Features
              </button>
            </li>
            <li>
              <button onClick={() => scrollFns?.work?.()} className="hover:text-blue-400 transition cursor-pointer">
                How it works
              </button>
            </li>
            <li>
              <button onClick={() => scrollFns?.contact?.()} className="hover:text-blue-400 transition cursor-pointer">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 font-poppins">
          <h1 className="text-lg font-semibold mb-2">Contact Us</h1>

          <p className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>
              Devi Marg, Bani Park,<br />
              Jaipur, Rajasthan - 302016
            </span>
          </p>

          <p className="flex items-center gap-4">
            <Mail className="h-5 w-5 text-blue-400" />
            support.marketplace@gmail.com
          </p>

          <p className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-blue-400" />
            +91 97578 5854
          </p>
        </div>

        {/* Social / Extra Section (Optional) */}
        <div>
          <h1 className="text-lg font-semibold mb-4 font-poppins">More</h1>
          <ul className="space-y-2 font-poppins">
            <li className="hover:text-blue-400 transition">Privacy Policy</li>
            <li className="hover:text-blue-400 transition">Terms & Conditions</li>
            <li className="hover:text-blue-400 transition">Support</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center">
        <p className="text-sm font-poppins">
          © 2026 Marketplace — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
