import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat, Playfair_Display as PlayfairDisplay } from 'next/font/google'
import Script from 'next/script'

// Font configuration for more elegant, refined typography
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const playfairDisplay = PlayfairDisplay({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'SKILL BRIDGE | Transforming Education with Domain-Based Learning',
  description: 'SKILL BRIDGE offers cohort-based, domain-focused learning pathways that bridge the skill gap between education and industry demands through personalized, incremental skill development.',
  keywords: 'education, skill development, domain-based learning, industry training, personalized learning, cohort learning, India education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Script to handle GitHub Pages routing */}
        <Script id="github-pages-routing" strategy="beforeInteractive">
          {`
            // Redirect in the case of GitHub Pages
            (function() {
              // If we're running in the browser
              if (typeof window !== 'undefined') {
                // Check if we need to redirect
                const { pathname, search, hash } = window.location;
                const params = new URLSearchParams(search);
                
                // If there's a path parameter, handle the redirect
                if (params.has('p')) {
                  const redirectPath = params.get('p');
                  params.delete('p');
                  
                  // Create the new URL maintaining any other query parameters
                  const newSearch = params.toString();
                  const newPathname = redirectPath || '';
                  let newUrl = newPathname;
                  
                  if (newSearch) newUrl += '?' + newSearch;
                  if (hash) newUrl += hash;
                  
                  // Replace the current state instead of adding a new history entry
                  window.history.replaceState(null, '', newUrl);
                }
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${playfairDisplay.variable} font-sans bg-obsidian-900 text-white`}>
        {children}
      </body>
    </html>
  )
}