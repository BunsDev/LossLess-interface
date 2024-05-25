'use client';

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';


type Props = {}

const page = (props: Props) => {
  const { address } = useWeb3ModalAccount();
  const [nftsArray, setNftsArray] = useState([]);

  useEffect(() => {
    const fetchUrl = process.env.NEXT_PUBLIC_OPENSEA_BASE_URL;
    axios.get(`${fetchUrl}/${address}/nfts?limit=200`)
      .then(response => {
        setNftsArray(response.data.nfts);
        console.log(response.data.nfts)
      })
      .catch(error => {
        console.error(error);
      });
  }, [address]);

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-[#030E19]/70">
      <h1 className="text-3xl font-bold mb-6 text-[#C9E4CA]">Create New Auction</h1>
      <Dialog>

        <form className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="title" className='text-[#C9E4CA]'>Auction Title</Label>
            <Input id="title" placeholder="Enter auction title" className='bg-transparent text-[#C9E4CA]' />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className='text-[#C9E4CA]'>Description</Label>
            <Textarea className="min-h-[120px] bg-transparent text-[#C9E4CA]" id="description" placeholder="Enter auction description" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="startingPrice" className='text-[#C9E4CA]'>Starting Price</Label>
              <Input id="startingPrice" placeholder="Enter starting price" type="number" className='bg-transparent text-[#C9E4CA]' />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration" className='text-[#C9E4CA]'>Category</Label>
              <Select >
                <SelectTrigger className="bg-transparent text-[#C9E4CA]">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Art</SelectItem>
                  <SelectItem value="3">Realword Assets</SelectItem>
                  <SelectItem value="7">Vintage</SelectItem>
                  <SelectItem value="14">NFTs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid gap-2">
              <Label htmlFor="startDate" className='text-[#C9E4CA]'>Start Date</Label>
              <Input id="startingPrice" type="datetime-local" className='bg-transparent text-[#C9E4CA]' />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration" className='text-[#C9E4CA]'>End Date</Label>
              <Input id="endDate" type="datetime-local" className='bg-transparent text-[#C9E4CA]' />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#C9E4CA] dark:text-gray-300">Auction NFT Image</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label
                    className="relative cursor-pointer bg-[#C9E4CA] rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary text-[#C9E4CA] p-1"
                    htmlFor="file-upload"
                  >
                    <DialogTrigger >Upload a file</DialogTrigger>
                  </label>
                  <p className="pl-1 text-[#C9E4CA]">pick any NFT</p>
                </div>
                <p className="text-xs text-[#C9E4CA]">You have existing in your address</p>
              </div>
            </div>
          </div>
          <DialogContent className='max-h-96'>
            <DialogTitle>Pick NFT to Auction</DialogTitle>
            <DialogDescription className='overflow-scroll'>
              {nftsArray.length > 0 ? (
                nftsArray.map((nft, index) => (
                  <div className="grid gap-4 p-4" key={index}>
                    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                      <img
                        alt="NFT image"
                        className="aspect-square rounded-lg object-cover"
                        height={70}
                        src={nft.image_url ? nft.image_url : ""}
                        width={70}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{nft.name}</h4>
                        <p>{nft.description}</p>
                        <div className="flex items-center justify-end">
                          <Button size="sm" variant="ghost">
                            Select
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>You do not have any NFT to auction</p>
              )}
            </DialogDescription>
          </DialogContent>
          <div className="flex justify-end">
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              Create Auction
            </button>
          </div>
        </form>
      </Dialog>

    </div>
  )
}

export default page