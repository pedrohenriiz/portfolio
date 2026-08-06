import { useTranslations } from 'next-intl';

type LabelProps = 'email' | 'github' | 'linkedin';

interface ChannelProps {
  label: LabelProps;
  value: string;
  href: string;
}

const channels: ChannelProps[] = [
  {
    label: 'email',
    value: 'pedrohsm.dev@gmail.com',
    href: 'mailto:pedrohsm.dev@gmail.com',
  },
  {
    label: 'github',
    value: 'github.com/pedrohenriiz',
    href: 'https://github.com/pedrohenriiz',
  },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/pedrohenriquedeveloper',
    href: 'https://linkedin.com/in/pedrohenriquedeveloper',
  },
];

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id='contact' className='py-24'>
      <div className='mx-auto max-w-5xl px-6'>
        <p className='mb-3 font-mono uppercase text-xs text-ice-400'>
          {t('title')}
        </p>
        <h2 className='max-w-lg font-display text-2xl font-medium text-paper-50 sm:text-3xl'>
          {t('oportunity')}
        </h2>
        <p className='mt-4 max-w-md text-paper-200'>{t('description')}</p>

        <ul className='mt-10 divide-y divide-blueprint-600/60 border-y border-blueprint-600/60'>
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                className='group flex items-center justify-between py-4 transition-colors hover:text-ice-400'
                target='_blank'
              >
                <span className='font-mono text-xs text-paper-200/60 group-hover:text-ice-400'>
                  {channel.label}
                </span>
                <span className='font-display text-base text-paper-50 group-hover:text-ice-400'>
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
