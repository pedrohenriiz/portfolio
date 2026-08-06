export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-blueprint-600/60 py-6'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-6 font-mono text-[11px] text-paper-200/50'>
        <span>© {currentYear} Pedro Henrique</span>
      </div>
    </footer>
  );
}
