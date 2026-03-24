export default function TrustSection() {
  return (
    <section className="py-28 bg-sand px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-golden gap-16 items-center">

        {/* LEFT — Text (61.8%) */}
        <div>
          <p className="text-accent font-semibold text-lg tracking-widest uppercase mb-5">
            Ihr Trainer
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8 leading-tight">
            Grüß Gott,<br />ich bin für Sie da.
          </h2>
          <p className="text-xl text-foreground/80 mb-6 leading-relaxed">
            Als <strong>zertifizierter Trainer für Seniorensport</strong> und Experte für Sturzprävention begleite ich seit über 10 Jahren Seniorinnen und Senioren in Würzburg
            dabei, die Beweglichkeit und Sicherheit im Alltag zurückzugewinnen.
          </p>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed border-l-4 border-accent pl-6">
            Mein Ziel ist nicht, dass Sie einen Marathon laufen —
            sondern dass Sie schmerzfrei Treppen steigen, sicher spazieren gehen
            und den Alltag mit Ihren Enkeln genießen können.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md border border-primary/5 relative mt-6">
            <span className="text-accent/20 absolute -top-4 right-4 text-7xl font-serif leading-none">"</span>
            <p className="text-lg italic text-foreground/80 mb-3 relative z-10 leading-relaxed">
              Dank des behutsamen Trainings traue ich mich endlich wieder alleine in die Stadt und habe kaum noch Schmerzen beim Gehen.
            </p>
            <p className="font-bold text-primary uppercase tracking-wide text-sm">— Helga S., 74 Jahre</p>
          </div>
        </div>

        {/* RIGHT — Portrait (38.2%) */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-sand-dark shadow-2xl relative bg-primary/10 flex items-center justify-center">
            <span className="text-primary/40 font-semibold text-center px-6">Portrait<br/>Trainer</span>
          </div>
        </div>

      </div>
    </section>
  );
}
