'use client';

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-white shadow-lg hover:bg-accent-dark transition-colors flex items-center gap-2"
        aria-label="Chat öffnen"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="font-medium hidden sm:inline text-lg text-white">Fragen?</span>}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col overflow-hidden text-black transition-all duration-300 transform origin-bottom-right ${isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-75 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-accent p-4 text-white">
          <h3 className="font-bold text-lg">Senior Fitness Assistenz</h3>
          <p className="text-sm opacity-90">Wir beantworten gerne Ihre Fragen.</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-4 text-lg">
              Hallo! Wie kann ich Ihnen rund um unser Fitness-Angebot helfen?
            </div>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl text-[17px] ${
                  m.role === 'user'
                    ? 'bg-accent text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] p-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                <span className="animate-pulse">Ich tippe...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ihre Frage..."
              className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent text-lg"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-accent text-white rounded-xl hover:bg-accent-dark disabled:opacity-50 min-w-[48px] flex justify-center items-center"
              aria-label="Nachricht senden"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
