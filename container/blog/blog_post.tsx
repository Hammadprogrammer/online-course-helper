import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageSidebar from '@/share-component/page_sidebar/page_sidebar';
import { BlogPost as BlogPostData, formatDate } from './blog_data';
import styles from './blog.module.scss';

const BlogPost = ({ post }: { post: BlogPostData }) => (
  <section className={styles.postSection}>
    <div className={styles.postContainer}>
      <article className={styles.article}>
        <Image src={post.image} alt={post.title} width={900} height={500} className={styles.postImage} priority />
        <h1 className={styles.postTitle}>{post.title}</h1>
        <time dateTime={post.date} className={styles.date}>{formatDate(post.date)}</time>

        {post.content.map((s, i) => (
          <React.Fragment key={i}>
            <div className={styles.postBlock}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </div>
            {s.cta && (
              <div className={styles.ctaBox}>
                <h3>{s.cta.title}</h3>
                <p>{s.cta.text}</p>
                <Link href="/contact/" prefetch={false} className={styles.ctaBtn}>Order Now</Link>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className={`${styles.ctaBox} ${styles.ctaEnd}`}>
          <h3>{post.endCta}</h3>
          <Link href="/contact/" prefetch={false} className={styles.ctaBtn}>Order Now</Link>
        </div>
      </article>

      <PageSidebar variant="blog" />
    </div>
  </section>
);

export default BlogPost;
