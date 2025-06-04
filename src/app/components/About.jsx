'use client'

import React, { useRef } from 'react'
import Head from './Head'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const AboutVariants1 = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const AboutVariants2 = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.4, duration: 0.4 },
  },
}

const About = () => {
  const title = 'About Blacklash Boutique Spa Salon'
  const subtitle = 'About Us'

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className='w-full px-6 lg:px-32 lg:pt-16 pt-16 pb-8 flex flex-col justify-center bg-[#F7F4F1]'>
      <Head title={title} subtitle={subtitle} />
      <div
        ref={ref}
        className='w-full flex flex-col-reverse lg:flex-row justify-between items-center pt-10 gap-10'
      >
        <motion.p
          variants={AboutVariants1}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='text-base sm:text-lg lg:text-xl text-neutral-600 max-w-[600px] text-justify'
        >
       Blacklash Boutique Spa Salon is a premier destination in Fort Wayne, Indiana, dedicated to enhancing your natural beauty through a range of expert services. Our salon offers a tranquil environment where clients can indulge in personalized hair, skin, and nail treatments. <br />
        <br />
        With a commitment to excellence, our skilled professionals provide services such as loc retwists, manicures, pedicures, and rejuvenating facials. We pride ourselves on creating a welcoming atmosphere that promotes relaxation and self-care. <br />
        <br />
        Conveniently located at 3214 E Paulding Rd, Fort Wayne, IN 46816, we invite you to experience the exceptional care and attention that sets Blacklash Boutique Spa Salon apart.
        </motion.p>
        <motion.div
          variants={AboutVariants2}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='w-full max-w-[500px]'
        >
          <Image
            src='/about.jpg'
            alt='image'
            width={500}
            height={100}
            className='w-full rounded-xl border-2 border-[#C28D35] object-cover'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
