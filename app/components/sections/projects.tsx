'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

// Esta data se moverá a un archivo JSON o CMS
const projects: Project[] = [
  {
    id: "softland-erp-integration",
    title: "Integración Softland ERP",
    description: "Sistema de integración completo con Softland ERP utilizando .NET para automatizar procesos empresariales.",
    longDescription: "Desarrollo de un sistema robusto de integración con Softland ERP que automatiza procesos de facturación, inventario y contabilidad. Implementé APIs REST, manejo de bases de datos SQL Server y interfaces de usuario responsive.",
    technologies: [".NET", "C#", "SQL Server", "REST API", "Bootstrap"],
    image: "/images/projects/erp-integration.jpg",
    githubUrl: "https://github.com/emadrigal/softland-integration",
    featured: true
  },
  {
    id: "inventory-management",
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación web para gestión de inventario con Node.js y React, incluyendo reportes en tiempo real.",
    longDescription: "Sistema completo de gestión de inventario construido con Node.js y React. Incluye funcionalidades de tracking en tiempo real, alertas de stock bajo, generación de reportes y dashboard analítico.",
    technologies: ["Node.js", "React", "MongoDB", "Express", "Chart.js"],
    image: "/images/projects/inventory-system.jpg",
    githubUrl: "https://github.com/emadrigal/inventory-management",
    liveUrl: "https://inventory-demo.emadrigal.dev",
    featured: true
  },
  {
    id: "rest-api-microservices",
    title: "Microservicios REST API",
    description: "Arquitectura de microservicios con Java Spring Boot para manejo de usuarios y autenticación JWT.",
    longDescription: "Diseñé e implementé una arquitectura de microservicios escalable utilizando Java Spring Boot. Incluye servicios de autenticación JWT, gestión de usuarios, y comunicación entre servicios con patrón API Gateway.",
    technologies: ["Java", "Spring Boot", "JWT", "MySQL", "Docker"],
    image: "/images/projects/microservices.jpg",
    githubUrl: "https://github.com/emadrigal/microservices-api",
    featured: false
  }
]

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="proyectos" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo 
            de software, desde sistemas empresariales hasta aplicaciones web modernas.
          </p>
        </motion.div>

        {/* Proyectos Destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
                {/* Placeholder para imagen */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-xl font-semibold">
                    {project.title}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Código</span>
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Ver Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Otros Proyectos */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Otros Proyectos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}