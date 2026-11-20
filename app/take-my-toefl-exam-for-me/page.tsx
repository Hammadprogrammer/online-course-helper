import React from 'react'
import type { Metadata } from 'next'
import CertificationTemplate from '@/container/certifications/certification_template/certification_template'
import { getCertification } from '@/container/certifications/certifications_data'

const data = getCertification('take-my-toefl-exam-for-me')

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/take-my-toefl-exam-for-me/',
  },
}

const page = () => <CertificationTemplate data={data} />

export default page
