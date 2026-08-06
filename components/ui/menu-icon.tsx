interface MenuIconProps {
  isOpen: boolean;
}
export function MenuIcon({ isOpen }: MenuIconProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.8'
    >
      {isOpen ? (
        <path d='M6 6l12 12M18 6L6 18' strokeLinecap='round' />
      ) : (
        <path d='M4 7h16M4 12h16M4 17h16' strokeLinecap='round' />
      )}
    </svg>
  );
}
