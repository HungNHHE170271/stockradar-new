

import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Stock Radar",
  description: "Đầu tư thông minh với Stock Radar",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


