import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
    <div className="grid gap-4">
      <Image
        alt="Auction Item"
        className="aspect-[4/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
        height={400}
        src="/images/auc2.jpeg"
        width={600}
      />
      <div>
        <h1 className="text-6xl font-bold text-[#C9E4CA]">Vintage Typewriter</h1>
        <p className="text-[#C9E4CA] mt-2 text-xl">
          This 1950s era typewriter is in excellent condition and fully functional. It features a classic design with
          a sleek metal body and tactile keys.
        </p>
      </div>
    </div>
    <div className="grid gap-6 bg-[#030E19]/70 rounded-xl p-8">
      
      <div className="grid gap-4">
        <div>
          <h2 className="text-3xl font-semibold text-[#C9E4CA]">Auction Details</h2>
          <div className="grid gap-2 mt-2">
            <div className="flex justify-between">
              <span className="text-[#C9E4CA]">Auction End Date:</span>
              <span className='text-[#C9E4CA]'>May 25, 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#C9E4CA]">Winning Bid:</span>
              <span className="font-semibold text-[#C9E4CA]">$250</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#C9E4CA]">Seller:</span>
              <span className='text-[#C9E4CA]'>Vintage Collectibles</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-[#C9E4CA]">Additional Information</h2>
          <div className="grid gap-2 mt-2">
            <div className='text-[#C9E4CA]'>
              <span className="text-[#C9E4CA]">Condition:  </span>
              Excellent{"\n                        "}
            </div>
            <div className='text-[#C9E4CA]'>
              <span className="text-[#C9E4CA]">Dimensions:  </span>
              12&quot; x 8&quot; x 5&quot;{"\n                        "}
            </div>
            <div className='text-[#C9E4CA]'>
              <span className="text-[#C9E4CA]">Weight:  </span>
              8 lbs{"\n                        "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-[#C9E4CA]">Leave Feedback</h2>
        <form className="grid gap-4 mt-2">
          <div className="grid gap-2">
            <Textarea id="feedback" placeholder="Share your thoughts on the auction process and seller" className='bg-[#C9E4CA]' />
          </div>
          <Button type="submit">Submit Feedback</Button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default page