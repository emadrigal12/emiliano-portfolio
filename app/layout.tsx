import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { Navbar } from './components/layout/navbar'
import { Footer } from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emiliano Madrigal - Software Developer',
  description: 'Desarrollador de software con experiencia en .NET, Node.js y tecnologías modernas. Especializado en desarrollo de sistemas integrados y APIs REST.',
  keywords: 'software developer, .NET, Node.js, Java, REST API, Costa Rica, Santa Ana',
  authors: [{ name: 'Emiliano Madrigal' }],
  openGraph: {
    title: 'Emiliano Madrigal - Software Developer',
    description: 'Portfolio profesional de Emiliano Madrigal',
    url: 'https://emiliano-madrigal.dev',
    siteName: 'Emiliano Madrigal Portfolio',
    locale: 'es_CR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}