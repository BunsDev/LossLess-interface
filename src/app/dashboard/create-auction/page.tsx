import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-6 md:p-8 bg-[#030E19]/70">
    <h1 className="text-3xl font-bold mb-6 text-[#C9E4CA]">Create New Auction</h1>
    <form className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="title" className='text-[#C9E4CA]'>Auction Title</Label>
        <Input id="title" placeholder="Enter auction title" className='bg-transparent text-[#C9E4CA]'/>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description"  className='text-[#C9E4CA]'>Description</Label>
        <Textarea className="min-h-[120px] bg-transparent text-[#C9E4CA]" id="description" placeholder="Enter auction description" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid gap-2">
          <Label htmlFor="startingPrice" className='text-[#C9E4CA]'>Starting Price</Label>
          <Input id="startingPrice" placeholder="Enter starting price" type="number" className='bg-transparent text-[#C9E4CA]'/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="duration"  className='text-[#C9E4CA]'>Category</Label>
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
          <Label htmlFor="startDate"  className='text-[#C9E4CA]'>Start Date</Label>
        <Input id="startingPrice" type="datetime-local" className='bg-transparent text-[#C9E4CA]'/>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="duration"  className='text-[#C9E4CA]'>End Date</Label>
          <Input id="endDate" type="datetime-local" className='bg-transparent text-[#C9E4CA]' />
        </div>
      </div>
      <div>
          <label className="block text-sm font-medium text-[#C9E4CA] dark:text-gray-300">Auction Image</label>
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
                  <span >Upload a file</span>
                  <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                </label>
                <p className="pl-1 text-[#C9E4CA]">or drag and drop</p>
              </div>
              <p className="text-xs text-[#C9E4CA]">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            type="submit"
          >
            Create Auction
          </button>
        </div>
    </form>
  </div>
  )
}

export default page