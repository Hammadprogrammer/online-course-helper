"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LeadForm from '@/share-component/lead_form/lead_form';
import { certifications } from '@/container/certifications/certifications_data';
import { subjects } from '@/container/subjects/subjects_data';
import styles from './about_page.module.scss';

const stats = [
  { value: '95%', label: 'Success Rate' },
  { value: '10000+', label: 'Exams Covered' },
  { value: '4592', label: 'Online Tutors' },
];

const services = [
  { icon: <AssignmentOutlinedIcon />, title: 'Online Exam Preparation', desc: 'Professional help for all kinds of online exams.' },
  { icon: <QuizOutlinedIcon />, title: 'Test Help', desc: 'Timed tests, quizzes, and homework.' },
  { icon: <VideocamOutlinedIcon />, title: 'Proctored Exam Help', desc: 'Secure ways for getting through an online proctored examination.' },
  { icon: <WorkspacePremiumOutlinedIcon />, title: 'Certification Exam Help', desc: 'Test preparation and certification exam-taking help.' },
  { icon: <TuneOutlinedIcon />, title: 'Tailored Exam Preparation', desc: 'Personalized assistance for tailored academic requirements.' },
];

const whyChoose = [
  { icon: <LockOutlinedIcon />, title: 'Complete Privacy', desc: 'Your privacy is our priority, and your confidentiality is secured.' },
  { icon: <GroupsOutlinedIcon />, title: 'Expert Team', desc: 'Professional experts in a variety of subjects.' },
  { icon: <SavingsOutlinedIcon />, title: 'Good Value', desc: 'Get the best results for your investment.' },
  { icon: <EmojiEventsOutlinedIcon />, title: 'Proven Success', desc: 'Very high pass rate with different exams.' },
  { icon: <SupportAgentOutlinedIcon />, title: '24/7 Support', desc: 'We never sleep, so we can help anytime.' },
  { icon: <VerifiedUserOutlinedIcon />, title: 'Integrity & Quality', desc: 'Professional academic help from experts across all academic fields.' },
];

const coverLinks = [...subjects, ...certifications].map((c) => ({ name: `${c.examName} Exam`, url: `/${c.slug}/` }));

const AboutPage = () => (
  <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <h1>About <span>Online Course Helper</span></h1>
          <p>
            At Online Course Helper, we are an examination and test provider offering online exam and test support to all users. With years of experience and a team of expert exam helpers, we help students and professionals maintain confidence and realize their academic potential by taking their exams and tests on their behalf. With us, success is guaranteed.
          </p>
          <Link href="/contact/" prefetch={false} className={styles.yellowBtn}>Get Started</Link>
        </div>

        <div className={styles.orderCard}>
          <h2>Order Now</h2>
          <p>To Get 50% Discount</p>
          <LeadForm variant="stacked" showMessage tone="green" buttonText="Submit" />
        </div>
      </div>
    </section>

    <section className={styles.who}>
      <div className={styles.whoInner}>
        <div className={styles.whoImage}>
          <Image src="/about1.jpg" alt="Online Course Helper team supporting students" width={600} height={480} />
        </div>
        <div className={styles.whoText}>
          <h2>Who We Are?</h2>
          <p>At Online Course Helper, we are a reputable brand that aims to provide personalized and confidential exam help services to our clients. Our success is based on a simple, but powerful concept-minimizing obstacles to success for learners with discretion and trustworthiness. We believe in trust, confidentiality, and results, and thanks to these three key principles, our online exam help is the best service available on the internet.</p>
          <p>Our goal is plain and simple: to equip learners with the resources necessary to achieve their educational and career goals. Education is the driving force behind progress, yet exams can be daunting. That&apos;s why we work hard to take the stress out and put your success front and center with our discreet, results-driven services.</p>
          <p>Online Course Helper is backed by a team of certified professionals, faculty, and exam attenders. We handpick each of our team members for their academic and technical competencies. Our squad is available 24 hours a day, so that no matter where you live, help is never far away.</p>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className={styles.whatWrap}>
      <div className={styles.what}>
        <h2>What We Do</h2>
        <p className={styles.whatIntro}>At Online Course Helper, we offer a variety of customized services, which include:</p>
        <div className={styles.whatList}>
          {services.map((s) => (
            <div key={s.title} className={styles.whatCard}>
              <span className={styles.whatIcon}>{s.icon}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.whatOutro}>Subject, complexity, length, and even the format are irrelevant - we handle every exam as a pro! We bring you the most advanced technology and tactics in order to ensure you are always prepared.</p>
      </div>
    </section>

    <section className={styles.subjects}>
      <h2>Subjects We Cover</h2>
      <p>Our portfolio speaks for itself, with clients from varying academic disciplines who can attest to our ability to excel in even the most challenging of subjects. We have been the game changer for several academic and career stories, right from college freshmen to working professionals.</p>
      <ul className={styles.subjectGrid}>
        {coverLinks.map((l) => (
          <li key={l.url}><CheckCircleIcon /><Link href={l.url} prefetch={false}>{l.name}</Link></li>
        ))}
      </ul>
    </section>

    <section className={styles.why}>
      <div className={styles.whyInner}>
        <h2>Why Choose Online Course Helper?</h2>
        <p className={styles.whySub}>It&apos;s why both students and professionals rely on Online Course Helper</p>
        <div className={styles.whyGrid}>
          {whyChoose.map((w, i) => (
            <div key={w.title} className={`${styles.whyCard} ${i === 1 ? styles.highlight : ''}`}>
              <span className={styles.whyIcon}>{w.icon}</span>
              <div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.whyOutro}>We make more than just a service - we provide peace of mind. When you opt for us to fulfil your long-awaited dreams, you will find us by your side with our excellent services, the moment you urgently require us.</p>
      </div>
    </section>

    <section className={styles.start}>
      <div className={styles.startInner}>
        <div>
          <h2>Get Started Today!</h2>
          <p>Already successful with your online tests? Join hands with Online Course Helper now and lead a stress-free academic life. Get in touch now for trusted, confidential exam help!</p>
        </div>
        <LeadForm variant="stacked" tone="green" buttonText="Submit" />
      </div>
    </section>
  </>
);

export default AboutPage;
