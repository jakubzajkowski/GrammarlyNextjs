'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css';
import './config.css'
import Nav from "./components/Nav"
import Footer from "./components/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grammarly',
  description: 'Grammarly for writing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </head>
      <body className={inter.className}>
          <Nav />
            {children}
          <Footer />
      </body>
    </html>
  )
}
