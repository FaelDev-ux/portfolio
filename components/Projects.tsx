'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de e-commerce com sistema de pagamento, carrinho de compras e painel administrativo.',
      image: '🛒',
      technologies: [SiNextdotjs, SiReact, SiTypescript, SiTailwindcss],
      github: '#',
      demo: '#',
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema completo de gestão empresarial com dashboard interativo, relatórios e análises em tempo real.',
      image: '📊',
      technologies: [SiReact, SiTypescript, SiTailwindcss],
      github: '#',
      demo: '#',
    },
    {
      title: 'App de Produtividade',
      description: 'Aplicativo web para gerenciamento de tarefas e projetos com colaboração em tempo real.',
      image: '✅',
      technologies: [SiNextdotjs, SiReact, SiTypescript],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfólio moderno e responsivo com animações suaves e design elegante.',
      image: '🎨',
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      github: '#',
      demo: '#',
    },
  ]

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
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-black mx-auto mb-6 md:mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Projetos que transformam ideias em realidade
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-white/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-4 md:p-6">
                <div className="text-5xl md:text-6xl mb-4">{project.image}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex items-center space-x-3 mb-6">
                  {project.technologies.map((Tech, techIndex) => (
                    <Tech
                      key={techIndex}
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <HiCode className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <HiExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

