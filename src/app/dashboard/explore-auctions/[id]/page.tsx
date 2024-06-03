"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useGetAuctionById } from '@/hooks/useGetAuctionById'
import { SubmitHandler, useForm } from 'react-hook-form';
import { ethers } from 'ethers'
import { usePlaceBid } from '@/hooks/usePlaceBid'
import { useGetAuctionBidder } from '@/hooks/useGetAuctionBidder'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'
import { useClaimAuctionWinnerNFT } from '@/hooks/useClaimAuctionWinnerNFT'
import { useClaimAuctionParticipantNFT } from '@/hooks/useClaimAuctionParticipantNFT'


type Props = {}
type Inputs = {
    bid: string;
}

const Page = (props: Props) => {

    const { address } = useWeb3ModalAccount()

    const params = useParams<{ id: string }>()

    const [auctionDetails, setAuctionDetails] = useState<any>()

    const [auctionParticipants, setAuctionParticpants] = useState<any>()

    const getAuction = useGetAuctionById(Number(params.id))

    const placeBid = usePlaceBid()

    const getParticipants = useGetAuctionBidder(Number(params.id))

    const claimWinner = useClaimAuctionWinnerNFT(Number(params.id))

    const participantNFT = useClaimAuctionParticipantNFT(Number(params.id))



    useEffect(() => {

        setAuctionParticpants(getParticipants.data)

        setAuctionDetails(getAuction.data)

    }, [getAuction.data])

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const placedBid = ethers.parseEther(data.bid)

        console.log(placedBid)

        const bid = placeBid(Number(placedBid), Number(params.id));

    }

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
                <div className='flex flex-col gap-6'>
                    <img
                        alt="Auction Item"
                        className="w-full rounded-lg object-cover"
                        height={200}
                        src={auctionDetails?.imageURI}
                        style={{
                            aspectRatio: "200/100",
                            objectFit: "cover",
                        }}
                        width={200}
                    />
                    <div className="grid gap-4">
                        <Card className='bg-[#C9E4CA]'>
                            <CardHeader>
                                <CardTitle>Place a Bid</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="bid-amount">Bid Amount</Label>
                                        <Input
                                            id="bid-amount"
                                            defaultValue={""}
                                            {...register("bid")}
                                            min={auctionDetails?.minValidBid ? Number(ethers.formatEther(auctionDetails.minValidBid)) : 0}
                                            placeholder="Enter your bid"
                                            step="0.001"
                                            type="number"
                                        />                                    </div>
                                    <Button type="submit">Place Bid</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid gap-6 bg-[#030E19]/70 p-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[#C9E4CA]">{auctionDetails?.name}</h1>
                        <p className=" text-[#C9E4CA] text-lg">
                            {auctionDetails?.description}
                        </p>

                        {
                            auctionDetails?.ended && address === auctionDetails?.higtestBidder &&
                            <div><Button onClick={()=>claimWinner()}>
                                Mint Winner NFT</Button></div>
                        }
                        {
                            auctionDetails?.ended && address !== auctionDetails?.higtestBidder && auctionParticipants?.includes(address) &&
                            <div><Button onClick={()=>participantNFT()}>
                                Mint Participant NFT</Button></div>
                        }

                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <span className=" text-[#C9E4CA]">Current Bid:</span>
                            <span className="text-2xl font-bold text-[#C9E4CA]">{auctionDetails?.currentBid}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#C9E4CA]">Time Remaining:</span>
                            <span className="text-2xl font-bold text-[#C9E4CA]">2d 12h 34m</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <h2 className="text-lg font-bold text-[#C9E4CA]">Bidders</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-[#C9E4CA]'>Participants</TableHead>

                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        {
                                            auctionParticipants?.map((participant: any, index: number) => {
                                                return (
                                                    <TableCell key={index} className='text-[#C9E4CA]'>{participant}</TableCell>
                                                )
                                            })
                                        }

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-[#C9E4CA]">Shipping Details</h2>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-[#C9E4CA]">Estimated Delivery:</span>
                                    <span className="text-[#C9E4CA]">June 15, 2023</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#C9E4CA]">Shipping Method:</span>
                                    <span className="text-[#C9E4CA]">Standard Shipping</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[#C9E4CA]">Shipping Cost:</span>
                                    <span className="text-[#C9E4CA]">$25</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Page