"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SectionTitle from '@/share-component/section_title/section_title';
import { reviews } from '@/container/reviews/reviews_data';
import styles from './home_testimonials.module.scss';



const HomeTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const onResize = () => setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);
  const go = (dir: number) => setIndex((i) => (i + dir > maxIndex ? 0 : i + dir < 0 ? maxIndex : i + dir));

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(t);
  }, [maxIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          title="Hear from Our Happy Clients"
          sub="Awesome quality and service! The exam help was accurate, private, and helped my self-confidence. Would recommend to anyone wanting great results."
        />

        <div className={styles.slider}>
          <button className={`${styles.nav} ${styles.prev}`} onClick={() => go(-1)} aria-label="Previous review"><ChevronLeftIcon /></button>

          <div className={styles.viewport}>
            <div className={styles.track} style={{ transform: `translateX(-${index * (100 / perView)}%)` }}>
              {reviews.map((r) => (
                <div key={r.name} className={styles.slide} style={{ flex: `0 0 ${100 / perView}%` }}>
                  <div className={styles.card}>
                    <div className={styles.avatar}>
                      <Image src={r.image} alt={r.name} width={70} height={70} />
                    </div>
                    <FormatQuoteIcon className={styles.quote} />
                    <p className={styles.text}>{r.text}</p>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <h3 className={styles.name}>{r.name}</h3>
                    <span className={styles.location}>{r.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={`${styles.nav} ${styles.next}`} onClick={() => go(1)} aria-label="Next review"><ChevronRightIcon /></button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
