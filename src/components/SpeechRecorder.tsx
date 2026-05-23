import React, { useState, useRef } from "react";
import { EvaluationResult } from "../types";

interface SpeechRecorderProps {
  onEvaluationComplete: (result: EvaluationResult) => void;
}

const SpeechRecorder: React.FC<SpeechRecorderProps> = ({ onEvaluationComplete }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("A böngésződ nem támogatja a Web Speech API-t!");
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = "hu-HU";

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      setTranscript("");
    };

    recognitionRef.current.onresult = (event: any) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcript + " ");
        } else {
          interimTranscript += transcript;
        }
      }

      if (interimTranscript) {
        setTranscript((prev) => {
          const base = prev;
          return base.endsWith(" ") ? base + interimTranscript : base + " " + interimTranscript;
        });
      }
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech Recognition error", event.error);
      alert(`Hiba: ${event.error}`);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const evaluateSpeech = () => {
    if (!transcript.trim()) {
      alert("Kérjük, először rögzítsd fel a feleleteted!");
      return;
    }

    setIsEvaluating(true);

    // Szimulált AI értékelés
    setTimeout(() => {
      const wordCount = transcript.split(/\s+/).length;
      const terminologyScore = Math.min(20, Math.floor((wordCount / 50) * 20));
      const eventsScore = Math.min(15, Math.floor(Math.random() * 15) + 5);
      const spatialScore = Math.min(15, Math.floor(Math.random() * 15) + 5);

      const totalScore = terminologyScore + eventsScore + spatialScore;

      const result: EvaluationResult = {
        criteria: {
          terminology: terminologyScore,
          lawsAndEvents: eventsScore,
          spatialTemporalOrientation: spatialScore,
        },
        totalScore,
        feedback: `Jó próbálkozás! Szóbeli hossz: ${wordCount} szó. Fokozz a szaknyelvi pontosságon és az eseménysorrend kronológiai rendezésén.`,
        timestamp: new Date(),
      };

      onEvaluationComplete(result);
      setIsEvaluating(false);
    }, 1500);
  };

  return (
    <section className="bg-white py-8 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">🎤 Hangalapú Felelet és AI Javítás</h2>

        <div className="bg-blue-50 rounded-lg shadow-md p-6 space-y-6">
          {/* Kontrollgombok */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={startRecording}
              disabled={isListening}
              className="flex-1 py-3 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🔴 Felelet rögzítése
            </button>
            <button
              onClick={stopRecording}
              disabled={!isListening}
              className="flex-1 py-3 px-4 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ⏹️ Rögzítés leállítása
            </button>
            <button
              onClick={evaluateSpeech}
              disabled={isEvaluating || !transcript.trim()}
              className="flex-1 py-3 px-4 bg-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEvaluating ? "⏳ Értékelés..." : "✅ Felelet értékelése"}
            </button>
          </div>

          {/* Szövegdoboz */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              📝 Beszédből Szövegre (Élő szövegdoboz):
            </label>
            <div className="bg-white p-4 rounded-lg border-2 border-navy min-h-32 max-h-48 overflow-y-auto">
              <p className={isListening ? "text-blue-600 font-semibold" : "text-gray-800"}>
                {transcript || (isListening ? "🎧 Hallgatás... kezdj el beszélni!" : "A feleletod itt jelenik meg...")}
              </p>
            </div>
          </div>

          {/* Státusz */}
          {isListening && (
            <div className="flex items-center gap-2 text-red-600 font-semibold animate-pulse">
              🔴 Élő felvétel
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeechRecorder;
