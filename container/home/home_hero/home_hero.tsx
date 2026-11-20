import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SchoolIcon from '@mui/icons-material/School';
import LeadForm from '@/share-component/lead_form/lead_form';
import styles from './home_hero.module.scss';

const badges = [
  { icon: <VerifiedIcon />, value: "95%", label: "Success Rate" },
  { icon: <AssignmentTurnedInIcon />, value: "10000+", label: "Exams Covered" },
  { icon: <SchoolIcon />, value: "4592", label: "Online Tutors" },
];

interface HomeHeroProps {
  topText?: string;
  heading?: string;
  subText?: string;
  bullets?: string[];
}

const HomeHero: React.FC<HomeHeroProps> = ({
  topText = "Study Less Score More",
  heading = "Do My Exam For Me Service To Boost Score",
  subText = "Online Course Helper offers a smart way to learn with online support and guidance. We concentrate on helping you learn more, faster, and easier. No overthinking, just confidence. We're behind you all the way.",
  bullets = ["Smart Study Methods", "Expert Guidance", "Stress-Free Learning", "Proven Success"],
}) => (
  <section className={styles.hero}>
    <div className={styles.inner}>
      {topText && <span className={styles.topText}>{topText}</span>}
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subText}>{subText}</p>

      {bullets.length > 0 && (
        <ul className={styles.bullets}>
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}

      <div className={styles.formBox}>
        <LeadForm variant="inline" buttonText="Get Instant Quote" />
      </div>

      <div className={styles.badges}>
        {badges.map((b) => (
          <div key={b.label} className={styles.badge}>
            <span className={styles.badgeIcon}>{b.icon}</span>
            <div>
              <strong>{b.value}</strong>
              <span>{b.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeHero;
