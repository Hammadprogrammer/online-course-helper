import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PageSidebar from '@/share-component/page_sidebar/page_sidebar';
import styles from './home_content.module.scss';

const blocksTop = [
  {
    heading: "Pay Someone to Take My Exam for Me with Confidence",
    text: "Stress about exams is natural, but you don’t have to face it alone. Our professional online exam takers provide you with the security you need to get the results you desire from even the most challenging exams. We provide safe, secure, and confidential guidance and make sure that your privacy will never be shared with any third party. We are the first resource that not only has a high success rate but also promises you peace of mind, better grades, and the confidence to do well on the rest of the test. Whatever the topic or the exam type, we have experts to help you! Choose us today, and you will experience a difference in your success.",
  },
  {
    heading: "Stress-Free Do My Exam for Me Service – Pass without Worry",
    text: "Exams can create a lot of pressure and anxiety, but with our do my exam help, all you have to do is sit back and rely on our professionals to assist you. We have you covered from the subject by subject, everything is broken down and explained until it makes sense, even the “hard” stuff. From answering questions to time management, our experts ensure that your experience is a hassle-free one. We keep your privacy, security, and grades protected at all times. We know how annoying this is for you, and we're ready to take on the work because your privacy, security, and grades are always protected for you! With our confidence boost and 24/7 support, all of your exams will seem easy, guaranteed!",
  },
  {
    heading: "Your Grades Matter - Pay Someone to Do My Exam",
    text: "We know your grades are crucial when it comes to your future, and our pay someone to do my exam service is here to help you pass even the most challenging exams! With years of experience and the most effective study material, we are here to help our clients in mastering even the toughest exams hands down. Our experts guarantee accuracy, trustworthiness, and 100% confidentiality on all our pay someone to take my exam services. Prep to finish, all we do is make the process easy and stress-free for you. With our reliable assistance, you can take on all your school work without the anxiety.",
  },
  {
    heading: "Take My Exam for Me by Skilled Professionals",
    text: "When exams feel too much to handle, hire someone to take my exam so that you can count on our expert to take over. And with the knowledge that spans a broad spectrum of topics, learning and taking exams are now so much easier and stress-free. Whether it's time issues, complex questions, or just needing moral support along the way, our experts make sure that you're not doing this alone! Every service is reliable, confidential, and secure, allowing you to get results without added stress. We offer 24/7 support so you can get prepared for the exams with comfort. Our tutors are dedicated to providing top-quality services to help you achieve your desired grades with ease. Our aim is not to make exams too stressful and intimidating for students. We customize your exam needs and offer personalized care.",
  },
  {
    heading: "Looking to Hire Someone to Take My Exam - We Offer a Stress-Free Solution",
    text: "If you are looking for a reliable way for your online exam, our service will become your best exam assistant. We link you with a well-qualified tutor who specializes in taking all kinds of online exams correctly and with great care. From planning to finish, every detail makes for a clean and easy process. You and your personal information are always secure and confidential, so you can relax and enjoy. With 24/7 help and guaranteed success, you will never need to be concerned about exams again. Choose us and add convenience, trust, and good grades to the list.",
  },
  {
    heading: "Trusted Team is Available 24/7 - Hire Someone to Take My Online Exam Today",
    text: "No need for exams to be more stressful when you have our trustworthy experts guiding you from beginning to end. We have a professional team on standby at all times to answer any questions that you may have about any subject or exam. From late-night support to last-minute prepping, you are not alone in the journey. We provide total privacy, secure processing, and proven results. There is no doubt that we can deliver what you are looking for. When you hire our team, you get peace of mind that comes with success. We'll do the hard work so you can focus on succeeding. We offer you support at all academic levels and offer support on your specific exam needs, so you can maximize your performance.",
  },
];

