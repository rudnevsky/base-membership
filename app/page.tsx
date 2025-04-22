'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { sdk } from '@farcaster/frame-sdk'

export default function Home() {
  useEffect(() => {
    // Call ready when the component is mounted and content is ready
    sdk.actions.ready()
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-full max-w-md mx-auto px-4 py-4">
      <header className="flex justify-center items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              alt="Base Protocol"
              src="/Base_Symbol_Blue.svg"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-lg font-semibold">/base membership</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold mb-3">How to post in /base</h2>
          <p className="text-gray-600 mb-3">
            Only members can post in the /base channel. This helps prevent spam and low-quality interactions.
          </p>
          <p className="text-gray-600 mb-4">
            To become a member and get posting access, follow the steps below:
          </p>

          <ol className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-sm font-medium">1</span>
              <Link 
                href="https://www.base.org/names"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Own a Basename
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-sm font-medium">2</span>
              <Link 
                href="https://docs.talentprotocol.com/docs/protocol-concepts/human-checkmark"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Get your Human Checkmark
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-sm font-medium">3</span>
              <Link 
                href="https://app.talentprotocol.com/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Increase your Builder Score to ≥ 100
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-sm font-medium">4</span>
              <Link 
                href="https://warpcast.com/~/channel/base"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Follow /base channel
              </Link>
            </li>
          </ol>

          <p className="text-sm text-gray-600 mt-4">
            Invitations to become a channel member are automatically sent once you've completed all the steps above.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link 
            href="https://app.talentprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              My Builder Score
            </button>
          </Link>
          <Link 
            href="https://warpcast.com/~/channel/base"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Follow /base
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
} 