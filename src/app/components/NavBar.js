import Link from 'next/link';

export default function NavBar({ fontHeading }) {
  return (
    <nav className="bg-[#a37c58] text-[#f9f6ef] p-6 flex flex-wrap items-center justify-between shadow-md border-b border-[#8b684a]">
      <div className={`text-3xl font-bold ${fontHeading} font-serif tracking-wide`}>
        <Link href="/">Vino Pairings</Link>
      </div>
      <div className="flex flex-wrap gap-6 mt-4 sm:mt-0 text-lg">
        <Link href="/" className="hover:text-[#e2c48f] transition-colors duration-300">Home</Link>
        <Link href="/about" className="hover:text-[#e2c48f] transition-colors duration-300">About</Link>
        <Link href="/history" className="hover:text-[#e2c48f] transition-colors duration-300">History</Link>
        <Link href="/tips" className="hover:text-[#e2c48f] transition-colors duration-300">Tips</Link>
        <Link href="/contact" className="hover:text-[#e2c48f] transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
}
