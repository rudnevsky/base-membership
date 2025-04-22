import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base Membership',
  description: 'Guide to become eligible for posting in the /base channel on Farcaster',
  openGraph: {
    title: 'Base Membership',
    description: 'Guide to become eligible for posting in the /base channel on Farcaster',
    images: ['/Base_Symbol_Blue.svg'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/Base_Symbol_Blue.svg',
    'fc:frame:button:1': 'Get Started',
    'fc:frame:post_url': process.env.NEXT_PUBLIC_FRAME_POST_URL || 'https://base-membership.vercel.app/api/frame',
  },
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