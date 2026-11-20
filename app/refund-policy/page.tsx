import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import PolicyLayout from '@/container/policies/policy_layout'

export const metadata: Metadata = {
  title: 'Refund Policy | Online Course Helper',
  description: 'Read the Online Course Helper refund policy to understand refund eligibility, non-refundable situations, and how to request a refund for our exam help services.',
  alternates: {
    canonical: '/refund-policy/',
  },
}

const page = () => (
  <PolicyLayout title="Refund Policy">
    <p>We will ensure that at Online Course Helper you succeed. We have created a refund policy that will give you the confidence and the peace of mind when using our services.</p>

    <h2>Our Guarantee</h2>
    <p>We are confident in the experience of our specialists and will ensure that you pass your exam. In case, due to any circumstances, we cannot pass you, you have the right to get all your money back.</p>

    <h2>Eligibility for a Refund</h2>
    <p>Refunds will be given on the following terms:</p>
    <ol>
      <li><strong>Non-Passing Grade:</strong> In case our expert fails to get a passing grade on the exam in accordance with the terms that were agreed upon in your service contract.</li>
      <li><strong>Service Failure:</strong> In case we cannot perform the service because we have a problem on our side.</li>
    </ol>

    <h2>Non-refundable Situations</h2>
    <p>We are not obliged to give a refund where:</p>
    <ol>
      <li><strong>Client-Side Problems:</strong> In case your failure to pass the exam can be attributed to technical issues on your side, like a bad internet connection, a malfunctioning computer, or an unexpected power outage.</li>
      <li><strong>Breaking of Terms:</strong> You break any of the terms provided in our service contract, such as providing the wrong login details or interfering with the exam in any manner.</li>
    </ol>

    <h2>How to Request a Refund</h2>
    <p><strong>Requesting a refund:</strong> Within a certain timeframe (e.g., 72 hours) of the exam completion, you have to reach our <Link href="/contact/">customer support team</Link> to obtain a refund. You will be required to give evidence of the non-passing test or a description of the breakdown of service. Your request will be checked by our team, and a refund will be processed in a time-sensitive way.</p>
  </PolicyLayout>
)

export default page
