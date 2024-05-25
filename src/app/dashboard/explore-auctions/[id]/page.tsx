import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

type Props = {}

const Page = (props: Props) => {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
                <div className='flex flex-col gap-6'>
                    <Image
                        alt="Auction Item"
                        className="w-full rounded-lg object-cover"
                        height={200}
                        src="/images/auc1.jpeg"
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
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="bid-amount">Bid Amount</Label>
                                        <Input id="bid-amount" min="1250" 
                                        placeholder="Enter your bid" step="50" type="number" />
                                    </div>
                                    <Button type="submit">Place Bid</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="grid gap-6 bg-[#030E19]/70 p-4">
                    <div>
                        <h1 className="text-3xl font-bold text-[#C9E4CA]">Vintage Leather Armchair</h1>
                        <p className=" text-[#C9E4CA] text-lg">
                            A beautifully crafted vintage leather armchair in excellent condition. This piece would be a stunning
                            addition to any living room or study.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <span className=" text-[#C9E4CA]">Current Bid:</span>
                            <span className="text-2xl font-bold text-[#C9E4CA]">$1,250</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-[#C9E4CA]">Time Remaining:</span>
                            <span className="text-2xl font-bold text-[#C9E4CA]">2d 12h 34m</span>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <h2 className="text-lg font-bold text-[#C9E4CA]">Bid History</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='text-[#C9E4CA]'>Bidder</TableHead>
                                        <TableHead className='text-[#C9E4CA]'>Bid Amount</TableHead>
                                        <TableHead className='text-[#C9E4CA]'>Time</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className='text-[#C9E4CA]'>jsmith</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>$1,200</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>2 days ago</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='text-[#C9E4CA]'>emiller</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>$1,150</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>3 days ago</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='text-[#C9E4CA]'>kbrown</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>$1,100</TableCell>
                                        <TableCell className='text-[#C9E4CA]'>4 days ago</TableCell>
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