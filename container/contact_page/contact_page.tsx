"use client";
import React from 'react';
import Image from 'next/image';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import LeadForm from '@/share-component/lead_form/lead_form';
import styles from './contact_page.module.scss';

const contactInfo = [
  { icon: <EmailOutlinedIcon />, label: 'Email', value: 'info@allexamhelp.com', href: 'mailto:info@allexamhelp.com' },
  { icon: <PhoneInTalkOutlinedIcon />, label: 'Phone', value: '+1 212 347 6533', href: 'tel:+12123476533' },
  { icon: <LocationOnOutlinedIcon />, label: 'Location', value: '55 Main Street, 2nd Block, New York' },
  { icon: <AccessTimeIcon />, label: 'Availability', value: '24/7 Support' },
];

const whyChoose = [
  'Work with experienced and qualified subject experts',
  '24/7 support designed around your schedule',
  'Trusted by students seeking fast and reliable results',
  'Focused help for exams, quizzes, and online courses',
  '100% confidential and secure process',
];

const ContactPage = () => (
  <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroImageWrap}>
          <span className={styles.circle} />
          <Image src="/about.jpg" alt="Student getting exam help" width={600} height={485} className={styles.heroImage} priority />
          <div className={`${styles.badge} ${styles.badgeTop}`}>
            <span><SchoolOutlinedIcon /></span>
            <div><strong>70+</strong><small>Subject Experts</small></div>
          </div>
          <div className={`${styles.badge} ${styles.badgeBottom}`}>
            <span><VerifiedOutlinedIcon /></span>
            <div><strong>95%</strong><small>Success Rate</small></div>
          </div>
        </div>

        <div className={styles.heroText}>
          <span className={styles.line} />
          <h1>Contact Us</h1>
          <p>
            Need expert help with your online exams or tests? Contact our support team anytime - We&apos;re here 24/7 to guide you toward stress-free, guaranteed exam success!
          </p>
        </div>
      </div>
    </section>

    <section className={styles.message}>
      <div className={styles.messageInner}>
        <div>
          <h2>Send Us a Message</h2>
          <p className={styles.messageSub}>Have any questions? Say hello and get the best prices for your exam help.</p>
          <div className={styles.formCard}>
            <LeadForm variant="stacked" showMessage tone="green" buttonText="Submit" />
          </div>
        </div>

        <div>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          <ul className={styles.infoList}>
            {contactInfo.map((c) => (
              <li key={c.label}>
                <span className={styles.infoIcon}>{c.icon}</span>
                <div>
                  <strong>{c.label}</strong>
                  {c.href ? <a href={c.href}>{c.value}</a> : <span>{c.value}</span>}
                </div>
              </li>
            ))}
          </ul>

          <h3 className={styles.infoTitle}>Why Choose Online Course Helper?</h3>
          <ul className={styles.checkList}>
            {whyChoose.map((w) => <li key={w}><CheckIcon /> {w}</li>)}
          </ul>
        </div>
      </div>
    </section>

    <section className={styles.disclaimer}>
      <span className={styles.disclaimerIcon}><InfoOutlinedIcon /></span>
      <h2>Service Disclaimer</h2>
      <div className={styles.disclaimerBox}>
        <p>
          <strong>Online Course Helper</strong> supports the learning process that online education should offer. We are not here to share or support cheating of any kind. Services are to be used for study help and tutoring purposes only. Our users are the ones who are meant to obey the policy of their institution and use our resources in an ethical (and legal) manner.
        </p>
      </div>
      <small className={styles.disclaimerNote}><InfoOutlinedIcon /> Educational support services only</small>
    </section>
  </>
);

export default ContactPage;
