import Banner from '@/components/Banner'
import Blurb from '@/components/Blurb'
import Contact from '@/components/Contact'
import Contact2 from '@/components/Contact2'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
      className="flex bg-fixed bg-cover bg-origin min-h-screen flex-col items-center justify-between"
    >
      {/* NAVBAR */}
      <Navbar />
      {/* HERO BANNER */}
      <Banner />
      <div
        className="absolute z-0 sm:right-48 right-10 top-0 mx-auto px-20"
        style={{ minWidth: '550px' }}
      >
        <Image
          src="/px-redblue.jpeg"
          alt="Bg"
          width={550}
          height={500}
          className="w-full"
        />
      </div>

      {/* BLURB -responsive*/}
      <Blurb />
      {/* SERVICES -responsive(check drop arrows resizing) */}
      <Services />
      {/* GAP */}
      <div className="p-36" />
      {/* EXPERIENCE -responsive */}
      <Experience />
      {/* CONTACT */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  )
}
