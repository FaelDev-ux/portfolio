'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const Character3D = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = ((y - centerY) / centerY) * 20
      const rotateY = ((centerX - x) / centerX) * 20
      
      containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="character-3d w-full h-full flex items-center justify-center">
      <motion.div
        ref={containerRef}
        className="character-3d-inner relative w-64 h-64 md:w-80 md:h-80"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Cabeça */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-white via-gray-300 to-black rounded-full shadow-2xl border-4 border-gray-800">
          <div className="absolute top-6 left-6 w-4 h-4 md:w-5 md:h-5 bg-black rounded-full"></div>
          <div className="absolute top-6 right-6 w-4 h-4 md:w-5 md:h-5 bg-black rounded-full"></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-2 md:w-10 md:h-3 bg-black rounded-full"></div>
        </div>

        {/* Corpo */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-40 md:w-40 md:h-52 bg-gradient-to-br from-white via-gray-400 to-black rounded-t-3xl shadow-2xl border-4 border-gray-800">
          {/* Braços */}
          <div className="absolute -left-8 top-8 w-6 h-24 md:w-8 md:h-32 bg-gradient-to-br from-white via-gray-400 to-black rounded-full shadow-xl border-2 border-gray-800 transform -rotate-12"></div>
          <div className="absolute -right-8 top-8 w-6 h-24 md:w-8 md:h-32 bg-gradient-to-br from-white via-gray-400 to-black rounded-full shadow-xl border-2 border-gray-800 transform rotate-12"></div>
          
          {/* Mãos */}
          <div className="absolute -left-10 bottom-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-white to-gray-600 rounded-full shadow-lg border-2 border-gray-800"></div>
          <div className="absolute -right-10 bottom-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-white to-gray-600 rounded-full shadow-lg border-2 border-gray-800"></div>
        </div>

        {/* Pernas */}
        <div className="absolute top-56 left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
          <div className="w-8 h-32 md:w-10 md:h-40 bg-gradient-to-br from-white via-gray-400 to-black rounded-b-full shadow-xl border-4 border-gray-800"></div>
          <div className="w-8 h-32 md:w-10 md:h-40 bg-gradient-to-br from-white via-gray-400 to-black rounded-b-full shadow-xl border-4 border-gray-800"></div>
        </div>

        {/* Pés */}
        <div className="absolute top-[22rem] md:top-[28rem] left-1/2 -translate-x-1/2 flex gap-4 md:gap-6">
          <div className="w-12 h-6 md:w-16 md:h-8 bg-black rounded-full shadow-lg"></div>
          <div className="w-12 h-6 md:w-16 md:h-8 bg-black rounded-full shadow-lg"></div>
        </div>

        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent rounded-full animate-pulse"></div>
      </motion.div>
    </div>
  )
}

export default Character3D

