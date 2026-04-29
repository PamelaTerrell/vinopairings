import Link from "next/link";

export default function BestWineOpenerPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* FEATURED AMAZON PICK */}
      <section className="mt-12 rounded-[2rem] border border-[#eadfd3] bg-[#fffaf4] p-6 shadow-sm md:p-10">
        <p className="text-xs uppercase tracking-[0.25em] text-[#a37c58]">
          Trusted Pick for Beginners
        </p>

        <div className="mt-6 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="flex min-h-[260px] items-center justify-center rounded-[1.5rem] border border-[#eadfd3] bg-white p-6">
            <div className="text-center">
              <p className="text-5xl">🍷</p>
              <p className="mt-3 text-sm text-[#7a6859]">
                Beginner-Friendly Wine Opener
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#3b2f2f]">
              Beneno Premium Wing Corkscrew
            </h2>

            <p className="mt-4 leading-8 text-[#5b4a3d]">
              A classic wing-style corkscrew is one of the easiest wine openers for
              beginners because the motion is simple: twist, lift, and press the wings down.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://www.amazon.com/dp/B07YBVR46Y?tag=vinopairings-20"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-[#a37c58] px-6 py-3 text-sm font-semibold text-white sm:w-auto"
              >
                Check Price on Amazon
              </a>

              <Link
                href="/tips"
                className="inline-flex w-full justify-center rounded-full border border-[#cdbba8] px-6 py-3 text-sm font-semibold text-[#4b3f2f] sm:w-auto"
              >
                Learn How to Use It
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}