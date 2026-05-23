import React from "react";
import { OFFICIAL_SOURCES } from "../data/knowledgeBase";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">📚 Felhasznált Hivatalos Források</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {OFFICIAL_SOURCES.map((source, idx) => (
            <a
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-blue-900 rounded-lg hover:bg-blue-800 transition transform hover:scale-105"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{source.icon}</span>
                <div>
                  <p className="font-semibold">{source.name}</p>
                  <p className="text-blue-200 text-sm">{source.url}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-blue-700 pt-6">
          <p className="text-blue-100 text-sm">
            <strong>Az alkalmazás célja:</strong> Segítségnyújtás a magyar történelem érettségi
            szóbeli vizsga felkészülésében a Nemzeti Alaptantervben (NAT 2020) meghatározott
            tematika alapján.
          </p>
          <p className="text-blue-100 text-sm mt-3">
            <strong>Kitöltés:</strong> Az értékelés a 2023-as érettségi vizsgaszabályzat
            szempontjai szerint történik: szakkifejezések, törvények/események, térbeli-időbeli
            tájékozódás.
          </p>
        </div>

        <div className="border-t border-blue-700 mt-6 pt-6 text-center text-blue-200">
          <p>© 2024 AI Történelem Szóbeli Mentor | Készült oktatási célokra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
