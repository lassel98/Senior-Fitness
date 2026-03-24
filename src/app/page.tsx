import Image from "next/image";
import TrustSection from "@/components/TrustSection";
import ServiceToggle from "@/components/ServiceToggle";
import LeadForm from "@/components/LeadForm";
import ProgramsSection from "@/components/ProgramsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-sand">

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <header className="w-full bg-primary sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-sand">
            Fitness<span className="text-accent">·</span>Würzburg
          </div>
          <a
            href="#kontakt"
            className="bg-accent text-white px-7 py-3 rounded font-semibold text-lg hover:bg-accent-dark transition-colors focus:ring-4 focus:ring-accent/40"
          >
            Rückruf anfordern
          </a>
        </div>
      </header>

      {/* ── Hero — Golden Ratio Layout (61.8 / 38.2) ───────────────────── */}
      <section className="w-full bg-primary overflow-hidden">
        {/* 
          ┌────────────────────────────────┬──────────────────┐
          │         Text (61.8%)           │   Image (38.2%)  │
          └────────────────────────────────┴──────────────────┘
        */}
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-golden gap-0 min-h-[88vh] items-stretch">

          {/* LEFT — Text column */}
          <div className="flex flex-col justify-center py-20 lg:pr-16">
            {/* Eyebrow */}
            <p className="text-accent font-semibold text-lg tracking-widest uppercase mb-6 leading-none">
              Personal Training · Würzburg & Mainfranken
            </p>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-sand leading-tight mb-8 text-balance">
              Sicher & Schmerzfrei<br />
              im Alltag.
            </h1>

            <p className="text-xl text-sand/80 mb-12 text-balance leading-relaxed max-w-lg">
              Speziell für Senioren. Gewinnen Sie Ihre Beweglichkeit zurück —
              ganz ohne überfüllte Fitnessstudios. Maßgeschneidert für Ihre Bedürfnisse (auch im Sitzen möglich).
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="bg-accent text-white px-8 py-5 rounded font-bold text-xl text-center hover:bg-accent-dark transition-colors shadow-lg focus:ring-4 focus:ring-accent/40"
              >
                Kostenloses Erstgespräch
              </a>
              <a
                href="tel:+49123456789"
                className="bg-transparent text-sand border-2 border-sand/40 px-8 py-5 rounded font-bold text-xl text-center hover:border-sand hover:bg-white/5 transition-colors"
              >
                Direkt anrufen
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-14 pt-8 border-t border-sand/10 flex items-center gap-4 text-sand/60 text-base">
              <span className="text-accent font-bold text-2xl">50+</span>
              <span>zufriedene Seniorinnen & Senioren in Würzburg</span>
            </div>
          </div>

          {/* RIGHT — Image column (38.2%) */}
          <div className="relative hidden lg:block">
            <Image
              src="/hero-image.png"
              alt="Personal Trainer in Würzburg, der mit einem Senior im Park spazieren geht"
              fill
              className="object-cover object-center"
              priority
              sizes="38vw"
            />
            {/* Gradient from primary on left edge to blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ── Programs, Trust & Services ─────────────────────────────────── */}
      <ProgramsSection />
      <TrustSection />
      <ServiceToggle />

      {/* ── Kontakt / Lead Form ────────────────────────────────────────── */}
      <section id="kontakt" className="py-32 px-6 bg-primary">
        <div className="max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-lg tracking-widest uppercase mb-4 text-center">
            Unverbindlich & kostenlos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-sand leading-tight">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-center text-xl text-sand/70 mb-14 max-w-xl mx-auto leading-relaxed">
            Hinterlassen Sie einfach Ihren Namen und Ihre Telefonnummer.
            Ich rufe Sie zeitnah und unverbindlich zurück.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* ── Footer & Disclaimer ────────────────────────────────────────── */}
      <footer className="bg-primary/95 border-t border-sand/10 py-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sand/50 text-base leading-relaxed mb-4">
            <strong>Medizinischer Hinweis:</strong> Ihre Sicherheit steht an erster Stelle. Bitte konsultieren Sie vor Aufnahme eines neuen Trainingsprogramms Ihren Hausarzt, insbesondere bei bestehenden Vorerkrankungen.
          </p>
          <p className="text-sand/40 text-sm">
            &copy; {new Date().getFullYear()} Fitness Würzburg. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>

    </main>
  );
}
