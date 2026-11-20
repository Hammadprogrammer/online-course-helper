import React from 'react';
import Link from 'next/link';
import HomeHero from '@/container/home/home_hero/home_hero';
import HomeTestimonials from '@/container/home/home_testimonials/home_testimonials';
import HomeFaq from '@/container/home/home_faq/home_faq';
import HomeCta from '@/container/home/home_cta/home_cta';
import PageSidebar from '@/share-component/page_sidebar/page_sidebar';
import { CertificationData } from '@/container/certifications/certifications_data';
import styles from './certification_template.module.scss';

const ctaHeadings = [
  (exam: string) => `Hire Our Expert To Take My ${exam} Exam - Get Started Today!`,
  (exam: string) => `Pay Someone To Take My ${exam} Exam - Get 50% Discount Today!`,
  (exam: string) => `Talk To Our ${exam} Experts - Available 24/7`,
];

const CtaBox = ({ text }: { text: string }) => (
  <div className={styles.ctaBox}>
    <h3>{text}</h3>
    <Link href="/contact/" prefetch={false} className={styles.ctaBtn}>Order Now</Link>
  </div>
);

const CertificationTemplate = ({ data }: { data: CertificationData }) => (
  <>
    <HomeHero {...data.hero} />

    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.main}>
          {data.sections.map((s, i) => (
            <React.Fragment key={s.heading}>
              <div className={styles.block}>
                <h2>{s.heading}</h2>
                <p>{s.text}</p>
              </div>
              {i % 2 === 1 && i < data.sections.length - 1 && (
                <CtaBox text={ctaHeadings[Math.floor(i / 2) % ctaHeadings.length](data.examName)} />
              )}
            </React.Fragment>
          ))}
        </div>

        <PageSidebar activeUrl={`/${data.slug}/`} />
      </div>
    </section>

    <HomeTestimonials />
    <HomeFaq title={`Frequently Asked Questions About ${data.examName} Exam Help`} faqs={data.faqs} />
    <HomeCta />
  </>
);

export default CertificationTemplate;
