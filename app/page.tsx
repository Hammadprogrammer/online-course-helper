import React from 'react'
import type { Metadata } from 'next'
import HomeHero from '@/container/home/home_hero/home_hero'
import HomeWhyChoose from '@/container/home/home_why_choose/home_why_choose'
import HomeContent from '@/container/home/home_content/home_content'
import HomeTestimonials from '@/container/home/home_testimonials/home_testimonials'
import HomeFaq from '@/container/home/home_faq/home_faq'
import HomeCta from '@/container/home/home_cta/home_cta'

export const metadata: Metadata = {
  title: "Online Course Helper: Take My Exam for Me, Pay Someone to Take My Exam",
  description: "Looking to hire a professional to take my exam for me? We have got you covered. Pay someone to take my exam to ace your online grades hassle-free. Get 50% Discount Today.",
  alternates: {
    canonical: "/",
  },
}



const page = () => {
  return (
    <>
      <HomeHero />
      <HomeWhyChoose />
      <HomeContent />
      <HomeTestimonials />
      <HomeFaq />
      <HomeCta />
    </>
  )
}

export default page
