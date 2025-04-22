import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: Request) {
  const body = await req.json()
  
  // Handle frame interactions here
  return NextResponse.json({
    type: 'frame',
    frameUrl: process.env.NEXT_PUBLIC_FRAME_URL || 'https://base-membership.vercel.app',
    frameTitle: 'Base Membership',
    frameDescription: 'Guide to become eligible for posting in the /base channel on Farcaster',
    frameImage: '/Base_Symbol_Blue.svg',
    frameButton: 'Get Started',
  })
} 