'use client'

import Header from '@/components/Header'
import HeroCarousel from '@/components/HeroCarousel'
import FeaturedRings from '@/components/FeaturedRings'
import EngravedCard from '@/components/EngravedCard'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import StoriesTeaser from '@/components/StoriesTeaser'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedRings />
        <EngravedCard />
        <HowItWorks />
        <Testimonials />
        <StoriesTeaser />
      </main>
      <Footer />
    </div>
  )
}
