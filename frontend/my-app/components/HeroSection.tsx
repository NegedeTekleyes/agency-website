"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image/hero.jpg"
          alt="hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay (dark/light split effect) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Top Navbar */}
      <div className=" fixed absolute top-0 left-0 w-full flex justify-between items-center p-6 z-20">
        <div className="border border-red-500 px-3 py-1 text-red-500 font-bold">
          S.
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="w-10 h-10 bg-red-500 flex items-center justify-center rounded-full text-white"
        >
          ≡
        </button>
      </div>

      {/* Center Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-[120px] font-bold text-red-500 leading-none">
          Shega
        </h1>

        <p className="tracking-[10px] text-white text-sm mt-4">
          DESIGN AGENCY
        </p>
      </div>

      {/* Side Menu */}
      {menuOpen && (
        <div className="absolute top-0 right-0 w-[300px] h-full bg-black text-white z-30 p-10">
          
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-5 text-red-500"
          >
            ✕
          </button>

 <ul className="space-y-6 mt-10 text-lg">
  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About Agency</a></li>
  <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
  <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
  <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
  <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
</ul>
        </div>
      )}
    </section>
  );
}