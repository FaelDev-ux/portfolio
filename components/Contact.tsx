'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'rubens.rafael@example.com',
      link: 'mailto:rubens.rafael@example.com',
    },
    {
      icon: HiPhone,
      label: 'Telefone',
      value: '+55 (00) 00000-0000',
      link: 'tel:+5500000000000',
    },
    {
      icon: HiLocationMarker,
      label: 'Localização',
      value: 'Brasil',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: SiGithub,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400',
    },
    {
      icon: SiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      icon: SiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-blue-400',
    },
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
      id="contact"
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
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white via-gray-400 to-black mx-auto mb-6 md:mb-8" />
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
            Vamos conversar sobre seu próximo projeto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-white/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-dark-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-dark-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-white to-gray-400 text-black rounded-lg font-semibold text-base md:text-lg shadow-lg hover:shadow-white/20 transition-all duration-300"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

