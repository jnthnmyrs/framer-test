import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fun Game Thing',
  description: 'Spend a few minutes clicking on a square.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">

      <body className='bg-stone-900'>
        <div className={inter.className}>

          <Toaster />
          <div className=' w-[100dvw] h-[100dvh] bg-stone-900'>

            {children}

          </div>
        </div>
      </body>
    </html>
  )
}
