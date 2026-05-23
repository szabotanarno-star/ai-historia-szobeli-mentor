import React from "react";
import { EvaluationResult, EvaluationCriteria } from "../types";
import { EVALUATION_GUIDELINES } from "../data/knowledgeBase";

interface EvaluationResultProps {
  result: EvaluationResult;
}

const CriteriaBar: React.FC<{ label: string; score: number; maxScore: number }> = ({
  label,
  score,
  maxScore,
}) => {
  const percentage = (score / maxScore) * 100;
  const color =
    percentage >= 80 ? "bg-green-500" : percentage >= 60 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-gray-700">{label}</span>
        <span className="font-bold text-navy">
          {score}/{maxScore}
        </span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
        <div className={`${color} h-full transition-all duration-500`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

const EvaluationResultComponent: React.FC<EvaluationResultProps> = ({ result }) => {
  const totalPercentage = (result.totalScore / 50) * 100;
  const totalColor =
    totalPercentage >= 80 ? "text-green-600" : totalPercentage >= 60 ? "text-yellow-600" : "text-red-600";

  return (
    <section className="bg-cream py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">📊 Értékelési Eredmény</h2>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Összesített pontszám */}
          <div className="text-center">
            <div className={`text-5xl font-bold ${totalColor} mb-2`}>
              {result.totalScore}/50
            </div>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-3xl ${i < Math.round(totalPercentage / 20) ? "text-yellow-400" : "text-gray-300"}`}>
                  ⭐
                </span>
              ))}
            </div>
            <p className="text-lg font-semibold text-gray-700">
              {totalPercentage >= 80
                ? "Kiváló teljesítmény! 🎉"
                : totalPercentage >= 60
                ? "Jó próbálkozás! Továbbfejlesztés szükséges."
                : "Erős fejlesztési lehetőség előtt állsz. Gyakorolj tovább!"}
            </p>
          </div>

          {/* Részletes kritériumok */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-4">Részletes Értékelés:</h3>
            <CriteriaBar
              label="1. Szakkifejezések (Terminológia)"
              score={result.criteria.terminology}
              maxScore={20}
            />
            <CriteriaBar
              label="2. Törvények és Események"
              score={result.criteria.lawsAndEvents}
              maxScore={15}
            />
            <CriteriaBar
              label="3. Térbeli-Időbeli Tájékozódás"
              score={result.criteria.spatialTemporalOrientation}
              maxScore={15}
            />
          </div>

          {/* Visszajelzés */}
          <div className="bg-blue-50 border-l-4 border-navy p-4 rounded">
            <h4 className="font-semibold text-navy mb-2">💡 Személyre Szabott Visszajelzés:</h4>
            <p className="text-gray-800">{result.feedback}</p>
          </div>

          {/* Fejlesztési javaslatok */}
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <h4 className="font-semibold text-green-700 mb-2">📈 Fejlesztési Javaslatok:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-800">
              <li>
                <strong>Terminológia:</strong> {EVALUATION_GUIDELINES.terminology}
              </li>
              <li>
                <strong>Történelmi Ismeretek:</strong> {EVALUATION_GUIDELINES.lawsAndEvents}
              </li>
              <li>
                <strong>Orientáció:</strong> {EVALUATION_GUIDELINES.spatialTemporal}
              </li>
            </ul>
          </div>

          {/* Időbélyeg */}
          <div className="text-sm text-slate-custom text-right">
            Értékelve: {result.timestamp.toLocaleString("hu-HU")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvaluationResultComponent;
