'use client';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  const tags: string[] = [
    t('sectionChips.softwareArchitecture'),
    t('sectionChips.react'),
    t('sectionChips.reactNative'),
    t('sectionChips.nodeJs'),
    t('sectionChips.aws'),
  ];

  return (
    <section
      id='hero'
      className='relative flex min-h-screen items-center overflow-hidden border-b border-blueprint-600/60 pt-20'
    >
      <div className='bg-blueprint-grid bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]' />

      <div className='relative mx-auto w-full max-w-5xl px-6'>
        <h1 className='fade-up font-display text-5xl font-bold leading-[1.05] text-paper-50 sm:text-6xl md:text-7xl'>
          Pedro Henrique
        </h1>

        <p
          className='fade-up mt-5 font-display text-xl font-medium text-paper-50 sm:text-2xl'
          style={{ animationDelay: '0.05s' }}
        >
          {t('section.softwareEngineer')}
        </p>
        <p
          className='fade-up mt-1 font-display text-lg text-ice-400'
          style={{ animationDelay: '0.05s' }}
        >
          {t('section.specialist')}
        </p>

        <div
          className='fade-up mt-5 flex flex-wrap gap-2'
          style={{ animationDelay: '0.1s' }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className='rounded-sm border border-blueprint-600/60 px-3 py-1 font-mono text-xs text-paper-200/80'
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className='fade-up mt-6 max-w-xl text-base leading-relaxed text-paper-200 sm:text-lg'
          style={{ animationDelay: '0.15s' }}
        >
          {t('section.description')}
        </p>

        <div
          className='fade-up mt-10 flex flex-wrap items-center gap-4'
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href='#experience'
            className='rounded-sm bg-ice-400 px-5 py-2.5 font-mono text-sm font-medium text-blueprint-900 transition-colors hover:bg-ice-300'
          >
            {t('buttons.seeExperience')} ↓
          </a>
          <a
            href='#contact'
            className='rounded-sm border border-blueprint-600 px-5 py-2.5 font-mono text-sm text-paper-200 transition-colors hover:border-ice-400/60 hover:text-ice-400'
          >
            {t('buttons.contact')}
          </a>

          <a
            href='/CV-Pedro-Henrique-Savarezzi-Maria.pdf'
            download
            className='rounded-sm border border-blueprint-600 px-5 py-2.5 font-mono text-sm text-paper-200 transition-colors hover:border-ice-400/60 hover:text-ice-400'
          >
            {t('buttons.download')}
          </a>
        </div>
      </div>
    </section>
  );
}
