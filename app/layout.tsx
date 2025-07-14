import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import './global.css'

export const metadata: Metadata = {
  title: 'blog | geoochi',
  description: "This is geoochi's blog",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
