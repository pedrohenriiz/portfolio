import { useTranslations } from 'next-intl';

type ToneProps = 'highlight' | 'solid' | 'muted';

type ItemType = (
  | {
      kind: 'card';
      title: string;
      caption: string;
    }
  | {
      kind: 'chip';
      label: string;
    }
)[];

interface TiersProps {
  label: string;
  tone: ToneProps;
  items: ItemType;
}

type StyleProps = {
  container: string;
  badge: string;
  card: string;
  chip: string;
};

interface ToneStyleProps {
  highlight: StyleProps;
  solid: StyleProps;
  muted: StyleProps;
}

const toneStyles: ToneStyleProps = {
  highlight: {
    container: 'border-ice-400/40 bg-ice-400/5',
    badge: 'border-ice-400/60 text-ice-400',
    card: 'border-ice-400/30 bg-blueprint-900/60',
    chip: 'border-ice-400/30 text-paper-50',
  },
  solid: {
    container: 'border-blueprint-600/60 bg-blueprint-800/20',
    badge: 'border-blueprint-600/60 text-paper-50',
    card: '',
    chip: 'border-blueprint-600/60 text-paper-50',
  },
  muted: {
    container: 'border-blueprint-600/40 bg-transparent',
    badge: 'border-blueprint-600/40 text-paper-200/60',
    card: '',
    chip: 'border-blueprint-600/40 text-paper-200/60',
  },
};

export default function TechStack() {
  const t = useTranslations('Stack');

  const tiers: TiersProps[] = [
    {
      label: t('tiers.specialist'),
      tone: 'highlight',
      items: [
        {
          kind: 'card',
          title: t('ecoSystem'),
          caption: 'React, Next.js, Redux, TypeScript',
        },
        { kind: 'chip', label: 'React Native' },
        { kind: 'chip', label: 'Node.js' },
        { kind: 'chip', label: 'SQL' },
      ],
    },
    {
      label: t('tiers.solidExperience'),
      tone: 'solid',
      items: [
        { kind: 'chip', label: 'AWS' },
        { kind: 'chip', label: 'NestJS' },
        { kind: 'chip', label: 'Docker' },
        { kind: 'chip', label: 'Tailwind CSS' },
        { kind: 'chip', label: 'Sequelize' },
        { kind: 'chip', label: 'Vitest' },
        { kind: 'chip', label: 'Storybook' },
        { kind: 'chip', label: 'Figma' },
        { kind: 'chip', label: 'Git' },
        { kind: 'chip', label: 'Playwright' },
      ],
    },
    {
      label: t('tiers.alsoWorked'),
      tone: 'muted',
      items: [
        { kind: 'chip', label: 'Electron' },
        { kind: 'chip', label: 'GitHub Actions' },
      ],
    },
  ];

  return (
    <section
      id='technologies'
      className='border-b border-blueprint-600/60 py-24'
    >
      <div className='mx-auto max-w-5xl px-6'>
        <p className='mb-3 font-mono uppercase text-xs text-ice-400'>
          {t('title')}
        </p>
        <h2 className='font-display text-2xl font-medium text-paper-50 sm:text-3xl'>
          {t('technologies')}
        </h2>
        <p className='mt-3 text-paper-200'>{t('description')}</p>

        <div className='mt-10 space-y-5'>
          {tiers.map((tier) => {
            const style = toneStyles[tier.tone];
            return (
              <div key={tier.label} className={`border p-5 ${style.container}`}>
                <span
                  className={`inline-block rounded-sm border px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide ${style.badge}`}
                >
                  {tier.label}
                </span>

                <div className='mt-4 flex flex-wrap gap-3'>
                  {tier.items.map((item) =>
                    item.kind === 'card' ? (
                      <div
                        key={item.title}
                        className={`border px-4 py-3 ${style.card || 'border-blueprint-600/60'}`}
                      >
                        <p className='font-display text-sm font-medium text-paper-50'>
                          {item.title}
                        </p>
                        <p className='mt-1 font-mono text-[11px] text-paper-200/60'>
                          {item.caption}
                        </p>
                      </div>
                    ) : (
                      <span
                        key={item.label}
                        className={`flex items-center rounded-sm border px-3 py-2 font-mono text-xs ${style.chip}`}
                      >
                        {item.label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
