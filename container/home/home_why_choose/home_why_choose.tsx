import React from 'react';
import Image from 'next/image';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';
import SectionTitle from '@/share-component/section_title/section_title';
import styles from './home_why_choose.module.scss';

const left = [
  { icon: <HandshakeIcon />, title: "Instant Help", desc: "Receive instant assistance whenever you are stuck with your studies and exams, with no waiting." },
  { icon: <BeachAccessIcon />, title: "Simple Procedure", desc: "We make it EASY for you to get in touch with our professionals and place your order." },
  { icon: <LockIcon />, title: "Safe & Secure", desc: "Your privacy is our top priority, and we're committed to maintaining it and offering a secure experience." },
];

const right = [
  { icon: <CheckCircleOutlineIcon />, title: "Expert Tutors", desc: "We have qualified PhD tutors. No matter which online exam you are taking, we have got you covered." },
  { icon: <AccountBalanceWalletIcon />, title: "Worry-Free Exam Taking", desc: "Experience a smooth, hassle-free experience so you can focus on your other tasks." },
  { icon: <StarsIcon />, title: "Top Results", desc: "We offer nothing but the best; the record of our services and the satisfaction of students speak for themselves." },
];

type Item = (typeof left)[number];

const Card = ({ item, side }: { item: Item; side: 'left' | 'right' }) => (
  <div className={`${styles.card} ${styles[side]}`}>
    <span className={styles.icon}>{item.icon}</span>
    <div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  </div>
);

const HomeWhyChoose = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <SectionTitle
        title="Why Students Hire Our Fast, Simple, and Secure Take My Exam Assistance"
        sub="We make taking exams easy, effortless, and safe with the help of trusted industry experts. Our team guarantees the most discreet and professional exam assistance, with the best outcomes. With us, you get peace of mind and the grades you've always desired."
      />

      <div className={styles.grid}>
        <div className={styles.col}>
          {left.map((item) => <Card key={item.title} item={item} side="left" />)}
        </div>

        <div className={styles.center}>
          <div className={styles.imageFrame}>
            <Image src="/expert1.jpg" alt="Exam experts" width={570} height={650} className={styles.image} />
          </div>
        </div>

        <div className={styles.col}>
          {right.map((item) => <Card key={item.title} item={item} side="right" />)}
        </div>
      </div>
    </div>
  </section>
);

export default HomeWhyChoose;
