import React from 'react';
import styles from './logo.module.scss';

interface LogoProps {
  theme?: 'dark' | 'light';
  size?: 'md' | 'sm';
}

const Logo: React.FC<LogoProps> = ({ theme = 'dark', size = 'md' }) => (
  <span className={`${styles.logo} ${styles[theme]} ${styles[size]}`} aria-label="Online Course Helper">
    <span className={styles.mark} aria-hidden="true">
      <span className={styles.a}>O</span><span className={styles.e}>C</span><span className={styles.h}>H</span>
    </span>
    <span className={styles.text} aria-hidden="true">
      <span className={styles.top}>Online <b>Course</b></span>
      <span className={styles.bottom}>Helper</span>
    </span>
  </span>
);

export default Logo;
