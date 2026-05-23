import React from "react";

interface HeaderProps {
  onDownloadGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadGuide }) => {
  return (
    <header className="bg-gradient-to-r from-navy to-blue-900 text-white py-8 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              🎓 AI Történelem Szóbeli Mentor
            </h1>
            <p className="text-blue-100 text-lg">
              A magyar történelem érettségi szóbeli vizsga sikeres teljesítéséhez szükséges tudás,
              hivatalos NAT 2020 tematika alapján
            </p>
          </div>
          <button
            onClick={onDownloadGuide}
            className="mt-6 md:mt-0 px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-md"
          >
            📥 Útmutató letöltése
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
