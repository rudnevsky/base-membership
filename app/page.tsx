import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh max-w-3xl mx-auto py-4 px-4">
      <nav className="flex justify-center items-center mb-3 w-full">
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
            <Image
              alt="Base Protocol"
              src="/Base_Symbol_Blue.svg"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="font-semibold text-foreground whitespace-nowrap text-lg">/base membership</h1>
        </div>
      </nav>

      <main className="flex flex-col h-full">
        <div className="rounded-lg border bg-white border-neutral-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2 text-neutral-800">How to post in /base</h2>
            <p className="mb-2 text-neutral-600">
              Only members can post in the /base channel. This helps prevent spam and low-quality interactions.
            </p>
            <p className="mb-5 text-neutral-600">
              To become a member and get posting access, follow the steps below:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-800">1</div>
                <Link 
                  href="https://www.base.org/names"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-600"
                >
                  Own a Basename
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-800">2</div>
                <Link 
                  href="https://docs.talentprotocol.com/docs/protocol-concepts/human-checkmark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-600"
                >
                  Get your Human Checkmark
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-800">3</div>
                <Link 
                  href="https://app.talentprotocol.com/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-600"
                >
                  Increase your Builder Score to ≥ 100
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-800">4</div>
                <Link 
                  href="https://warpcast.com/~/channel/base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-800 hover:text-neutral-600"
                >
                  Follow /base channel
                </Link>
              </li>
            </ul>

            <p className="text-sm text-neutral-600 mt-6">
              Invitations to become a channel member are automatically sent once you've completed all the steps above.
            </p>
          </div>
        </div>

        <div className="grid auto-cols-fr grid-flow-col gap-4 mt-3 w-full">
          <Link 
            href="https://app.talentprotocol.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-white hover:bg-neutral-100 border border-neutral-200 cursor-pointer w-full text-black">
              My Builder Score
            </button>
          </Link>
          <Link 
            href="https://warpcast.com/~/channel/base"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-white hover:bg-neutral-100 border border-neutral-200 cursor-pointer w-full text-black">
              Follow /base
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
} 