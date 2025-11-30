'use client'

import { motion } from 'framer-motion'
import { HiArrowDown, HiCode } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 border-b border-white/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[85vh]"
        >
          {/* Texto */}
          <motion.div variants={itemVariants} className="text-center md:text-left z-10">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
            >
              <span className="block text-white mb-2">Olá, eu sou</span>
              <span className="block gradient-text">Rubens Rafael</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Desenvolvedor Front End especializado em criar interfaces modernas e experiências digitais excepcionais
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-white to-gray-400 text-black rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                Ver Projetos
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-lg font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
              >
                Entre em Contato
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center md:justify-start items-center space-x-6 text-gray-400"
            >
              <motion.div
                whileHover={{ scale: 1.2, color: '#ffffff' }}
                className="flex items-center space-x-2"
              >
                <HiCode className="w-5 h-5 md:w-6 md:h-6" />
                <span className="text-sm md:text-base">Front End</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Robô 3D Spline */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center h-[85vh] min-h-[600px] w-full"
          >
            <div className="relative w-full h-full">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
              />
              <div className="w-full h-full [&>canvas]:!bg-transparent">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

