import React, { useState } from "react";
import { TopicCategory, GeneratedThesis } from "../types";
import { TOPIC_CATEGORIES, KNOWLEDGE_BASE } from "../data/knowledgeBase";

interface ThesisGeneratorProps {
  onThesisGenerated: (thesis: GeneratedThesis) => void;
}

const ThesisGenerator: React.FC<ThesisGeneratorProps> = ({ onThesisGenerated }) => {
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory>("economy");
  const [specificTopic, setSpecificTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!specificTopic.trim()) {
      alert("Kérjük, adj meg egy konkrét témát!");
      return;
    }

    setIsLoading(true);

    // Szimulált API hívás
    setTimeout(() => {
      // Egyszerű keresés a tudásbázisban
      const matchedThesis = Object.values(KNOWLEDGE_BASE).find(
        (thesis) =>
          thesis.category === selectedCategory &&
          thesis.title.toLowerCase().includes(specificTopic.toLowerCase())
      );

      if (matchedThesis) {
        onThesisGenerated(matchedThesis);
      } else {
        // Fallback: generikus tétel a kategória alapján
        const generatedThesis: GeneratedThesis = {
          id: `thesis-${Date.now()}`,
          title: `${specificTopic} - ${TOPIC_CATEGORIES.find((c) => c.value === selectedCategory)?.label}`,
          category: selectedCategory,
          keyTerms: ["kulcsfogalom1", "kulcsfogalom2", "kulcsfogalom3"],
          textSource: {
            content: `A ${specificTopic} a magyar történelem fontos része. Ennek a témának több aspektusa van, amely a szóbeli vizsgán várható.`,
            type: "document",
            period: "Ismeretlen időszak",
          },
          imageSource: {
            url: "https://images.unsplash.com/photo-1507842965871-8a69f14d0b0f?w=400",
            caption: "Történelmi dokumentáció",
            source: "unsplash",
          },
          timestamp: new Date(),
        };
        onThesisGenerated(generatedThesis);
      }

      setIsLoading(false);
      setSpecificTopic("");
    }, 1000);
  };

  return (
    <section className="bg-cream py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">📋 Tételgenerátor</h2>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          {/* Kategória select */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Válassz egy témakört:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as TopicCategory)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy bg-white"
            >
              {TOPIC_CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <p className="text-sm text-slate-custom mt-2">
              {TOPIC_CATEGORIES.find((c) => c.value === selectedCategory)?.description}
            </p>
          </div>

          {/* Konkrét téma input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Konkrét téma (pl. "Hunyadi Mátyás" vagy "Az ipari forradalom"):
            </label>
            <input
              type="text"
              value={specificTopic}
              onChange={(e) => setSpecificTopic(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleGenerate()}
              placeholder="Írd be a témát..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
            />
          </div>

          {/* Generálás gomb */}
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full py-3 bg-navy text-white font-semibold rounded-lg hover:bg-blue-900 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isLoading ? "⏳ Tétel generálása..." : "🚀 Tétel Generálása"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThesisGenerator;