const features = [
  { title: "Available Whenever", desc: "Get the help you need before that exam, no matter what time we offer support 24/7.", icon: <CheckBoxOutlinedIcon /> },
  { title: "Qualified Team", desc: "We are a team of experts who have experience in many categories and types of examinations.", icon: <GroupsOutlinedIcon /> },
  { title: "Secure & Private", desc: "All your personal data and exam details are secured with us, offering you privacy.", icon: <WifiTetheringOutlinedIcon /> },
  { title: "Track Record", desc: "Students prefer our services to get higher grades, and you can be next with our experienced team.", icon: <AssignmentTurnedInOutlinedIcon /> },
  { title: "No Stress", desc: "Our experts take into account everything you need to know, while letting you relax and stress-free!", icon: <SentimentSatisfiedAltIcon /> },
  { title: "Personalized Assistance", desc: "You will receive personalized support and guidance so that you can perform at your best.", icon: <PersonOutlineOutlinedIcon /> },
];

const blocksBottom = [
  {
    heading: "Guaranteed Success for Do My Online Exam for Me",
    text: "Students put in a lot of effort and manage their time and anxiety to get over their challenges, but regrettably, sometimes they fail because of too much stress and not enough time. Our professionals provide safe handling, tried-and-true formulae, and personalized tech assistance to help you get out of the toughest circumstances. We help you score higher in your online exam more comfortably. We guide you throughout the process, making sure you know every step of the exam. Backed by You do the best you can to be prepared, and do your best, and we'll help with problems and tricky questions. Count on our expert guidance to get you the advantage you need for sure success.",
  },
  {
    heading: "Take My Exam is the Easy Way with Our Tutors",
    text: "With our tutors at your disposal, exams don't need to be so stressful. We offer high-quality, proven preparation so you can be confident and ready to take on every question. Our staff maintains absolute discretion and employs successful methods for optimizing your results. With personalized instruction, you'll get more done in less time, tackle hard concepts, and really concentrate on what's important. With a wealth of experience and a proven record of success, we're here to help make sure passing your online exam is easy, effortless, and rewarding. We help accommodate your individual exam studying needs with a custom-made study package that works around your availability. We want you to feel confident and have reliable results, EVERY single time! With us, it's no longer just a good grade that you can be sure of, but an amazing one!",
  },
  {
    heading: "Pay Someone to Take My Exam with a Proven Success Rate",
    text: "Easily get an A or even an A+ without cracking your head when you hire our professional exam takers who are trusted by students in different areas of study. Being experienced and well accomplished, our professionals make sure you give the correct answers to help you manage your exam time more efficiently. Each service is 100% safe and confidential, so you can have peace of mind. Our experts offer assistance as per your exam requirements. When you select take my online exam for me, you have the freedom to concentrate on your studies and spare time for your friends.",
  },
  {
    heading: "Do My Online Exam for Me to Score Higher",
    text: "Achieve higher results with ease by hiring us. Our tutors are experts in many different subjects, and they provide accurate and dependable support that can guarantee your success in any exam. Whether it's personalized instruction, proven strategies, or managing time, the most challenging exams can be streamlined. We secure total privacy and confidentiality, so you can focus on performing well without any concern. Our experience and commitment will help you not only to pass but to excel, thus it will be a lot easier for you to achieve your academic goals confidently. Our expert consultants will be happy to help. They adjust to your exam prep needs, providing customized support that leads to exam success. You can just focus more on studying effectively and get higher scores, with less stress and time!",
  },
];

const Block = ({ heading, text }: { heading: string; text: string }) => (
  <div className={styles.block}>
    <h2>{heading}</h2>
    <p>{text}</p>
  </div>
);

const HomeContent = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.main}>
        {blocksTop.map((b) => <Block key={b.heading} {...b} />)}

        <div className={styles.offer}>
          <Image src="/discount.png" alt="24/7 support, 100% confidentiality, subject experts" width={680} height={458} className={styles.offerImg} />
          <div className={styles.offerText}>
            <h3>Enjoy a 50% Discount on Signup</h3>
            <p>Sign up today and receive a free quote for our services, plus an instant 50% discount.</p>
            <Link href="/contact/" prefetch={false} className={styles.offerBtn}>Get Instant Quote</Link>
          </div>
        </div>

        <div className={styles.block}>
          <h2>Take A Look at Our Service Features</h2>
          <p>Our services are user-friendly, safe, and straightforward. Expert guidance and assistance will help you when you need it. For us, everything is designed to help you succeed with confidence.</p>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {blocksBottom.map((b) => <Block key={b.heading} {...b} />)}
      </div>

      <PageSidebar />
    </div>
  </section>
);

export default HomeContent;
