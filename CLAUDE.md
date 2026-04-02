# CLAUDE.md

## Project Context
Marketing-Website für ein Senior-Fitness-Personal-Training-Unternehmen in Würzburg & Mainfranken, mit KI-Chat-Widget, Lead-Formular und N8N-CRM-Integration.

## Tech Stack
- Framework: Next.js 14 (App Router, SSR)
- Language: TypeScript 5
- Database: keine (statische Seite mit externen Integrationen)
- Styling: Tailwind CSS
- AI: Vercel AI SDK + Anthropic Claude 3.5 Sonnet
- Backend: Next.js API Routes, N8N Webhook
- Deployment: Vercel

## Key Directories
- `src/app/` — Seiten und API-Routen (App Router)
- `src/app/api/chat/` — Streaming-Endpoint für den AI-Chat
- `src/app/api/contact/` — Kontaktformular → N8N-Webhook
- `src/app/online-anleitung/` — Sekundäre Seite (Online-Anleitung)
- `src/components/` — Wiederverwendbare React-Komponenten

## Commands
- `npm run dev` — Dev-Server starten (localhost:3000)
- `npm run build` — Produktions-Build
- `npm start` — Produktions-Server starten
- `npm run lint` — ESLint ausführen

---

## How I Want You to Work

### Before Coding
- Klärende Fragen stellen bevor angefangen wird
- Bei komplexen Aufgaben: Plan entwerfen und bestätigen lassen, bevor Code geschrieben wird
- Im Zweifel fragen — nicht annehmen

### While Coding
- Vollständigen, funktionierenden Code schreiben — keine Platzhalter, keine TODOs
- Einfach und lesbar über clever
- Bestehende Muster im Codebase befolgen
- Eine Änderung nach der anderen, währenddessen verifizieren

### After Coding
- Linter ausführen bevor fertiggestellt wird
- Zusammenfassen was geändert wurde und warum

---

## Code Style
- ES Modules (import/export)
- Funktionale Komponenten mit Hooks
- TypeScript-Typen auf allen Funktionen
- Beschreibende Variablennamen
- Kein auskommentierter Code
- Kommentare auf Deutsch

## Do Not
- `.env.local` anfassen oder Umgebungsvariablen ändern
- Direkt auf `main` committen
- Platzhalter-Code oder TODOs hinterlassen
- Änderungen außerhalb des Aufgabenbereichs machen
- Annehmen — fragen wenn unklar
- Preise im AI-Chat-Prompt (Basic €29 / Premium €79 / Exklusiv €149) ohne Rückfrage ändern

---

## Verification Loop
Nach dem Abschluss einer Aufgabe verifizieren:
1. Code kompiliert ohne Fehler (`npm run build`)
2. Keine Linting-Warnungen (`npm run lint`)
3. Änderungen entsprechen der ursprünglichen Anfrage

Falls etwas fehlschlägt, vor Abschluss beheben.

---

## Quick Commands
Bei diesen Kürzeln folgendes tun:

**"plan"** — Aufgabe analysieren, Vorgehensweise entwerfen, Klärungsfragen stellen, noch keinen Code schreiben

**"build"** — Plan umsetzen, verifizieren dass es funktioniert

**"check"** — Änderungen wie ein skeptischer Senior-Dev reviewen: Bugs, Edge Cases, Code-Qualität

**"verify"** — Linting ausführen, Ergebnisse zusammenfassen

**"done"** — Zusammenfassen was geändert wurde, was getestet wurde, und Hinweise

---

## Success Criteria
Eine Aufgabe ist abgeschlossen wenn:
- [ ] Code funktioniert wie angefordert
- [ ] Kein Build-Fehler
- [ ] Keine Linting-Warnungen
- [ ] Änderungen sind minimal und fokussiert
- [ ] Ich kann verstehen was getan wurde ohne Erklärung

---

## Notes
- Zielgruppe: Deutschsprachige Senioren (65+) — Sprache im Frontend immer Deutsch, groß und lesbar.
- Farbschema: Dunkelgrün (#1e3a2f) + Gold (#c9942a) + Sand (#f8f7f4) — nicht ohne Rückfrage ändern.
- Layout: Golden-Ratio-Grid (61.8% / 38.2%) im Hero-Bereich.
- KI-Chat-Kontext (Preise, Angebote) ist geschäftskritisch — nie ohne Rückfrage ändern.

---

## Senior-First Design Rules (Mandatory)
Diese Regeln sind zwingend für alle UI-Änderungen einzuhalten:
1. **Lesbarkeit**: Fließtext immer > 17px (Standard: 18px / 1.125rem).
2. **Klick-Ziele**: Interaktive Elemente (Buttons, Links) mindestens 48x48px groß.
3. **Kontrast**: Text-zu-Hintergrund Kontrastverhältnis mindestens 4.5:1.
4. **Layout**: Keine überfüllten Sektionen. Viel White-Space nutzen.
5. **Sprache**: Klare, direkte Ansprache ohne Fachjargon.
