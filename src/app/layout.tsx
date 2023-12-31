import './globals.css'
import { Inter } from 'next/font/google'
import 'lib-react-ui/dist/index.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lib React UI Test',
  description: 'Test application using lib-react-ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
