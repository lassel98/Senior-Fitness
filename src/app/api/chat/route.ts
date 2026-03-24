import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: anthropic('claude-3-5-sonnet-20240620'),
    system: `Du bist der hilfreiche KI-Assistent für die Website "Senior Fitness Würzburg". 
Dein Ziel ist es, Senioren (oder deren Angehörigen) freundlich und kompetent Fragen zum Training zu beantworten.
WICHTIGE VERTRIEBS-INFORMATIONEN (falls gefragt):
- Preise: Abo "Basic" kostet 29€/Monat (Online), "Premium" 79€/Monat (Online & 1x Live), "Exklusiv" 149€/Monat (inkl. Personal Training vor Ort in Würzburg).
- Standorte: Fokus liegt auf Mainfranken (Würzburg, Ochsenfurt, Kitzingen).
Halte deine Antworten kurz, verständlich und ohne Fremdwörter. Biete immer an, ein kostenloses Erstgespräch zu buchen.`,
    messages,
  });

  return result.toDataStreamResponse();
}
