import Image from 'next/image'
import React from 'react'

function Blurb() {
  return (
    <div className="w-full flex flex-row justify-between bg-black px-24 py-12 relative">
      <div className="absolute top-0">
        <p className="max-w-[100px] text-[12px] text-neutral-400">
          Are you ready to take your online presence to new heights?
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <p className="font-medium text-[44px] text-center max-w-[1000px]">
          We combine innovation and expertise to bring your vision to life.
          Embrace captivating design, seamless functionality, and unmatched user
          experience. Stand out, captivate, and ignite success today!
        </p>
      </div>
      <div className="absolute bottom-0 right-24">
        <Image src="/arrdl.svg" alt="Bg" width={70} height={70} />
      </div>
      {/* <div className="absolute">
        <p className="max-w-[100px] text-[12px] text-neutral-400">
          Are you ready to take your online presence to new heights?
        </p>
      </div>
      <div className="flex justify-center items-center w-full z-10">
        <p className="font-medium text-[44px] text-center max-w-[1000px]">
          We combine innovation and expertise to bring your vision to life.
          Embrace captivating design, seamless functionality, and unmatched user
          experience. Stand out, captivate, and ignite success today!
        </p>
      </div> */}
      {/* <div className="absolute z-0 right-10 top-52">
        <Image src="/px-redblue.jpeg" alt="Bg" width={500} height={100} />
      </div> */}
    </div>
  )
}

export default Blurb
