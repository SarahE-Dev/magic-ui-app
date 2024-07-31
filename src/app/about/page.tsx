'use client'
import RetroGrid from '@/components/retrogrid'
import { BorderBeam } from '@/components/borderbeam'
import { useState } from 'react'
import SparklesText from '@/components/sparklestext'
const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY

export default function page() {
    console.log(NASA_API_KEY)
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded bg-background md:shadow-xl">
        <div className='relative flex h-full w-8/12 mt-20 flex-col items-center justify-center rounded-xl bg-gradient-to-b from-zinc-200 to-transparent'>
         <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
         SPACE
      </span>
      <SparklesText className="ml-3" text="NASA" colors={{ first: "#ffd319", second: "#ff2975" }} />
      <RetroGrid className="absolute inset-0 z-0" />
      <BorderBeam className="absolute inset-0 z-10" />
        </div>
      
    </div>
  )
}
