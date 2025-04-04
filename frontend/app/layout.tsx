import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

// Font configuration
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'SKILL BRIDGE | Domain-Based Learning Platform',
  description: 'SKILL BRIDGE is an innovative domain-based learning platform bridging the skill gap in education through personalized, industry-aligned learning journeys.',
  keywords: 'education, skill development, domain-based learning, industry training, personalized learning, India education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white text-dark-900`}>
        {children}
      </body>
    </html>
  )
}
