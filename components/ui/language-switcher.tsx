'use client';

import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { setUserLocale } from '../../src/i18n/locale';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function toggle() {
    const next = locale === 'pt' ? 'en' : 'pt';
    startTransition(() => {
      setUserLocale(next);
    });
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      className='font-mono text-xs text-paper-200 hover:text-ice-400'
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}
