import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '@/share-component/page_banner/page_banner'
import ReviewsGrid from '@/container/reviews/reviews_grid'

export const metadata: Metadata = {
  title: 'Reviews | What Students Say About Online Course Helper',
  description: 'Read reviews from students who used Online Course Helper for online exam support. See why students trust our experts for secure, confidential, and reliable help.',
  alternates: {
    canonical: '/reviews/',
  },
}

const page = () => (
  <>
    <PageBanner title="Read Our Exam Help Reviews!" />
    <ReviewsGrid />
  </>
)

export default page
