import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from './blog_data';
import styles from './blog.module.scss';

const BlogList = () => (
  <section className={styles.listSection}>
    <div className={styles.grid}>
      {posts.map((p) => (
        <article key={p.slug} className={styles.card}>
          <Link href={`/blog/${p.slug}/`} prefetch={false} className={styles.cardImage}>
            <Image src={p.image} alt={p.title} width={600} height={340} />
          </Link>
          <div className={styles.cardBody}>
            <h2><Link href={`/blog/${p.slug}/`} prefetch={false}>{p.title}</Link></h2>
            <p>{p.excerpt}</p>
            <Link href={`/blog/${p.slug}/`} prefetch={false} className={styles.readMore}>Read More »</Link>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default BlogList;
