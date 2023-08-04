import './globals.css'
import './style.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kathy El Khoury',
  description: 'Kathy El Khoury Portfolio',
  // icons: {
  //   icon: images/favicon.ico
  // }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  )
}
