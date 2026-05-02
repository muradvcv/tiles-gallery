import Link from "next/link";
import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F4D] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Tiles Gallery
          </h2>

          <p className="text-gray-300 leading-7">
            Discover premium quality tiles for modern
            homes and elegant interior spaces.
          </p>
        </div>

        {/* Quick Links */}
        <nav>
          <h6 className="text-xl font-semibold mb-5">
            Quick Links
          </h6>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/" className="hover:text-white duration-300">
              Home
            </Link>

            <Link href="/tiles" className="hover:text-white duration-300">
              All Tiles
            </Link>

            <Link href="/profile" className="hover:text-white duration-300">
              My Profile
            </Link>

            <Link href="/login" className="hover:text-white duration-300">
              Login
            </Link>
          </div>
        </nav>

        {/* Contact */}
        <nav>
          <h6 className="text-xl font-semibold mb-5">
            Contact Us
          </h6>

          <div className="space-y-3 text-gray-300">
            <p>Dhaka, Bangladesh</p>
            <p>support@tilesgallery.com</p>
            <p>+880 1234-567890</p>
          </div>
        </nav>

        {/* Social */}
        <nav>
          <h6 className="text-xl font-semibold mb-5">
            Follow Us
          </h6>

          <div className="grid grid-flow-col gap-4 w-fit">

            {/* Twitter */}
            <p className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#0B1F4D] duration-300 flex items-center justify-center cursor-pointer">
              <Link href={'https://x.com/'}><BsTwitter /></Link>
            </p>

            {/* YouTube */}
            <p className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#0B1F4D] duration-300 flex items-center justify-center cursor-pointer">
              <Link href={'https://www.youtube.com/'}><BsYoutube /></Link>
            </p>

            {/* Facebook */}
            <p className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-[#0B1F4D] duration-300 flex items-center justify-center cursor-pointer">
              <Link href={'https://www.facebook.com/'}><FaFacebook /></Link>
            </p>

          </div>
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © 2026 Tiles Gallery. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;