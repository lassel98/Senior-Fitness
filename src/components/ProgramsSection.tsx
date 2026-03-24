export default function ProgramsSection() {
  return (
    <section className="py-28 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-lg tracking-widest uppercase mb-4">
            Ihre Gesundheit im Fokus
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
            Maßgeschneidertes Training für Senioren
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Unser Körper verändert sich – unser Training auch. Wir konzentrieren uns auf drei Säulen, die Ihnen helfen, lange selbstständig und mobil zu bleiben. Alle Übungen können sicher im Sitzen oder mit festhalten durchgeführt werden.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 rounded-xl bg-sand/30 border border-primary/10 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-accent text-4xl leading-none font-serif pt-1">1</span>
              Balance
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sicherer Gang im Alltag, Treppensteigen ohne Geländer und weniger Angst vor dem Fallen. Wir stärken ganz gezielt Ihre Koordinationsfähigkeit.
            </p>
          </div>
          
          <div className="p-10 rounded-xl bg-sand/30 border border-primary/10 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-accent text-4xl leading-none font-serif pt-1">2</span>
              Kraft
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sanfter Muskelaufbau zum Schutz der Gelenke (Entlastung bei Arthrose und Osteoporose). Stärken Sie Arme, Beine und Rücken für den Alltag.
            </p>
          </div>

          <div className="p-10 rounded-xl bg-sand/30 border border-primary/10 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-accent text-4xl leading-none font-serif pt-1">3</span>
              Mobilität
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Lösen Sie lästige Verspannungen und erhalten Sie sich Ihre Flexibilität – um völlig schmerzfrei nach Dingen zu greifen oder aufzustehen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
