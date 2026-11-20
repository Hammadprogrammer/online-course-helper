import React from 'react'
import type { Metadata } from 'next'
import CertificationTemplate from '@/container/certifications/certification_template/certification_template'
import { getSubject } from '@/container/subjects/subjects_data'

const data = getSubject('take-my-biology-exam')

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: '/take-my-biology-exam/',
  },
}

const page = () => <CertificationTemplate data={data} />

export default page
