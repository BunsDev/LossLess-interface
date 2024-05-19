import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-4xl font-bold text-[#C9E4CA]">Explore Auctions</h1>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className='bg-[#C9E4CA]' variant="outline">
              <FilterIcon className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Checkbox id="filter-category" />
              <Label className="pl-2" htmlFor="filter-category">
                Category
              </Label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Checkbox id="filter-price" />
              <Label className="pl-2" htmlFor="filter-price">
                Price
              </Label>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Checkbox id="filter-time" />
              <Label className="pl-2" htmlFor="filter-time">
                Time Remaining
              </Label>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" className='bg-[#C9E4CA]' variant="outline">
              <ListIcon className="mr-2 h-4 w-4" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8}>
            <DropdownMenuLabel>Sort by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RadioGroup value="newest">
                <RadioGroupItem id="sort-newest" value="newest" />
                <Label className="pl-2" htmlFor="sort-newest">
                  Newest
                </Label>
              </RadioGroup>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RadioGroup value="oldest">
                <RadioGroupItem id="sort-oldest" value="oldest" />
                <Label className="pl-2" htmlFor="sort-oldest">
                  Oldest
                </Label>
              </RadioGroup>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RadioGroup value="price-asc">
                <RadioGroupItem id="sort-price-asc" value="price-asc" />
                <Label className="pl-2" htmlFor="sort-price-asc">
                  Price: Low to High
                </Label>
              </RadioGroup>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RadioGroup value="price-desc">
                <RadioGroupItem id="sort-price-desc" value="price-desc" />
                <Label className="pl-2" htmlFor="sort-price-desc">
                  Price: High to Low
                </Label>
              </RadioGroup>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc1.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Vintage Typewriter</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fully restored 1950s typewriter in excellent condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc2.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Antique Pocket Watch</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Beautifully crafted 19th-century pocket watch in working condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc3.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Vintage Record Player</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fully restored 1960s record player with excellent sound quality.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc4.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Antique Vase</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Beautifully crafted 18th-century vase in excellent condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc5.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Vintage Camera</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fully functional 1970s camera in excellent condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc6.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Antique Jewelry Box</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Beautifully crafted 19th-century jewelry box in excellent condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc3.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Vintage Typewriter</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fully restored 1950s typewriter in excellent condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <img
          alt="Auction Item"
          className="h-60 w-full rounded-t-lg object-cover"
          height={300}
          src="/images/auc5.jpeg"
          style={{
            aspectRatio: "400/300",
            objectFit: "cover",
          }}
          width={400}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Antique Pocket Watch</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Beautifully crafted 19th-century pocket watch in working condition.
          </p>
          <Link href={"/dashboard/explore-auctions/1"} className="mt-4 text-sm hover:underline" >
            View Auction
          </Link>
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


function ListIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}