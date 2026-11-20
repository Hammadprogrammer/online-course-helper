"use client";
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SectionTitle from '@/share-component/section_title/section_title';
import styles from './home_faq.module.scss';

const defaultFaqs = [
  { question: "How to get prompt and trusted exam service?", answer: "Don’t get stressed. You have our qualified experts for getting online exam help. They have 24/7 assistance; they guarantee privacy and discretion, take exams confidentially, and help you get higher grades stress-free." },
  { question: "Is it safe and confidential to hire an online exam expert?", answer: "Yes, providing you 100% confidentiality, and the exam materials will be safe & sound. Qualified experts help you maintain privacy while receiving assistance that is precise, safe, and always secure." },
  { question: "Can experts do all kinds of online exams for me?", answer: "Absolutely. Our experienced team of online exam experts has different subject experts as well as exam-taking formats, which ensures accurate and appropriate answers, exact time management, and rightful guidance as per the individual needs of the students." },
  { question: "What's the turnaround for urgent exams?", answer: "Get help from our experts 24/7 when you need it the most. As soon as you let us know your exam, we can start preparing and giving you support and service, without sacrificing accuracy or security." },
];

interface HomeFaqProps {
  title?: string;
  sub?: string;
  faqs?: { question: string; answer: string }[];
}

const HomeFaq: React.FC<HomeFaqProps> = ({
  title = "Read Our FAQs",
  sub = "Check out our FAQs to get quick answers to all your questions about our services and how we can help you succeed.",
  faqs = defaultFaqs,
}) => {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className={styles.section}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className={styles.container}>
        <SectionTitle title={title} sub={sub} />

        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <button className={styles.header} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <HelpOutlineIcon className={styles.qIcon} />
                  <span>{f.question}</span>
                  {isOpen ? <RemoveIcon className={styles.toggle} /> : <AddIcon className={styles.toggle} />}
                </button>
                <div className={styles.body}>
                  <p>{f.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
