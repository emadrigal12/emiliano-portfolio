'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Emiliano
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer especializado en{' '}
            <span className="text-blue-600 font-semibold">.NET</span> y{' '}
            <span className="text-green-600 font-semibold">Node.js</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Con más de 3 años de experiencia desarrollando sistemas integrados y APIs REST. 
            Actualmente cursando Ingeniería en Computación en ULACIT.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-16">
          <Link
            href="https://github.com/emadrigal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/emiliano-madrigal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:emadrigalce@gmail.com"
            className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
          >
            <Mail size={24} />
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="#proyectos"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Ver Proyectos
          </Link>
          <Link
            href="#contacto"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-colors"
          >
            Contáctame
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link href="#sobre-mi">
            <ChevronDown className="animate-bounce text-gray-400" size={32} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}