'use client';

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useWeb3ModalAccount } from '@web3modal/ethers/react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import ModalLoader from '@/components/shared/ModalLoader';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateAuction } from '@/hooks/useCreateAuction';
import { datetimeToEpochTime } from "datetime-epoch-conversion";
import { ethers } from 'ethers';
import { useApproveAuctionContract } from '@/hooks/useApproveAuctionContract';
import EmptyPage from '@/components/shared/NoNft';


type Props = {}

type Nft = {
  image_url: string;
  name: string;
  description: string;
  contract: string;
  identifier: string;
};

type Inputs = {
  startingBid: string;
  startDate: string;
  endDate: string;
}

const Page = (props: Props) => {
  const { address } = useWeb3ModalAccount();
  const createAuction = useCreateAuction()
  const approve = useApproveAuctionContract()
  const [nftsArray, setNftsArray] = useState<Nft[]>([]);
  const [auctionNFT, setAuctionNFT] = useState<any>({});
  const [auctionForm, setAuctionForm] = useState<boolean>(false)
  const [startTimeValue, setStartTimeValue] = useState<string>()
  const fetchUrl = process.env.NEXT_PUBLIC_OPENSEA_BASE_URL;

  useEffect(() => {

    axios.get(`${fetchUrl}/account/${address}/nfts?limit=200`).then(response => {

      setNftsArray(response.data.nfts);

      console.log(response.data.nfts)

    })
      .catch(error => {

        console.error(error);

      });

  }, [address, auctionForm]);


  const handleAuctionNFT = (contractAddress: string, id: string) => {

    axios.get(`${fetchUrl}/contract/${contractAddress}/nfts/${id}`).then(response => {

      setAuctionNFT(response.data.nft);

      setAuctionForm(true)

    }).catch(error => {

      console.error(error);

    })
  }

  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const startTime = datetimeToEpochTime(data.startDate);

    const endTime = datetimeToEpochTime(data.endDate);

    const startingBid = ethers.parseEther(data.startingBid);

    const tokenId = Number(auctionNFT.identifier);

    const nftContractAddress = ethers.getAddress(auctionNFT.contract);

    const nftImageUrl = auctionNFT.image_url;

    const approval = await approve(nftContractAddress, tokenId);


    console.log(startTime, endTime, startingBid, tokenId, nftContractAddress, nftImageUrl)

    const res: any = await createAuction(startTime, endTime, startingBid, tokenId, nftContractAddress, nftImageUrl)

    setAuctionForm(false)

  }


  return (
    <>
      <h2 className="text-3xl text-[#C9E4CA] font-bold tracking-tighter sm:text-5xl">Create an auction</h2>
      <p className="max-w-[900px] text-[#C9E4CA] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Auction any of the NFT you own so users can place bids and buy from you
      </p>
      {
        nftsArray.length > 0 ?
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {
              nftsArray.map((nft, index) => {
                return (
                  <Card key={index} className='bg-[#C9E4CA]'>
                    <CardHeader>
                      <img
                        alt="Auction Item"
                        className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="250"
                        src={nft.image_url}
                        width="400"
                      />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold">{nft.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{nft.description}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" onClick={() => handleAuctionNFT(nft.contract, nft.identifier)}>Auction NFT</Button>
                    </CardFooter>
                  </Card>
                )
              })
            }

          </div> : <EmptyPage />}
      {
        auctionForm && <ModalLoader>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#C9E4CA]  p-6 flex flex-col gap-4 rounded-xl">
            <div className='flex gap-4'>
              <div className='flex flex-col gap-2'>

                <Label htmlFor="mail" className='text-sm'>Start Date</Label>

                <Input type="datetime-local" defaultValue={""} {...register("startDate")} min={new Date(Date.now()).toISOString().slice(0, 16)} onChange={(e) => setStartTimeValue(e.target.value)} className='bg-transparent border-black' />

              </div>

              <div className='flex flex-col gap-2'>

                <Label htmlFor="mail" className='text-sm'>End Date</Label>

                <Input type="datetime-local" defaultValue={""}  {...register("endDate")} min={startTimeValue} className='bg-transparent border-black' />

              </div>

            </div>

            <div className='flex flex-col gap-2'>

              <Label htmlFor="mail" className='text-sm'>Starting Bid (Avax)</Label>

              <Input type="number" step={0.01} defaultValue={""} placeholder="Enter bid in AVAX" {...register("startingBid")} className='bg-transparent border-black' />

            </div>

            <div className='flex gap-4'>
              <Button onClick={() => setAuctionForm(false)}>Cancel</Button>

              <Button type="submit">Finalize Auction</Button>
            </div>

          </form>
        </ModalLoader>
      }
    </>
  )
}

export default Page