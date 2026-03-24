'use client';

import { useState } from 'react';

export default function ServiceToggle() {
  const [activeTab, setActiveTab] = useState<'vorort' | 'online'>('vorort');

  return (
    <section className="py-28 bg-sand-dark px-8 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-semibold text-lg tracking-widest uppercase mb-5 text-center">
          Ihre Wahl
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4 leading-tight">
          Wie möchten Sie trainieren?
        </h2>
        <p className="text-xl text-center text-foreground/70 mb-14 text-balance max-w-2xl mx-auto leading-relaxed">
          Wählen Sie die Variante, die sich für Sie am sichersten und angenehmsten anfühlt.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('vorort')}
            className={`px-8 py-5 rounded font-bold text-xl transition-all ${activeTab === 'vorort'
              ? 'bg-primary text-sand shadow-xl'
              : 'bg-white text-primary border-2 border-primary/20 hover:border-primary/60'
            }`}
            aria-pressed={activeTab === 'vorort'}
          >
            Vor-Ort in Würzburg
          </button>
          <button
            onClick={() => setActiveTab('online')}
            className={`px-8 py-5 rounded font-bold text-xl transition-all ${activeTab === 'online'
              ? 'bg-primary text-sand shadow-xl'
              : 'bg-white text-primary border-2 border-primary/20 hover:border-primary/60'
            }`}
            aria-pressed={activeTab === 'online'}
          >
            Bequem via Video-Call
          </button>
        </div>

        {/* Content Panel */}
        <div className="bg-white p-10 lg:p-16 rounded-xl shadow-xl border border-primary/10 max-w-4xl mx-auto">
          {activeTab === 'vorort' ? (
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Persönliche Betreuung bei Ihnen oder im Park</h3>
              <ul className="space-y-4 text-xl text-foreground/80 mb-12 leading-relaxed list-none">
                {[
                  'Ich komme zu Ihnen nach Hause oder wir treffen uns an der Residenz, am Mainufer oder wo Sie sich wohlfühlen.',
                  'Kein Studio-Trubel — absoluter Fokus auf Sie, in Ihrem eigenen Tempo.',
                  'Ich bringe alle nötigen, seniorengerechten Trainingsgeräte mit.',
                  'Schwerpunkt: Gangsicherheit, Sturzprävention und Alltagsbeweglichkeit.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-accent font-bold text-2xl mt-0.5 leading-none">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="inline-block bg-accent text-white px-8 py-5 rounded font-bold text-xl hover:bg-accent-dark transition-colors">
                Jetzt Rückruf anfragen
              </a>
            </div>
          ) : (
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Sicher via Video trainieren (Live-Online)</h3>
              <ul className="space-y-4 text-xl text-foreground/80 mb-12 leading-relaxed list-none">
                {[
                  'Wir sehen und hören uns live — ganz einfach per Link, den ich Ihnen schicke.',
                  'Sparen Sie sich den Fahrtweg und trainieren Sie sicher in Ihrem Zuhause.',
                  'Ich leite jede Übung in Ihrem Tempo an und achte genau auf Ihre Ausführung.',
                  'Technik-Check vorab inklusive: Ich helfe Ihnen in Ruhe bei der Einrichtung.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-accent font-bold text-2xl mt-0.5 leading-none">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#kontakt" className="inline-block bg-accent text-white px-8 py-5 rounded font-bold text-xl hover:bg-accent-dark transition-colors text-center">
                  Gespräch vereinbaren
                </a>
                <a href="/online-anleitung" className="inline-block bg-white text-primary border-2 border-primary/30 px-8 py-5 rounded font-bold text-xl hover:border-primary transition-colors text-center">
                  Wie funktioniert das?
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
