import Image from 'next/image';

export const metadata = {
  title: 'About • Vino Pairings',
  description: 'Learn about Pamela Terrell, creator of Vino Pairings — where food and wine find their perfect match.',
};

export default function AboutPage() {
  const brand = {
    cream: '#f9f6ef',
    parchment: '#fdfaf3',
    cocoa: '#4b3f2f',
    gold: '#a37c58',
    line: '#d8cfc4',
    burgundy: '#6e2a2a',
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: brand.cream, color: brand.cocoa }}>
      {/* Soft vignette background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(900px 600px at 50% 10%, rgba(163,124,88,0.25), transparent 70%), radial-gradient(1200px 600px at 50% 100%, rgba(110,42,42,0.12), transparent 60%)',
        }}
      />

      <main className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col items-center text-center">
          <div className="relative">
            {/* Glowing gold ring */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-50"
              style={{ background: 'radial-gradient(circle, rgba(163,124,88,0.4), transparent 70%)' }}
            />
            {/* Profile image */}
            <Image
              src="/Me.jpg"
              alt="Photo of Pamela Terrell, creator of Vino Pairings"
              width={400}
              height={400}
              priority
              className="relative z-10 rounded-full border-8 shadow-xl"
              style={{ borderColor: brand.line, objectFit: 'cover' }}
            />
          </div>

          <h1 className="mt-8 text-4xl font-serif font-bold tracking-wide md:text-5xl">
            Pamela Terrell
          </h1>
          <p className="mt-2 text-lg italic text-[#7a6b57]">Founder • Creator of Vino Pairings</p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            Welcome to <strong>Vino Pairings</strong> — a space born from curiosity, joy, and the simple belief that food and wine are better together.  
            I wanted to make pairing approachable, intuitive, and beautiful. What began as a few notes at dinner has become a living collection of flavor stories.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="rounded-full border px-5 py-2 text-sm font-semibold shadow-sm transition hover:brightness-110"
              style={{ borderColor: brand.gold, backgroundColor: brand.gold, color: '#fff' }}
            >
              Explore Pairings
            </a>
            <a
              href="/sunday"
              className="rounded-full border px-5 py-2 text-sm font-semibold transition hover:bg-white"
              style={{ borderColor: brand.line }}
            >
              Sunday Gallery
            </a>
          </div>
        </section>

        {/* --- STORY SECTION --- */}
        <section
          className="mt-16 rounded-2xl border shadow-md md:mt-20"
          style={{ backgroundColor: brand.parchment, borderColor: brand.line }}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold tracking-wide text-center">
              My Story
            </h2>
            <div className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
              <p>
                For me, wine has never been about collecting bottles — it’s about connection.  
                The moment you take a sip, share a meal, and discover that magical balance between food and wine, it tells a story.
              </p>
              <p className="mt-4">
                I began sharing pairings to help others find that same spark. Vino Pairings grew from a personal curiosity
                into a welcoming guide — a place to learn, laugh, and taste along the way.
              </p>
              <p className="mt-4">
                I hope this site inspires you to explore confidently and pair joyfully, one dish and one glass at a time.
              </p>
            </div>
          </div>
        </section>

        {/* --- VALUES / HIGHLIGHTS --- */}
        <section className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: 'Approachable',
              desc: 'Wine should feel inclusive and human — not intimidating.',
            },
            {
              title: 'Authentic',
              desc: 'Every pairing and photo comes from real kitchens and real curiosity.',
            },
            {
              title: 'Beautiful',
              desc: 'Design, flavor, and experience belong together in harmony.',
            },
          ].map(({ title, desc }) => (
            <article
              key={title}
              className="rounded-2xl border bg-white p-6 text-center shadow-sm"
              style={{ borderColor: brand.line }}
            >
              <h3 className="text-xl font-serif font-bold text-[#a37c58]">{title}</h3>
              <p className="mt-2 text-base leading-relaxed opacity-80">{desc}</p>
            </article>
          ))}
        </section>

        {/* --- FOOTER CTA --- */}
        <section
          className="mt-16 rounded-2xl border p-8 text-center shadow-sm"
          style={{ borderColor: brand.line, background: '#fff' }}
        >
          <h3 className="text-2xl font-serif font-bold tracking-wide">
            Ready to discover your next perfect pairing?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-lg">
            Browse by dish, wine, or occasion — or ask the AI helper for instant inspiration.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/"
              className="rounded-full border px-5 py-2 text-sm font-semibold shadow-sm transition hover:brightness-110"
              style={{ borderColor: brand.gold, backgroundColor: brand.gold, color: '#fff' }}
            >
              Find Pairings
            </a>
            <a
              href="/tips"
              className="rounded-full border px-5 py-2 text-sm font-semibold transition hover:bg-white"
              style={{ borderColor: brand.line }}
            >
              Wine Tips
            </a>
          </div>
        </section>
      </main>

      {/* --- GA4 redirect tracker: if came from /history --- */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              try {
                var hasGtag = typeof window !== 'undefined' && typeof window.gtag === 'function';
                if (!hasGtag) return;
                var ref = document.referrer || '';
                if (!ref) return;
                var url;
                try { url = new URL(ref); } catch(e) { return; }
                if (url.pathname === '/history') {
                  window.gtag('event', 'redirected_from_history', {
                    page_location: window.location.href,
                    page_title: document.title || 'About Page',
                    referrer_path: url.pathname
                  });
                }
              } catch(e) {}
            })();
          `,
        }}
      />
    </div>
  );
}
