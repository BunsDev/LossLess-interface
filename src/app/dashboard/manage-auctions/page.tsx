"use client"

import ModalLoader from '@/components/shared/ModalLoader'
import EmptyPage from '@/components/shared/NoNft'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useCancelAuction } from '@/hooks/useCancelAuction'
import { useGetUserAuctionCreated } from '@/hooks/useGetUserAuctionCreated'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'

type Props = {}

const Page = (props: Props) => {

  const { address } = useWeb3ModalAccount();

  const [auctions, setAuctions] = useState<any>([])

  const [cancelAuction, setCancelAuctionForm] = useState<any>(false)

  const [auctionId, setAuctionId] = useState<number>(0)

  const allAuctions = useGetUserAuctionCreated(`${address}`)

  useEffect(() => {

    setAuctions(allAuctions.data)

  }, [allAuctions.data])

  const cancel = useCancelAuction(auctionId);

  const handleClick = async() =>{
    cancel()
    setCancelAuctionForm(true);
  }

  return (
    <main className="container mx-auto px-4 py-8 md:px-6 lg:px-8">

      <div className="mb-6 flex items-center justify-between">

        <h1 className="text-4xl font-bold text-[#C9E4CA]">Manage Auctions</h1>

      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {auctions.length > 0 ?
          auctions.map((auction: any, index: number) => {
            if(Date.now()/1000 <  auction.startingTime ){
              return (
                <div key={auction.auctionId} className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <img
                    alt="Auction Item"
                    className="h-60 w-full rounded-t-lg object-cover"
                    height={300}
                    src={auction.imageURI}
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Mininum valid bid</h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                     <span className='font-semibold'>Min Valid Bid:</span>  {"     "}
                      {ethers.formatEther(auction.minValidBid)} Avax
                    </p>
                    <Button className="mt-4 text-sm text-white hover:underline" onClick={() =>{ setAuctionId(auction.auctionId);
                      setCancelAuctionForm(true)
                    }}>
                      Cancel auction
                    </Button>
                  </div>
                </div>)
            } else {

            return (
              <div key={auction.auctionId} className="rounded-lg border border-gray-200 bg-[#C9E4CA] shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <img
                  alt="Auction Item"
                  className="h-60 w-full rounded-t-lg object-cover"
                  height={300}
                  src={auction.imageURI}
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{auction.name}</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                   <span className='font-semibold'>Min Valid Bid:</span>  {"     "}
                    {ethers.formatEther(auction.minValidBid)} Avax
                  </p>
                </div>
              </div>)
            }
          })
          : <EmptyPage wording={"No Auction created yet"} />}
      </div>

      {
        cancelAuction && <ModalLoader>
          <form className="bg-[#C9E4CA]  p-6 flex flex-col gap-4 rounded-xl">

            <div className='flex flex-col gap-2'>

              <Label htmlFor="mail" className='text-sm'>Are you sure you want to cancel this auction?</Label>

            </div>

            <div className='flex gap-4'>
              <Button onClick={() => setCancelAuctionForm(false)}>No</Button>

              <Button onClick={() => {
                handleClick()
              }}>Yes</Button>
            </div>

          </form>
        </ModalLoader>
      }
    </main>
  )
}

export default Page