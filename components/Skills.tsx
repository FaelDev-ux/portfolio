'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'React', icon: SiReact, level: 95, color: 'text-white' },
    { name: 'Next.js', icon: SiNextdotjs, level: 55, color: 'text-white' },
    { name: 'JavaScript', icon: SiJavascript, level: 90, color: 'text-white' },
    { name: 'HTML5', icon: SiHtml5, level: 95, color: 'text-white' },
    { name: 'CSS3', icon: SiCss3, level: 95, color: 'text-white' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 55, color: 'text-white' },
    { name: 'Git', icon: SiGit, level: 85, color: 'text-white' },
    { name: 'Figma', icon: SiFigma, level: 80, color: 'text-white' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades</span> Front End
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-black mx-auto mb-6 md:mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Tecnologias que utilizo para criar interfaces modernas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 md:p-6 hover:border-white/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <skill.icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-white font-semibold text-center">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-white via-gray-400 to-black rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

