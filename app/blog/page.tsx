import React from 'react'
import type { Metadata } from 'next'
import PageBanner from '@/share-component/page_banner/page_banner'
import BlogList from '@/container/blog/blog_list'

export const metadata: Metadata = {
  title: 'Blog | Online Exam Tips and Guides | Online Course Helper',
  description: 'Read the latest guides and tips on online exams, proctored tests, nursing entrance exams, and certification preparation from the Online Course Helper team.',
  alternates: {
    canonical: '/blog/',
  },
}

const page = () => (
  <>
    <PageBanner title="Latest Blog" />
    <BlogList />
  </>
)

export default page
