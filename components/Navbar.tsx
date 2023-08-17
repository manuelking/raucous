import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="w-full md:flex hidden flex-col bg-black px-24 py-12 relative">
      <div className="z-10 flex items-start justify-start">
        <ul className="absolute top-15 left-12 flex xl:flex-row flex-col gap-y-4 gap-x-14 text-neutral-400">
          <li>Projects</li>
          <li>What we do</li>
          <li>What us?</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* nav menu */}
      {/* <div>
        <Image
          src={toggleNav ? '/close-x.png' : '/circle-menu.png'}
          alt="Menu Icon"
          width={50}
          height={50}
          onClick={() => settoggleNav((prev) => !prev)}
        />
      </div> */}
    </div>
  )
}

export default Navbar
