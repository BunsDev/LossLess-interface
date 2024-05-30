'use client'

import Link from "next/link"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Gluten } from "next/font/google"
import ConnectButton from "@/hooks/useConnection"
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react"
import { useRouter } from "next/navigation"
import { useGetUserRegistrationStatus } from "@/hooks/useGetUserRegisterationStatus"
import { useState, useEffect } from "react"
import ModalLoader from "@/components/shared/ModalLoader"
import { useForm, SubmitHandler } from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRegisterUser } from "@/hooks/useRegisterUser"

const gluten = Gluten({ subsets: ["latin"] });

type Inputs = {
  mail: string
}

export default function Component() {
  const [regForm, setRegForm] = useState<boolean>(false)
  const { address, isConnected } = useWeb3ModalAccount()
  const { open } = useWeb3Modal();
  const router = useRouter();
  const status = useGetUserRegistrationStatus(address);
  const reg = useRegisterUser()

  useEffect(() => {
    if (!isConnected && !status.data) {
      setRegForm(false)
    } else if (isConnected && !status.data) {
      setRegForm(true)
    } else if (isConnected && status.data) {
      router.push('/dashboard');
      setRegForm(false)
    }
  }, [isConnected, status.data, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res:any = await reg(data.mail);
  }
  
  return (
    <>
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

                    <Button
                      onClick={() => open()}
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 0 bg-white px-8 text-gray-950 text-sm font-medium shadow-sm transition-colors hover:bg-[#C9E4CA] hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    >
                      Launch App
                    </Button>
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
                    <Image
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
                    <Image
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
                    <Image
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
                    <Image
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
                    <Image
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
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
          <p className="text-xl text-[#C9E4CA]  dark:text-gray-400">© 2024 LossLess. All rights reserved.</p>
        </footer>
      </div>
      {regForm && <ModalLoader>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-[#C9E4CA]  w-[500px] h-[200px] p-6 flex flex-col gap-4 rounded-xl">
          <Label htmlFor="mail" className='text-2xl'>Enter Your Email</Label>
          <Input type="email" defaultValue={""} placeholder="example@gmail.com" {...register("mail")} className='bg-transparent border-black' />
          {errors.mail && <span className="text-red">This field is required</span>}
          <Button type="submit" value="" >Register mail</Button>
        </form>
      </ModalLoader>}
    </>
  )
}
