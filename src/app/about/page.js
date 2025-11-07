// app/about/page.js
import Image from 'next/image';

export const metadata = {
  title: 'About • Vino Pairings',
  description:
    'Learn about Pamela Terrell, creator of Vino Pairings — where food and wine meet to bring people together.',
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
      {/* Subtle vignette background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-80"
        style={{
          background:
            'radial-gradient(900px 600px at 50% 10%, rgba(163,124,88,0.25), transparent 70%), radial-gradient(1200px 600px at 50% 100%, rgba(110,42,42,0.12), transparent 60%)',
        }}
      />

      <main className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
        {/* HERO — Portrait-centered */}
        <section className="relative flex flex-col items-center text-center">
          <div className="relative fade-up">
            {/* Gold glow behind portrait */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-50 glow-bloom shimmer-gold"
              style={{
                background:
                  'radial-gradient(circle, rgba(163,124,88,0.4), transparent 70%)',
              }}
            />
            <Image
              src="/Me.jpg"
              alt="Photo of Pamela Terrell, creator of Vino Pairings"
              width={420}
              height={420}
              priority
              className="relative z-10 rounded-full border-8 shadow-xl"
              style={{ borderColor: brand.line, objectFit: 'cover' }}
            />
          </div>

          <h1 className="mt-8 text-4xl font-serif font-bold tracking-wide md:text-5xl fade-up-delay">
            Pamela Terrell
          </h1>
          <p className="mt-2 text-lg italic text-[#7a6b57] fade-up-delay">
            Founder • Creator of Vino Pairings
          </p>
          <p className="mt-3 max-w-md text-base text-[#7a6b57] fade-up-delay">
            “I believe every shared meal is a chance to connect — to pause, laugh, and remember what matters.”
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            Welcome to <strong>Vino Pairings</strong> — a space born from curiosity, joy, and the simple
            belief that food and wine are better together. What began as a few dinner notes has become a
            living collection of pairings you can trust, without fuss or jargon.
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

        {/* STORY */}
        <section
          className="mt-16 rounded-2xl border shadow-md md:mt-20"
          style={{ backgroundColor: brand.parchment, borderColor: brand.line }}
        >
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold tracking-wide text-center">My Story</h2>
            <div className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed">
              <p>
                For me, wine has never been about collecting bottles — it’s about connection. The moment you
                take a sip, share a meal, and discover that balance between food and wine, it tells a story.
              </p>
              <p className="mt-4">
                What I’ve loved most isn’t just discovering pairings — it’s hearing how others use them to bring
                people together. Whether it’s dinner with friends, a quiet moment with a partner, or a new
                tradition around a favorite bottle, connection is the thread that ties it all together.
              </p>
              <p className="mt-4">
                I hope this site inspires you to explore confidently and pair joyfully, one dish and one glass at a time.
              </p>
            </div>
          </div>
        </section>

       {/* VALUES */}
<section
  className="mt-12 grid gap-6 sm:gap-8 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]"
>
  {[
    { title: 'Approachable', desc: 'Wine should feel inclusive and human — not intimidating.' },
    { title: 'Connected',   desc: 'Food and wine mean more when they bring people together — every pairing is a story shared.' },
    { title: 'Authentic',   desc: 'Every pairing and photo comes from real kitchens and real curiosity.' },
    { title: 'Beautiful',   desc: 'Design, flavor, and experience belong together in harmony.' },
  ].map(({ title, desc }) => (
    <article
      key={title}
      className="rounded-2xl border bg-white p-6 text-center shadow-sm"
      style={{ borderColor: '#d8cfc4' }}
    >
      <h3 className="text-xl font-serif font-bold text-[#a37c58]">{title}</h3>
      <p className="mt-2 text-base leading-relaxed">{desc}</p>
    </article>
  ))}
</section>


        {/* COMMUNITY INVITE */}
        <section
          className="mt-12 rounded-2xl border p-5 text-center text-base opacity-95"
          style={{ borderColor: brand.line, backgroundColor: '#fff' }}
        >
          <p>
            I’d love to hear how food and wine bring joy to your table — your moments and your favorites.
            <br className="hidden sm:block" />
            <a href="/contact" className="underline decoration-dotted underline-offset-4 hover:opacity-90">
              Reach out and say hello
            </a>
            .
          </p>
        </section>

        {/* FOOTER CTA */}
        <section
          className="mt-12 rounded-2xl border p-8 text-center shadow-sm"
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

      {/* GA4: track redirected visits from /history -> /about (server component safe) */}
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
