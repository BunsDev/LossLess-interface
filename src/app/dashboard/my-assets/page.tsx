import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-4 py-8 md:py-6">
    <div className="grid gap-6 md:gap-8">
      <div className="space-y-2">
        <h1 className="text-2xl md:text-5xl font-bold text-[#C9E4CA]">Your Auction Assets</h1>
        <p className="text-[#C9E4CA] dark:text-gray-400 text-lg">
          View and manage all the assets you've purchased at auctions.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md bg-[#C9E4CA]"
            placeholder="Search assets..."
            type="search"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline" className='bg-[#C9E4CA]'>
              <FilterIcon className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="date">
              <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="price">Price</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="category">Category</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Direction</DropdownMenuLabel>
            <DropdownMenuRadioGroup value="asc">
              <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc1.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Vintage Typewriter</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 05/18/2024</span>
              <span>$250</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc1.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Antique Pocket Watch</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 04/22/2024</span>
              <span>$150</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc2.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Vintage Leather Suitcase</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 03/15/2024</span>
              <span>$300</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc3.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Antique Brass Telescope</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 02/28/2024</span>
              <span>$400</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc4.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Vintage Gramophone</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 01/12/2024</span>
              <span>$500</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Asset Image"
              className="w-full h-48 object-cover"
              height={300}
              src="/images/auc5.jpeg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width={400}
            />
          </Link>
          <div className="p-4">
            <Link className="block" href="#">
              <h3 className="text-lg font-semibold truncate">Antique Brass Compass</h3>
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Auction: 12/05/2023</span>
              <span>$150</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default page

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
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