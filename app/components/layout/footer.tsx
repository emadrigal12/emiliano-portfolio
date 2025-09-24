import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información Personal */}
          <div>
            <h3 className="text-xl font-bold mb-4">Emiliano Madrigal</h3>
            <p className="text-gray-400 mb-4">
              Software Developer especializado en desarrollo de sistemas integrados 
              y APIs REST. Comprometido con la excelencia técnica y la innovación.
            </p>
            <p className="text-gray-400">
              Santa Ana, San José, Costa Rica
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto y Redes Sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 mb-4">
              <a
                href="mailto:emadrigalce@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>emadrigalce@gmail.com</span>
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/emadrigal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/emiliano-madrigal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Emiliano Madrigal. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-2 sm:mt-0">
            Hecho con <Heart className="w-4 h-4 mx-1 text-red-500" /> y Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}