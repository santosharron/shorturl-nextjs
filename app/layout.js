import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shortener',
  description: 'Shortern the link using shortener.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        {children}
        <Toaster />
        </body>
    </html>
  )
}
