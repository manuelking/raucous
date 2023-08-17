import Image from 'next/image'
import React from 'react'

function Experience() {
  return (
    <div className="w-full flex flex-col bg-black sm:px-24 px-12 py-36 pb-24 relative">
      <div className="absolute top-12 md:left-24 left-10">
        <p className="max-w-[100px] sd:text-[12px] text-[10px] text-neutral-400">
          Our expert team transform your vision into a captivating reality
        </p>
      </div>
      <div className="flex items-center justify-center w-full z-10">
        <p className="font-medium sd:text-[44px] ss:text-[34px] text-[20px] text-center max-w-[1000px]">
          From visionary designers to talented programmers, we have it all. Our
          collective experience is a powerhouse of innovation and
          problem-solving, ensuring that your project is in the hands of
          dedicated individuals who are passionate about turning visions into
          reality.
        </p>
      </div>
      <div className="absolute bottom-0 md:right-24 right-10">
        <Image src="/tag.svg" alt="Bg" width={70} height={70} />
      </div>
    </div>
  )
}

export default Experience
