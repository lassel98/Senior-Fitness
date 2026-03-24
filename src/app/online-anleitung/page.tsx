import Link from 'next/link';

export default function OnlineGuidePage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-dark tracking-tight">
            Fitness <span className="text-accent">Würzburg</span>
          </Link>
          <Link href="/#kontakt" className="hidden sm:inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-primary-dark transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </header>

      <section className="pt-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-primary-dark mb-8 text-balance text-center">
          So funktioniert das Training über Video
        </h1>
        <p className="text-xl lg:text-2xl text-slate-700 text-center mb-16 leading-relaxed text-balance">
          Sie benötigen keine besonderen Computer-Kenntnisse. Ein Laptop, Tablet oder Smartphone reicht völlig aus.
        </p>

        <div className="space-y-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 relative">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">1</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 mt-2">Sie erhalten einen Link</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Vor unserem Training schicke ich Ihnen eine E-Mail oder WhatsApp-Nachricht. Darin finden Sie einen blauen Link. Auf diesen müssen Sie einfach nur klicken.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 relative">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">2</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 mt-2">Kamera & Mikrofon freigeben</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Ihr Gerät wird Sie fragen, ob es die Kamera und das Mikrofon verwenden darf. Bitte bestätigen Sie dies mit <strong className="text-primary-dark">"Zulassen"</strong> (oft eine blaue oder grüne Schaltfläche), damit wir uns sehen und hören können.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 relative">
            <div className="absolute -top-6 -left-6 w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">3</div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6 mt-2">Das Training beginnt</h2>
            <p className="text-xl text-slate-700 leading-relaxed">
              Sie sehen mich nun groß auf Ihrem Bildschirm. Stellen Sie Ihr Gerät so auf einen Tisch oder Stuhl, dass ich Sie vom Kopf bis zu den Knien sehen kann. Wenn etwas nicht klappt, rufen Sie mich einfach schnell auf dem Telefon an und ich helfe Ihnen dabei!
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-6">Noch unsicher? Kein Problem!</h2>
          <a href="/#kontakt" className="inline-block bg-accent text-white px-10 py-5 rounded-lg font-bold text-xl lg:text-2xl hover:bg-accent-dark transition-colors shadow-xl">
            Lassen Sie uns kurz telefonieren
          </a>
        </div>
      </section>
    </main>
  );
}
