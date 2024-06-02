"use client"

import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from 'next/link'
import { useGetUserRegistrationStatus } from '@/hooks/useGetUserRegisterationStatus'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

type Props = {}

const Page = (props: Props) => {
  const {address} = useWeb3ModalAccount()
  const isRegisterUser = useGetUserRegistrationStatus(address)
  console.log(isRegisterUser)


  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Auctions</CardTitle>
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">in the next 7 days</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Bids</CardTitle>
            <GavelIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">on your assets</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Recent Sales</CardTitle>
            <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$125,345</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">in the last 30 days</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Highest Bid</CardTitle>
            <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,500</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">on a rare painting</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className='bg-[#C9E4CA]'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Auction</TableHead>
                <TableHead>Bids</TableHead>
                <TableHead>Ends In</TableHead>
                <TableHead className="text-right">Current Bid</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="/dashboard/explore-auctions/1">
                    Vintage Typewriter
                  </Link>
                </TableCell>
                <TableCell>42</TableCell>
                <TableCell>2 days</TableCell>
                <TableCell className="text-right">$850</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="/dashboard/explore-auctions/1">
                    Antique Pocket Watch
                  </Link>
                </TableCell>
                <TableCell>19</TableCell>
                <TableCell>5 days</TableCell>
                <TableCell className="text-right">$1,200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="/dashboard/explore-auctions/1">
                    Rare Comic Book
                  </Link>
                </TableCell>
                <TableCell>68</TableCell>
                <TableCell>1 week</TableCell>
                <TableCell className="text-right">$3,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="/dashboard/explore-auctions/1">
                    Classic Car
                  </Link>
                </TableCell>
                <TableCell>24</TableCell>
                <TableCell>10 days</TableCell>
                <TableCell className="text-right">$45,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Link className="hover:underline" href="/dashboard/explore-auctions/1">
                    Vintage Vinyl Records
                  </Link>
                </TableCell>
                <TableCell>31</TableCell>
                <TableCell>2 weeks</TableCell>
                <TableCell className="text-right">$750</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  )
}

export default Page

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
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

function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}