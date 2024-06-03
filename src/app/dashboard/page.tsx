"use client"

import React, { useEffect, useState } from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Link from 'next/link'
import { useGetUserRegistrationStatus } from '@/hooks/useGetUserRegisterationStatus'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import { useGetAllAuction } from '@/hooks/useGetAllAuctions'

type Props = {}

const Page = (props: Props) => {
  const { address } = useWeb3ModalAccount()
  const [userRegistered, setUserRegistered] = useState<boolean>(false)
  const isRegisterUser = useGetUserRegistrationStatus(address)

  const [auctions, setAuctions] = useState<any>([])

  const allAuctions = useGetAllAuction()

  useEffect(() => {
    setUserRegistered(isRegisterUser.data)

    setAuctions(allAuctions.data)

  }, [])


  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Auctions</CardTitle>
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">in the next days</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Auctions</CardTitle>
            <GavelIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">on your assets</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Auctions Participated</CardTitle>
            <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total auction participated in </p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Auctions won</CardTitle>
            <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total auctions won</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Auctions Created</CardTitle>
            <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total auction Created</p>
          </CardContent>
        </Card>
        <Card className='bg-[#C9E4CA]'>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Auctions Sales</CardTitle>
            <TrendingUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Total auction sales</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className='bg-[#C9E4CA]'>
          {auctions?.length > 0 && auctions.map((auction: any, index: number) => {
            return (<Table key={auction.auctionId}>
              <TableHeader>
                <TableRow>
                  <TableHead>Auction name</TableHead>
                  <TableHead>Starting Bid</TableHead>
                  <TableHead className="text-right">Current Bid</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>

                <TableRow key={auction.auctionId}>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/explore-auctions/${auction.auctionId}`} className="mt-4 text-sm hover:underline" >
                      {auction.name}
                    </Link>
                  </TableCell>
                  <TableCell>{auction.startingBid}</TableCell>
                  <TableCell className="text-right">{auction.currentBid}</TableCell>
                </TableRow>
              </TableBody>
            </Table>)
          })}
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