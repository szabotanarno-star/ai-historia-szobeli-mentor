import React from "react";
import { GeneratedThesis } from "../types";

interface ThesisCardProps {
  thesis: GeneratedThesis;
}

const ThesisCard: React.FC<ThesisCardProps> = ({ thesis }) => {
  return (
    <section className="bg-cream py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">📝 Generált Tétel</h2>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tétel fejléc */}
          <div className="bg-gradient-to-r from-navy to-blue-900 text-white p-6">
            <h3 className="text-2xl font-bold mb-3">{thesis.title}</h3>
            <div className="flex flex-wrap gap-2">
              {thesis.keyTerms.map((term, idx) => (
                <span
                  key={idx}
                  className="bg-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{term}
                </span>
              ))}
            </div>
          </div>

          {/* Tartalom */}
          <div className="p-6 space-y-6">
            {/* Szöveges forrás */}
            <div>
              <h4 className="text-xl font-semibold text-navy mb-3">📖 Szöveges Forrás</h4>
              <div className="bg-blue-50 border-l-4 border-navy p-4 rounded italic text-gray-800">
                "{thesis.textSource.content}"
              </div>
              <div className="mt-2 text-sm text-slate-custom">
                <p>
                  <strong>Forrás típusa:</strong> {thesis.textSource.type}
                </p>
                {thesis.textSource.author && (
                  <p>
                    <strong>Szerző:</strong> {thesis.textSource.author}
                  </p>
                )}
                {thesis.textSource.period && (
                  <p>
                    <strong>Időszak:</strong> {thesis.textSource.period}
                  </p>
                )}
              </div>
            </div>

            {/* Képi forrás */}
            <div>
              <h4 className="text-xl font-semibold text-navy mb-3">🖼️ Képi Forrás</h4>
              <img
                src={thesis.imageSource.url}
                alt={thesis.imageSource.caption}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-slate-custom">
                <strong>Felirat:</strong> {thesis.imageSource.caption}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThesisCard;
