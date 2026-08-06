'use client';

import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { MenuIcon } from './ui/menu-icon';
import HeaderMenu from './ui/header-menu';
import LanguageSwitcher from './ui/language-switcher';

export interface HeaderLinksProps {
  href: string;
  label: string;
}

export default function Header() {
  const t = useTranslations('Header');

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const links: HeaderLinksProps[] = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#technologies', label: t('nav.technologies') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header className='fixed left-0 right-0 top-0 z-50 border-b border-blueprint-600/60 bg-blueprint-900/85 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center px-6 py-4 gap-3 md:justify-between'>
        <a
          href='#topo'
          className='flex-grow font-display text-sm font-medium tracking-wide text-paper-50 md:flex-grow-0'
          onClick={() => setIsOpen(false)}
        >
          Pedro Henrique
        </a>

        <nav className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='group flex items-center gap-2 font-mono text-xs text-paper-200 transition-colors hover:text-ice-400'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />

        <button
          type='button'
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className='flex h-9 w-9 items-center justify-center border border-blueprint-600/60 text-paper-200 md:hidden'
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </div>

      {isOpen && <HeaderMenu links={links} onCloseMenu={handleCloseMenu} />}
    </header>
  );
}
