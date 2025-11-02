// src/app/components/NavBar.jsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-[#a37c58] text-[#f9f6ef] border-b border-[#8b684a] shadow-md">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center gap-4 h-16" style={{ fontFamily: '"Palatino Linotype","Book Antiqua",Palatino,serif' }}>
          {/* Brand (don’t let it shrink) */}
          <div className="shrink-0 text-2xl sm:text-3xl font-bold tracking-wide">
            <Link href="/" className="hover:text-[#e2c48f] transition-colors duration-300">
              Vino Pairings
            </Link>
          </div>

          {/* Links container — can shrink; scrolls instead of clipping */}
          <div className="ml-auto min-w-0 w-full sm:w-auto">
            <ul
              className="
                flex flex-nowrap justify-end gap-5 sm:gap-6
                overflow-x-auto whitespace-nowrap
                [-ms-overflow-style:none] [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              <li><Link href="/" className="hover:text-[#e2c48f] transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#e2c48f] transition-colors duration-300">About</Link></li>
            
              <li><Link href="/tips" className="hover:text-[#e2c48f] transition-colors duration-300">Tips</Link></li>
              <li><Link href="/sunday" className="hover:text-[#e2c48f] transition-colors duration-300">Sunday</Link></li>
              <li><Link href="/contact" className="hover:text-[#e2c48f] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
