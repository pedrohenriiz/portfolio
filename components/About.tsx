import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id='about' className='border-b border-blueprint-600/60 py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <p className='mb-3 font-mono uppercase text-xs text-ice-400'>
          {t('title')}
        </p>

        <div>
          <h2 className='font-display text-2xl font-medium text-paper-50 sm:text-3xl'>
            {t('aboutMe')}
          </h2>
          <p className='mt-5 leading-relaxed text-paper-200'>
            {t('description1')}
          </p>
          <p className='mt-4 leading-relaxed text-paper-200'>
            {t('description2')}
          </p>

          <p className='mt-4 leading-relaxed text-paper-200'>
            {t('description3')}
          </p>
        </div>
      </div>
    </section>
  );
}
