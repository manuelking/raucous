import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="w-full flex flex-col bg-black px-24 py-12 relative">
      <ul className="flex flex-row space-x-24 z-10">
        <li>
          <Link href="#services">Why Us?</Link>
        </li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className="absolute z-0 right-48 top-0">
        <Image src="/px-redblue.jpeg" alt="Bg" width={550} height={500} />
      </div>
    </div>
  )
}

export default Navbar
