import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '/base membership',
  description: 'Become a member of the /base channel on Farcaster',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: {
    icon: '/Base_Symbol_Blue.svg',
  },
  openGraph: {
    title: '/base membership',
    description: 'Become a member of the /base channel on Farcaster',
    images: ['/Base_Symbol_Blue.svg'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/Base_Symbol_Blue.svg',
    'fc:frame:button:1': 'My Builder Score',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': 'https://app.talentprotocol.com',
    'fc:frame:button:2': 'Follow /base',
    'fc:frame:button:2:action': 'link',
    'fc:frame:button:2:target': 'https://warpcast.com/~/channel/base',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white">
        {children}
      </body>
    </html>
  )
} 