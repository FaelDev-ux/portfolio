'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 50 },
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
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Sobre</span> Mim
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-black mx-auto mb-6 md:mb-8"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto"
        >
          {/* Foto */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-800 flex items-center justify-center">
              
              {/* AQUI a imagem já aparece normalmente */}
              <Image
                src="/foto.png"
                alt="Rubens Rafael"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />

              {/* Fallback opcional (se quiser tirar, pode remover) */}
              <span className="absolute text-black text-3xl md:text-4xl font-bold">
              </span>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div variants={itemVariants} className="text-center md:text-left order-1 md:order-2">
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
              Desenvolvedor Front End especializado em criar interfaces modernas, responsivas e de alta performance.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              Transformo ideias em experiências digitais excepcionais, focando em design limpo, código limpo e resultados que fazem a diferença.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
