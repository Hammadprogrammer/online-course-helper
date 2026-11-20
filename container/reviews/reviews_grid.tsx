import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { reviews } from './reviews_data';
import styles from './reviews_grid.module.scss';

const ReviewsGrid = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      {reviews.map((r) => (
        <article key={r.name} className={styles.card}>
          <p className={styles.text}>{r.text}</p>
          <div className={styles.stars} aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <h2 className={styles.name}>{r.name}</h2>
          <span className={styles.location}>{r.location}</span>
        </article>
      ))}
    </div>
  </section>
);

export default ReviewsGrid;
