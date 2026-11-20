import React from 'react'
import { Metadata } from 'next'
import ContactPage from '@/container/contact_page/contact_page'

export const metadata: Metadata = {
  title: 'Contact Us | Fast Support and Expert Guidance Available 24/7',
  description: 'Have questions or need assistance? Contact our support team anytime. We\'re available 24/7 to provide fast, reliable, and stress-free help.',
  alternates: {
    canonical: '/contact/',
  },
}

const page = () => <ContactPage />

export default page
