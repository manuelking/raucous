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
      {/* BLURB */}
      <Blurb />
      {/* SERVICES */}
      <Services />
      {/* GAP */}
      <div className="p-36" />
      {/* EXPERIENCE */}
      <Experience />
      {/* CONTACT */}
      <Contact />
      {/* Footer */}
      <Footer />
    </main>
  )
}
