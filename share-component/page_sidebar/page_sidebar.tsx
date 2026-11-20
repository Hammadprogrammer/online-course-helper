import React from 'react';
import Link from 'next/link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LeadForm from '@/share-component/lead_form/lead_form';
import { certifications } from '@/container/certifications/certifications_data';
import { subjects } from '@/container/subjects/subjects_data';
import styles from './page_sidebar.module.scss';

const certLinks = certifications.map((c) => ({ name: c.navName, url: `/${c.slug}/` }));
const subjectLinks = subjects.map((s) => ({ name: s.navName, url: `/${s.slug}/` }));

const LinkBox = ({ title, items, activeUrl }: { title: string; items: { name: string; url: string }[]; activeUrl?: string }) => (
  <div className={styles.sideBox}>
    <h3 className={styles.sideTitle}>{title}</h3>
    <ul className={styles.linkList}>
      {items.map((i) => (
        <li key={i.url}>
          <Link href={i.url} prefetch={false} className={i.url === activeUrl ? styles.active : ''}>
            <ChevronRightIcon /> {i.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const formBox = (
  <div className={styles.sideBox}>
    <h3 className={styles.sideTitle}>Get In Touch</h3>
    <div className={styles.sideBody}>
      <LeadForm variant="stacked" showMessage buttonText="Get Instant Quote" />
    </div>
  </div>
);

const contactBox = (
  <div className={styles.sideBox}>
    <h3 className={styles.sideTitle}>Contact Us</h3>
    <div className={styles.sideBody}>
      <a href="tel:+12123476533" className={styles.contactLink}><LocalPhoneIcon /> +1 212 347 6533</a>
      <a href="mailto:info@allexamhelp.com" className={styles.contactLink}><EmailIcon /> info@allexamhelp.com</a>
    </div>
  </div>
);

const PageSidebar = ({ activeUrl, variant = 'default' }: { activeUrl?: string; variant?: 'default' | 'blog' }) => (
  <aside className={`${styles.sidebar} ${variant === 'blog' ? styles.static : ''}`}>
    {variant === 'blog' ? (
      <>
        <LinkBox title="What Exams We Cover" items={certLinks} activeUrl={activeUrl} />
        <LinkBox title="We Offer Exam Help Services" items={subjectLinks} activeUrl={activeUrl} />
        {formBox}
      </>
    ) : (
      <>
        {formBox}
        {contactBox}
        <LinkBox title="Certifications" items={certLinks} activeUrl={activeUrl} />
        <LinkBox title="Subjective Exams" items={subjectLinks} activeUrl={activeUrl} />
      </>
    )}
  </aside>
);

export default PageSidebar;
