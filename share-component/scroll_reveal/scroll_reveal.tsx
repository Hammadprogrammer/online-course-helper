"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const TEXT_TAGS = new Set(['H1', 'H2', 'H3', 'P', 'UL', 'OL', 'FORM', 'IMG', 'ARTICLE', 'ASIDE']);

const collectItems = (section: HTMLElement) => {
  const items: HTMLElement[] = [];
  const picked = new Set<HTMLElement>();
  const insidePicked = (el: HTMLElement) => {
    for (let p = el.parentElement; p && p !== section; p = p.parentElement) if (picked.has(p)) return true;
    return false;
  };
  section.querySelectorAll<HTMLElement>('*').forEach((el) => {
    if (picked.has(el) || insidePicked(el)) return;
    const style = getComputedStyle(el);
    if (style.display === 'grid' || (style.display === 'flex' && style.flexWrap === 'wrap')) {
      Array.from(el.children).forEach((c) => { picked.add(c as HTMLElement); items.push(c as HTMLElement); });
    } else if (TEXT_TAGS.has(el.tagName)) {
      picked.add(el);
      items.push(el);
    }
  });
  return items;
};

const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const sectionItems = new Map<Element, HTMLElement[]>();
    document.querySelectorAll<HTMLElement>('section, footer').forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight * 0.85) return;
      const items = collectItems(section);
      items.forEach((el, i) => {
        el.dataset.reveal = '';
        el.style.setProperty('--reveal-delay', `${Math.min(i, 8) * 90}ms`);
      });
      if (items.length) sectionItems.set(section, items);
    });

    const reveal = (items: HTMLElement[]) => {
      items.forEach((el) => el.classList.add('is-revealed'));
      window.setTimeout(() => items.forEach((el) => {
        el.removeAttribute('data-reveal');
        el.classList.remove('is-revealed');
        el.style.removeProperty('--reveal-delay');
      }), 1600);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        reveal(sectionItems.get(entry.target) ?? [entry.target as HTMLElement]);
      }),
      { threshold: 0, rootMargin: '0px 0px -15% 0px' }
    );

    sectionItems.forEach((items, section) => {
      if ((section as HTMLElement).offsetHeight <= window.innerHeight * 1.5) {
        observer.observe(section);
        return;
      }
      sectionItems.delete(section);
      items.forEach((el) => { el.style.setProperty('--reveal-delay', '0ms'); observer.observe(el); });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
