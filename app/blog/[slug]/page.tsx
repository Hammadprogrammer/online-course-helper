import React from 'react'
import type { Metadata } from 'next'
import BlogPost from '@/container/blog/blog_post'
import { getPost, posts } from '@/container/blog/blog_data'

export const dynamicParams = false

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }))

type Props = { params: Promise<{ slug: string }> }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const post = getPost((await params).slug)
  return {
    title: `${post.title} | Online Course Helper`,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}/` },
  }
}

const page = async ({ params }: Props) => <BlogPost post={getPost((await params).slug)} />

export default page
