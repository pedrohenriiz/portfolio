import { HeaderLinksProps } from '../Header';

interface HeaderMenuProps {
  links: HeaderLinksProps[];
  onCloseMenu: () => void;
}

export default function HeaderMenu({ links, onCloseMenu }: HeaderMenuProps) {
  return (
    <nav className='border-t border-blueprint-600/60 bg-blueprint-900 px-6 py-4 md:hidden'>
      <ul className='flex flex-col gap-1'>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onCloseMenu}
              className='flex items-center gap-3 py-2.5 font-mono text-sm text-paper-200 transition-colors hover:text-ice-400'
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
