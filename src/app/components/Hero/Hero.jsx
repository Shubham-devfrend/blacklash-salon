'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-[#C3A2A3] to-[#E6CFC9] flex items-center justify-center px-6 sm:px-12 py-16">
      <Navbar/>
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-7xl w-full gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-6 font-serif">
            Glow. Unwind. Empower.
          </h1>
          <p className="text-[#1A1A1A] text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
            Blacklash Boutique Spa Salon in Fort Wayne, IN, offers a sanctuary for beauty and relaxation.
            Specializing in hair, skin, and nail services, our boutique spa provides personalized treatments
            to help you look and feel your best.
          </p>
          <button className="mt-8 bg-[#C28D35] text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition">
            Book Your Appointment
          </button>
        </motion.div>

        {/* Right: Hero Image */}
            <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block flex-1 w-full lg:w-[43%] absolute left-[52%]"
      >
        <Image
          src="/hero.svg"
          alt="Spa Hero"
          width={400}
          height={100}
          className="w-full h-auto"
        />
      </motion.div>
      </div>
    </section>
  )
}

export default Hero
