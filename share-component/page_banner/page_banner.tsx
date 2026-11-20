import React from 'react';
import styles from './page_banner.module.scss';

const PageBanner = ({ title }: { title: string }) => (
  <section className={styles.banner}>
    <h1 className={styles.title}>{title}</h1>
  </section>
);

export default PageBanner;
