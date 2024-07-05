import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageTransition from './components/PageTransition'
import ClientWrapper from './components/ClientWrapper'
import ParticleCursor from './components/ParticleCursor'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="bg-gradient-to-b from-black via-blue-900 to-black">
      <body 
        className={`${inter.className} text-white bg-gradient-to-b from-black via-blue-900 to-black min-h-screen`}>
        <ClientWrapper>
          <PageTransition>
            <ParticleCursor/>
            <div className="relative z-10">
              {children}
            </div>
          </PageTransition>
        </ClientWrapper>
      </body>
    </html>
  )
}
