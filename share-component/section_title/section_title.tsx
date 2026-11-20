import React from 'react';
import styles from './section_title.module.scss';

interface SectionTitleProps {
  title: React.ReactNode;
  sub?: React.ReactNode;
  light?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, sub, light = false, as: Tag = 'h2' }) => (
  <div className={styles.wrap}>
    <Tag className={`${styles.title} ${light ? styles.light : ''}`}>{title}</Tag>
    <div className={styles.separator} aria-hidden="true">
      <span className={styles.line} />
      <span className={styles.diamond} />
      <span className={styles.line} />
    </div>
    {sub && <p className={`${styles.sub} ${light ? styles.light : ''}`}>{sub}</p>}
  </div>
);

export default SectionTitle;
