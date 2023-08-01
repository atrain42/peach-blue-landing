'use client'
import { useState } from "react"
import { motion } from "framer-motion"

import arrow from '../images/right.svg'
import cubeDark from '../images/circle-ball.png'


export default function Card({ num, title, text }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='h-100 mv:w-full lg:w-96 p-6 flex flex-col justify-between rounded-lg rounded-br-4xl relative cursor-pointer hover:shadow-lg ease-linear duration-75 card'
    >
      <div className='flex justify-between items'>
        <div className='flex flex-col'>
          <span className='text-lg mb-4 card-number'>{num}</span>
          <span className='text-3xl w-40'>{title}</span>
        </div>
        <div className='w-12 h-12 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border border-paragraph'>
          <img
            className='w-8 h-auto'
            rel='icon'
            src={arrow}
            alt='arrow icon'
            id='test'
          />
          <div className='arrow-bg'></div>
        </div>
      </div>
      <motion.div
        className='flex justify-center opacity-0'
        animate={{ rotate: isHovered ? 90 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{duration: 0.25}}
      >
        <img
          className={`w-36 h-auto self-center transition-all ease-in`}
          rel='icon'
          src={cubeDark}
          alt='cube icon'
        />
      </motion.div>

      <p className='text-lg'>{text}</p>
    </div>
  )
}
