'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get('name'), phone: formData.get('phone') };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(response.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-primary/10 border-2 border-accent/60 p-10 rounded-xl text-center">
        <p className="text-5xl mb-6">✓</p>
        <h3 className="text-3xl font-bold text-sand mb-4">Vielen Dank!</h3>
        <p className="text-xl text-sand/80">
          Ihre Anfrage wurde gesendet. Ich rufe Sie zeitnah zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto">
      <div>
        <label htmlFor="name" className="block text-xl font-bold text-sand/90 mb-3">
          Ihr Vor- und Nachname
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full text-xl text-foreground p-5 border-2 border-sand/20 rounded bg-white/10 text-sand placeholder:text-sand/30 focus:border-accent focus:ring-4 focus:ring-accent/20 outline-none transition-all"
          placeholder="z.B. Maria Musterfrau"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-xl font-bold text-sand/90 mb-3">
          Ihre Telefonnummer
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full text-xl text-foreground p-5 border-2 border-sand/20 rounded bg-white/10 text-sand placeholder:text-sand/30 focus:border-accent focus:ring-4 focus:ring-accent/20 outline-none transition-all"
          placeholder="z.B. 0151 1234567"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-accent text-white font-bold text-2xl py-6 rounded hover:bg-accent-dark transition-colors shadow-lg disabled:opacity-50 focus:ring-4 focus:ring-accent/40"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Bitte rufen Sie mich an'}
      </button>

      {status === 'error' && (
        <p className="text-accent-light font-bold text-xl text-center">
          Fehler beim Senden. Rufen Sie direkt an:{' '}
          <a href="tel:+49123456789" className="underline hover:text-white">+49 123 456 789</a>
        </p>
      )}
    </form>
  );
}
