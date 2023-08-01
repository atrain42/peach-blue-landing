'use client'
import { useRef } from "react"
import { useInView } from "framer-motion";


export default function SectionHeader({title, subtitle, text}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.75 })

  const animation = (duration, delay) => {
    return {
      opacity: isInView ? 1 : 0,
      transition: `all ${duration} ease-in ${delay}`,
    }
  }

  return (
    <div
      className='flex flex-col items-center justify-center'
      ref={ref}
    >
      <h2 className='small-header text-theme' style={animation('0.5s', '.05s')}>
        {subtitle}
      </h2>
      <h1
        className='text-header mv:text-4xl sm:text-5xl mb-4'
        style={animation('0.5s', '0.3s')}
      >
        {title}
      </h1>
      <p
        className='mb-12 mv:w-full sm:w-400 text-center mv:px-8 sm:px-0'
        style={animation('0.5s', '0.6s')}
      >
        {text}
      </p>
    </div>
  )
}
