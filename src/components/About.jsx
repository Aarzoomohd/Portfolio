import React from 'react'
import { motion } from "framer-motion"
import { aboutInfo } from "../assets/assets"

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id="about"
      className='py-20 bg-dark-200 relative'
      style={{
        border: '1px solid rgba(167, 139, 250, 0.2)',
      }}
    >
      {/* Subtle background glow */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'linear-gradient(135deg, rgba(167,139,250,0.04) 0%, transparent 50%, rgba(167,139,250,0.04) 100%)',
        }}
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className='max-w-3xl mx-auto'
        >
          <div className='rounded-2xl p-8 bg-dark-300'>
            <h3 className='text-2xl font-semibold mb-4'>
              My Journey
            </h3>

            <p className='text-gray-300 mb-6'>
              I'm a passionate full-stack developer with over 2 years of experience
              creating digital solutions for businesses around the world. My journey started
              with basic HTML/CSS websites and has evolved into building complex web applications
              with modern frameworks.
            </p>

            <p className='text-gray-300 mb-12'>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              tech blogs and tutorials. I believe in continuous learning and pushing
              the boundaries of what's possible on the web.
            </p>

            {/* Info Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {aboutInfo.map((data, index) => (
                <div
                  key={index}
                  className='bg-dark-200 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'
                >
                  <div className='text-purple text-4xl mb-4'>
                    <data.icon />
                  </div>

                  <h3 className='text-xl font-semibold mb-3'>
                    {data.title}
                  </h3>

                  <p className='text-gray-400'>
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About