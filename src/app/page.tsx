import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Services from '@/components/Services'
import Stack from '@/components/Stack'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Services />
      <Stack />
      {/* <Projects /> */}
      <FAQ />
      <Contact />
    </div>
  )
}
