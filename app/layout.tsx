import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Base Membership',
  description: 'Guide to become eligible for posting in the /base channel on Farcaster',
  metadataBase: new URL('https://base-membership.vercel.app'),
  openGraph: {
    title: 'Base Membership',
    description: 'Guide to become eligible for posting in the /base channel on Farcaster',
    images: ['/Base_Symbol_Blue.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <script type="module" src="https://esm.sh/@farcaster/frame-sdk" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 