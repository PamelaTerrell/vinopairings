'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (formData._gotcha) {
      setStatus('⚠️ Submission blocked as spam.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/manbzwgp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('✅ Thank you! Your message has been received.');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        setStatus('⚠️ Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('⚠️ Error sending message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-14 text-[#4b3f2f]">
      <section className="overflow-hidden rounded-3xl border border-[#d8cfc4] bg-[#fdfaf3] shadow-[0_10px_30px_rgba(75,63,47,0.08)]">
        <header className="bg-gradient-to-b from-[#fdfaf3] to-[#f9f6ef] px-8 pb-8 pt-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#7a6b57]">
            Vino Pairings
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-wide md:text-5xl [font-family:var(--font-playfair)]">
            Contact
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6b5b4b] md:text-lg">
            Have a question, collaboration idea, pairing suggestion, or site
            inquiry? I’d love to hear from you.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#a37c58] to-transparent" />
        </header>

        <div className="px-8 py-10">
          <div className="mb-8 rounded-2xl border border-[#d8cfc4] bg-[#f9f6ef] px-6 py-5 text-sm leading-7 text-[#5f5144] md:text-base">
            <p>
              You may also reach Vino Pairings by email at{' '}
              <a
                href="mailto:hello@vinopairings.com"
                className="font-medium text-[#6e2a2a] underline underline-offset-4 hover:text-[#8a3a3a]"
              >
                hello@vinopairings.com
              </a>
              .
            </p>

            <p className="mt-2">
              Vino Pairings is part of the Stabile USA family of digital
              brands.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-semibold text-[#4b3f2f]"
              >
                Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#d8cfc4] bg-white p-3 text-[#4b3f2f] outline-none transition focus:ring-2 focus:ring-[#a37c58]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-semibold text-[#4b3f2f]"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#d8cfc4] bg-white p-3 text-[#4b3f2f] outline-none transition focus:ring-2 focus:ring-[#a37c58]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-semibold text-[#4b3f2f]"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#d8cfc4] bg-white p-3 text-[#4b3f2f] outline-none transition focus:ring-2 focus:ring-[#a37c58]"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-[#6e2a2a] px-7 py-3 font-semibold text-white transition hover:bg-[#8a3a3a] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {status && (
              <p className="mt-4 font-semibold text-[#6e2a2a]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}