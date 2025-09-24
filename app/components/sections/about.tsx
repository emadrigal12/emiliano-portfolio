'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap } from 'lucide-react'

export function About() {
  const skills = [
    {
      category: "Backend",
      technologies: [".NET (C#)", "Node.js", "Java", "REST APIs", "SQL Databases"],
      icon: <Database className="w-6 h-6" />
    },
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "Bootstrap", "Tailwind CSS", "TypeScript"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      category: "Herramientas",
      technologies: ["Git & GitHub", "Azure", "SCRUM", "JSON/XML", "Softland ERP"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      category: "Desarrollo",
      technologies: ["Clean Code", "Arquitectura", "Testing", "CI/CD", "Agile"],
      icon: <Code className="w-6 h-6" />
    }
  ]

  const experience = [
    {
      role: "Software Developer",
      company: "Produsoft Business Intelligence",
      period: "2021 - Presente",
      description: [
        "Desarrollo de sistemas integrados con Softland ERP utilizando .NET",
        "Creación y gestión de bases de datos SQL",
        "Desarrollo de APIs REST para integración de sistemas",
        "Atención al cliente y soporte técnico"
      ]
    }
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Soy un desarrollador de software altamente proactivo y responsable, con un fuerte 
            compromiso hacia el crecimiento profesional en el desarrollo de software. Mi dedicación 
            y entusiasmo se reflejan en mi historial de trabajo, donde he demostrado habilidades 
            excepcionales en la creación y mantenimiento de soluciones tecnológicas.
          </p>
        </motion.div>

        {/* Experiencia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experiencia Profesional
          </h3>
          {experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Habilidades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Educación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Formación Académica
          </h3>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Ingeniería en Computación
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Universidad Latinoamericana de Ciencia y Tecnología (ULACIT)
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2022 - Presente
              </span>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Técnico Medio en Desarrollo de Software
              </h4>
              <p className="text-green-600 dark:text-green-400 font-medium">
                Colegio Técnico Profesional de Santa Ana
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2019 - 2021
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}