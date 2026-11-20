"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/share-component/logo/logo';
import { usePathname } from 'next/navigation';
import { 
  KeyboardArrowDown, School, Home as HomeIcon, ContactMail, RateReview, Article,
  Close as CloseIcon, Menu as MenuIcon, AutoStories
} from '@mui/icons-material';
import { certifications } from '@/container/certifications/certifications_data';
import { subjects as subjectPages } from '@/container/subjects/subjects_data';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const services = certifications.map((c) => ({ name: c.navName, url: `/${c.slug}/` }));
  const subjects = subjectPages.map((s) => ({ name: s.navName, url: `/${s.slug}/` }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null); 
  };

  const handleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

  const simpleLinks = [
    { name: "Contact", url: "/contact/", icon: <ContactMail /> },
    { name: "Reviews", url: "/reviews/", icon: <RateReview /> },
    { name: "Blog", url: "/blog/", icon: <Article /> },
  ];

  const isActive = (path: string) => {
    if (!path) return false;
    const normalizedPath = path.replace(/\/+$/, "") || "/";
    const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
    return normalizedPathname === normalizedPath;
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav className="w-full bg-[#F8F8F8] border-b border-[#E9E9E9] shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-[80px]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" prefetch={false} aria-label="Online Course Helper - Home">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation - using OLD design classes */}
            <div className={styles.centerNav}>
              <Link href="/" prefetch={false} className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>

              {/* Certifications Dropdown */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('ser')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${services.some(s => isActive(s.url)) ? styles.activeText : ''}`}>
                  Certifications <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <ul className={`${styles.columnMenu} ${openDropdown === 'ser' ? styles.show : ''}`}>
                  {services.map((item) => (
                    <li key={item.url}>
                      <Link href={item.url} prefetch={false} className={isActive(item.url) ? styles.columnActive : ''}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects Dropdown */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('sub')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${subjects.some(s => isActive(s.url)) ? styles.activeText : ''}`}>
                  Subjective Exams <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <ul className={`${styles.columnMenu} ${openDropdown === 'sub' ? styles.show : ''}`}>
                  {subjects.map((sub) => (
                    <li key={sub.url}>
                      <Link href={sub.url} prefetch={false} className={isActive(sub.url) ? styles.columnActive : ''}>{sub.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {simpleLinks.map((l) => (
                <Link key={l.url} href={l.url} prefetch={false} className={`${styles.navLink} ${isActive(l.url) ? styles.active : ''}`}>
                  {l.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Link href="/contact/" prefetch={false} className="flex items-center border-2 border-[#FFE145] bg-[#FFE145] text-[#09362F] px-7 py-2.5 rounded-[2px] font-semibold text-[15px] shadow-[3px_-3px_0_0_#09362F] hover:bg-[#FFD60A] hover:border-[#FFD60A] transition-colors">
                Order Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={handleDrawerToggle} className="bg-[#087244] text-white p-1.5 rounded-[5px]" aria-label="Open menu">
                <MenuIcon fontSize="medium" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleDrawerToggle}>
        <div className={`fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <Logo size="sm" />
            <button onClick={handleDrawerToggle} className="text-gray-600">
              <CloseIcon />
            </button>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            <ul className={styles.mobileList}>
              <li className={`${styles.mobileListItem} ${isActive('/') ? styles.mobActive : ''}`}>
                <Link href="/" prefetch={false} onClick={handleDrawerToggle}><HomeIcon /> Home</Link>
              </li>

              <li className={`${styles.mobileListItem} ${services.some(s => isActive(s.url)) ? styles.mobActive : ''}`} onClick={() => handleDropdown('ser')}>
                <div className={styles.labelWithIcon}><School /> Certifications</div>
                <KeyboardArrowDown sx={{ color: '#000', transform: openDropdown === 'ser' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'ser' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {services.map(s => {
                    return (
                      <Link key={s.name} href={s.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(s.url) ? styles.mobSubActive : ''}>
                        {s.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <li className={`${styles.mobileListItem} ${subjects.some(s => isActive(s.url)) ? styles.mobActive : ''}`} onClick={() => handleDropdown('sub')}>
                <div className={styles.labelWithIcon}><AutoStories /> Subjective Exams</div>
                <KeyboardArrowDown sx={{ color: '#000', transform: openDropdown === 'sub' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'sub' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {subjects.map(sub => {
                    return (
                      <Link key={sub.name} href={sub.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(sub.url) ? styles.mobSubActive : ''}>
                        {sub.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {simpleLinks.map((l) => (
                <li key={l.url} className={`${styles.mobileListItem} ${isActive(l.url) ? styles.mobActive : ''}`}>
                  <Link href={l.url} prefetch={false} onClick={handleDrawerToggle}>{l.icon} {l.name}</Link>
                </li>
              ))}
            </ul>

            <div className="p-5 mt-2">
              <Link href="/contact/" prefetch={false} onClick={handleDrawerToggle} className="flex items-center justify-center bg-[#FFE145] text-[#09362F] px-4 py-3 rounded-[5px] font-semibold w-full">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;