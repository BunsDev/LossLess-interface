'use client'

import Link from "next/link"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import Image from "next/image"
import { Gluten } from "next/font/google"
import ConnectButton from "@/hooks/useConnection"
import { useWeb3ModalAccount } from "@web3modal/ethers/react"
import { useRouter } from "next/navigation"

export const gluten = Gluten({ subsets: ["latin"] });


export default function Component() {
  const router = useRouter();
  const {isConnected} = useWeb3ModalAccount()
  if (isConnected) {
    router.push('/dashboard');
  }
 

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className={`text-3xl font-semibold text-[#C9E4CA] lg:text-5xl mt-2 ${gluten.className}`} href="/">
          LossLess
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
         <ConnectButton />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <Image
                alt="Hero"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="650"
                src="/images/hero.jpeg"
                width="1200"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl  text-[#C9E4CA] font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Unique Treasures
                  </h1>
                  <p className="max-w-[600px] text-[#C9E4CA] md:text-xl dark:text-gray-400">
                    Bid on rare and valuable items from around the world. Join our global community of collectors and
                    enthusiasts.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-[#C9E4CA] text-sm font-medium shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Browse Auctions
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 0 bg-white px-8 text-gray-950 text-sm font-medium shadow-sm transition-colors hover:bg-[#C9E4CA] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Sell an Item
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#C9E4CA] dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#C9E4CA] px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Auctions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Discover Unique Treasures</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse our selection of rare and valuable items up for auction. Find the perfect addition to your
                  collection.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc1.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Vintage Typewriter</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $250</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc2.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Antique Vase</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $500</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc3.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Rare Coin Collection</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $1,000</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc4.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Vintage Jewelry Box</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $300</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc5.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Antique Pocket Watch</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $800</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    alt="Auction Item"
                    className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="250"
                    src="/images/auc6.jpeg"
                    width="400"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">Vintage Vinyl Records</h3>
                    <p className="text-gray-500 dark:text-gray-400">Current Bid: $150</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Place Bid</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#C9E4CA]">Browse Auctions</h2>
                <p className="max-w-[600px] text-[#C9E4CA] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Use our search and filters to find the perfect item for your collection.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <Input className="w-full" placeholder="Search auctions..." type="search" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Select>
                    <SelectTrigger className="h-10 w-full sm:w-auto">
                      <span>Category  </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="antiques">Antiques</SelectItem>
                      <SelectItem value="jewelry">Jewelry</SelectItem>
                      <SelectItem value="collectibles">Collectibles</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-10 w-full sm:w-auto">
                      <span>Price Range  </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-100">$0 - $100</SelectItem>
                      <SelectItem value="100-500">$100 - $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-">$1,000+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="h-10 w-full sm:w-auto">
                      <span>Auction Type  </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="live">Live Auction</SelectItem>
                      <SelectItem value="timed">Timed Auction</SelectItem>
                      <SelectItem value="reserve">Reserve Auction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xl text-[#C9E4CA]  dark:text-gray-400">© 2024 LossLess. All rights reserved.</p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-[#C9E4CA] text-lg font-medium hover:underline underline-offset-4" href="#">
            Browse
          </Link>
          <Link className="text-[#C9E4CA] text-lg font-medium hover:underline underline-offset-4" href="#">
            Sell
          </Link>
          <Link className="text-[#C9E4CA] text-lg font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-[#C9E4CA] text-lg font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
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