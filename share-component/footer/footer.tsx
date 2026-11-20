"use client";
import React from 'react';
import Link from 'next/link';
import Logo from '@/share-component/logo/logo';
import {
  Facebook, YouTube, Pinterest, Instagram, ChevronRight,
  PhoneInTalkOutlined, EmailOutlined, LocationOnOutlined
} from '@mui/icons-material';

const quickLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about/" },
  { name: "Reviews", url: "/reviews/" },
  { name: "Contact", url: "/contact/" },
  { name: "Blogs", url: "/blog/" },
];

const policies = [
  { name: "Privacy Policy", url: "/privacy-policy/" },
  { name: "Terms Conditions", url: "/terms-and-conditions/" },
  { name: "Refund Policy", url: "/refund-policy/" },
];

const contacts = [
  { icon: <PhoneInTalkOutlined fontSize="small" />, text: "+1 212 347 6533", href: "tel:+12123476533" },
  { icon: <EmailOutlined fontSize="small" />, text: "info@allexamhelp.com", href: "mailto:info@allexamhelp.com" },
  { icon: <LocationOnOutlined fontSize="small" />, text: "55 Main Street, 2nd Block, New York" },
];

const socials = [
  { href: "https://www.facebook.com/p/All-Exam-Help-61565603774858/?_rdc=2&_rdr#", icon: <Facebook sx={{ fontSize: 16 }} />, label: "Facebook" },
  { href: "https://www.youtube.com/channel/UCl374uHuik09T7e5Uw_N64Q", icon: <YouTube sx={{ fontSize: 16 }} />, label: "YouTube" },
  { href: "https://www.pinterest.com/allexamhelp0/", icon: <Pinterest sx={{ fontSize: 16 }} />, label: "Pinterest" },
  { href: "https://www.instagram.com/all_exam_help/", icon: <Instagram sx={{ fontSize: 16 }} />, label: "Instagram" },
];

const linkCls = "flex items-center gap-1 text-[#E0E0E0] hover:text-[#FFE145] transition-colors text-[13px]";
const titleCls = "text-white text-[17px] font-semibold mb-5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white">
      <div className="bg-[#111111] py-14">
        <div className="mx-auto px-6 lg:px-8 max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <Link href="/" prefetch={false} className="inline-block mb-4" aria-label="Online Course Helper - Home">
              <Logo theme="light" />
            </Link>
            <p className="text-[#E0E0E0] text-[13px] leading-relaxed mb-5">
              Online Course Helper supports the learning process that online education should offer. Services are to be used for study help and tutoring purposes only.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <Link key={s.label} href={s.href} aria-label={s.label} className="w-8 h-8 flex items-center justify-center rounded-full border border-white text-white hover:bg-[#FFE145] hover:border-[#FFE145] hover:text-[#09362F] transition-colors">
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={titleCls}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.url}><Link href={l.url} className={linkCls}><ChevronRight sx={{ fontSize: 16 }} /> {l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={titleCls}>Policies</h4>
            <ul className="space-y-3">
              {policies.map((l) => (
                <li key={l.url}><Link href={l.url} className={linkCls}><ChevronRight sx={{ fontSize: 16 }} /> {l.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={titleCls}>Get In Touch!</h4>
            <ul className="space-y-4">
              {contacts.map((c) => {
                const inner = (
                  <>
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-white">{c.icon}</span>
                    <span>{c.text}</span>
                  </>
                );
                return (
                  <li key={c.text}>
                    {c.href
                      ? <a href={c.href} className="flex items-center gap-3 text-[13px] text-[#E0E0E0] hover:text-[#FFE145] transition-colors">{inner}</a>
                      : <div className="flex items-center gap-3 text-[13px] text-[#E0E0E0]">{inner}</div>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#232323] py-5">
        <p className="text-center text-[#E0E0E0] text-[13px] px-6">
          Copyright © {currentYear} Online Course Helper | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
