'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { BorderBeam } from "./borderbeam"



export default function navbar() {
    const pathname = usePathname()
  return (
    <nav className="flex rounded-md bg-zinc-900 top-0 fixed h-28 w-10/12 items-center justify-between font-normal text-sm lg:flex mt-5 z-10">
         <div className="flex items-center justify-center">
            <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
            <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
            <Link className={`link ${pathname === '/more' ? 'active' : ''}`} href="/more">More</Link>
         </div>
         <BorderBeam/>
      </nav>
  )
}
