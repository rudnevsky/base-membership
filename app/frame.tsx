import { FrameConfig } from '@farcaster/frame-sdk'

export const frameConfig: FrameConfig = {
  frameUrl: process.env.NEXT_PUBLIC_FRAME_URL || 'https://base-membership.vercel.app',
  frameTitle: 'Base Membership',
  frameDescription: 'Guide to become eligible for posting in the /base channel on Farcaster',
  frameImage: '/Base_Symbol_Blue.svg',
  frameButton: 'Get Started',
  framePostUrl: process.env.NEXT_PUBLIC_FRAME_POST_URL || 'https://base-membership.vercel.app/api/frame',
} 