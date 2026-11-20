import React from 'react';
import PageBanner from '@/share-component/page_banner/page_banner';
import styles from './policy.module.scss';

const PolicyLayout = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <>
    <PageBanner title={title} />
    <section className={styles.section}>
      <article className={styles.content}>{children}</article>
    </section>
  </>
);

export default PolicyLayout;
