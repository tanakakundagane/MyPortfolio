// import './globals.css'
// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import StarryBackground from './components/StarryBackground'
// import PageTransition from './components/PageTransition'
// import AudioPlayer from './components/AudioPlayer'
// import ClientWrapper from './components/ClientWrapper'



// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'My Portfolio',
//   description: 'Welcome to my portfolio website',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="ja" className="bg-gradient-light dark:bg-gradient-dark">
//       <body 
//         className={`${inter.className}  bg-gradient-to-b from-blue-100 via-purple-300 to-blue-100 min-h-screen`}>
//           <ClientWrapper>
//             <PageTransition>
//                 <div className="relative z-10">
//                   {children}
//                 </div>
//             </PageTransition>
//           </ClientWrapper>
//       </body>
//     </html>
//   )
// }

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageTransition from './components/PageTransition'
import AudioPlayer from './components/AudioPlayer'
import ClientWrapper from './components/ClientWrapper'

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
    <html lang="ja" className="bg-gradient-light dark:bg-gradient-dark">
      <body 
        className={`${inter.className} bg-gradient-to-b from-blue-100 via-purple-300 to-blue-100 min-h-screen`}>
        <ClientWrapper>
          <PageTransition>
            <div className="relative z-10">
              {children}
            </div>
          </PageTransition>
        </ClientWrapper>
      </body>
    </html>
  )
}
