"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gluten } from "next/font/google"
import ConnectButton from "@/hooks/useConnection"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { useRouter } from "next/navigation"

const gluten = Gluten({ subsets: ["latin"] });


export default function Component({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const {isConnected} = useWeb3ModalAccount()
  if (!isConnected) {
    router.push('/');
  }
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r border-[#C9E4CA]/50 bg-[#030E19]/70 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b border-[#C9E4CA]/50  px-6">
            <Link className={`text-xl font-semibold text-[#C9E4CA] lg:text-3xl mt-2 ${gluten.className}`} href="/">
              LossLess
            </Link>
            <Button className="ml-auto h-8 w-8 bg-[#C9E4CA]" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
            <Link
                className="flex items-center text-[#C9E4CA] gap-3 rounded-lg hover:bg-gray-100 px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard"
              >
                <LayoutGridIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center text-[#C9E4CA] gap-3 rounded-lg hover:bg-gray-100 px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/explore-auctions"
              >
                <CompassIcon className="h-4 w-4" />
                Explore Auctions
              </Link>
              {/* <Link
                className="flex items-center text-[#C9E4CA] gap-3 rounded-lg hover:bg-gray-100 px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/my-auctions"
              >
                <BriefcaseIcon className="h-4 w-4" />
                My Auctions
              </Link> */}
              <Link
                className="flex items-center text-[#C9E4CA] gap-3 rounded-lg hover:bg-gray-100 px-3 py-2  transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/dashboard/my-assets"
              >
                <BoxIcon className="h-4 w-4" />
                My Assets
              </Link>
              <Link
                className="flex items-center text-[#C9E4CA] gap-3 rounded-lg hover:bg-gray-100 px-3 py-2  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/dashboard/create-auction"
              >
                <PlusIcon className="h-4 w-4" />
                Create Auction
              </Link>
              
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b border-[#C9E4CA]/50 bg-[#030E19]/70 px-6 dark:bg-gray-800/40">
          <Link className={`text-xl font-semibold text-[#C9E4CA] lg:text-3xl lg:hidden mt-2 ${gluten.className}`} href="/">
            LossLess
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-[#111] dark:text-gray-400" />
                <Input
                  className="w-full bg-[#C9E4CA] shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search auctions..."
                  type="search"
                />
              </div>
            </form>
          </div>

          <ConnectButton />

        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function BoxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function GavelIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
      <path d="m16 16 6-6" />
      <path d="m8 8 6-6" />
      <path d="m9 7 8 8" />
      <path d="m21 11-8-8" />
    </svg>
  )
}


function LayoutGridIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
