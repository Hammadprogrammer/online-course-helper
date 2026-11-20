import React from 'react';
import Link from 'next/link';
import SchoolIcon from '@mui/icons-material/School';
import styles from './home_cta.module.scss';

const HomeCta = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <span className={styles.icon}><SchoolIcon /></span>
      <h2 className={styles.heading}>Place your Order here</h2>
      <p className={styles.sub}>
        We guarantee you get the support you can trust at the moment it&apos;s needed the most. It&apos;s a simple way to start your exam support journey and save while boosting your grades.
      </p>
      <div className={styles.buttons}>
        <Link href="/contact/" prefetch={false} className={styles.primary}>Order Now</Link>
        <a href="tel:+12123476533" className={styles.secondary}>Call Us</a>
      </div>
    </div>
  </section>
);

export default HomeCta;
