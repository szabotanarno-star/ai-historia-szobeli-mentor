import React, { useState } from "react";
import Header from "./components/Header";
import ThesisGenerator from "./components/ThesisGenerator";
import ThesisCard from "./components/ThesisCard";
import SpeechRecorder from "./components/SpeechRecorder";
import EvaluationResult from "./components/EvaluationResult";
import Footer from "./components/Footer";
import { GeneratedThesis, EvaluationResult as EvaluationResultType } from "./types";
import "./index.css";

function App() {
  const [currentThesis, setCurrentThesis] = useState<GeneratedThesis | null>(null);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResultType | null>(null);

  const handleDownloadGuide = () => {
    const guideContent = `
AI TÖRTÉNELEM SZÓBELI MENTOR - ÚTMUTATÓ A SIKERES VIZSGÁHOZ
===========================================================

1. ÉRETTSÉGI ÉRTÉKELÉSI SZEMPONTOK (50 PONT):

a) SZAKKIFEJEZÉSEK (0-20 PONT):
   - Történelmi fordulatok, események pontos megnevezése
   - Szaknyelvi kifejezések helyes alkalmazása
   - Fogalmak precíz meghatározása

b) TÖRVÉNYEK ÉS ESEMÉNYEK (0-15 PONT):
   - Történelmi adatok pontos ismerete
   - Fontos törvények, egyezmények felsorolása
   - Események kronológiai sorrendje

c) TÉRBELI-IDŐBELI TÁJÉKOZÓDÁS (0-15 PONT):
   - Történelmi periódusok meghatározása
   - Földrajzi helyek azonosítása
   - Oksági kapcsolatok felismerése

2. FELKÉSZÜLÉS LÉPÉSEKBEN:

1. Válassz egy témakört az 5 NAT 2020 témakörből
2. Add meg a konkrét témádat
3. Tanulmányozd a generált forrásokat (szöveg + kép)
4. Dolgozd fel a kulcsfogalmakat
5. Készítsd elő a szóbeli feleleteted
6. Rögzítsd be hangon és kérj visszajelzést az AI-tól

3. NAT 2020 TÉMAKÖRÖK:

I.   Gazdaság, gazdaságpolitika, anyagi kultúra
II.  Népesség, település, életmód
III. Egyén, közösség, társadalom
IV.  Politikai intézmények, eszmék, ideológiák
V.   Nemzetközi kapcsolatok, külpolitika

4. HIVATALOS FORRÁSOK:

- Nemzeti Köznevelési Portál (NKP): https://www.nkp.hu
- Wikipédia: https://hu.wikipedia.org
- Magyar Oktatási Portál: https://www.oktatas.hu
- Nemzeti Emlékezet Bizottság: https://neb.hu

5. SIKERES VIZSGA TIPPJEI:

✓ Strukturált, logikus felépítés
✓ Pontos szakkifejezések
✓ Kronológiai rendezés
✓ Oksági kapcsolatok
✓ Források hivatkozása
✓ Kérdések feldolgozása

Sok sikert a vizsgához!
    `;

    const blob = new Blob([guideContent], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Útmutató_Sikeres_Vizsgához.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header onDownloadGuide={handleDownloadGuide} />
      <ThesisGenerator onThesisGenerated={setCurrentThesis} />

      {currentThesis && <ThesisCard thesis={currentThesis} />}

      <SpeechRecorder onEvaluationComplete={setEvaluationResult} />

      {evaluationResult && <EvaluationResult result={evaluationResult} />}

      <Footer />
    </div>
  );
}

export default App;
