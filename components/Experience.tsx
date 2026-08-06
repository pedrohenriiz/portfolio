import { useTranslations } from 'next-intl';
import { CompanyIcon } from './ui/company-icon';

export default function Experience() {
  const t = useTranslations('Experience');

  const jobs = t.raw('work') as {
    companyName: string;
    role: string;
    shortDescription: string;
    actions: string[];
    stack: string[];
    period: string;
  }[];

  return (
    <section id='experience' className='border-b border-blueprint-600/60 py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <p className='mb-3 font-mono uppercase text-xs text-ice-400'>
          {t('title')}
        </p>
        <h2 className='font-display text-2xl font-medium text-paper-50 sm:text-3xl'>
          {t('professionalExperience')}
        </h2>

        <div className='relative mt-10 space-y-10'>
          <div className='absolute bottom-2 left-[19px] top-2 w-px bg-blueprint-600/60' />

          {jobs.map((job) => (
            <div key={job.companyName} className='relative flex gap-6'>
              <div className='relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-ice-400/60 bg-blueprint-900 text-ice-400'>
                <CompanyIcon />
              </div>

              <div className='flex-1 border border-blueprint-600/60 bg-blueprint-800/30 p-6'>
                <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                  <h3 className='font-display text-lg font-medium text-paper-50'>
                    {job.companyName}
                  </h3>
                  <span className='font-mono text-xs text-paper-200/60'>
                    {job.period}
                  </span>
                </div>

                <p className='mt-1 font-display text-sm font-medium text-ice-400'>
                  {job.role}
                </p>

                <p className='mt-3 text-sm leading-relaxed text-paper-200'>
                  {job.shortDescription}
                </p>

                <ul className='mt-4 space-y-2'>
                  {job.actions.map((action) => (
                    <li
                      key={action}
                      className='flex gap-2 text-sm leading-relaxed text-paper-200'
                    >
                      <span className='text-ice-400'>→</span>
                      {action}
                    </li>
                  ))}
                </ul>

                <ul className='mt-5 flex flex-wrap gap-2 border-t border-blueprint-600/60 pt-4'>
                  {job.stack.map((stack) => (
                    <li
                      key={stack}
                      className='rounded-sm border border-blueprint-600/60 px-2 py-0.5 font-mono text-[11px] text-paper-200/80'
                    >
                      {stack}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
