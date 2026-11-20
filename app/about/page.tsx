import React from 'react';
import { Metadata } from 'next';
import AboutPage from '@/container/about_page/about_page';

export const metadata: Metadata = {
  title: 'About Us - Online Course Helper a Reliable Support for Online Exams',
  description: 'Looking for reliable online exam services? Online Course Helper, your source for discreet online exam help. Hire our service and enjoy a client-first philosophy. Get 50% Discount Today.',
  alternates: {
    canonical: '/about/',
  },
};

const page = () => <AboutPage />;

export default page;
