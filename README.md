# 🎓 AI Történelem Szóbeli Mentor

Modern, reszponzív webalkalmazás a magyar történelem érettségi szóbeli vizsgakövetelmények alapján (NAT 2020 tematika).

## 📋 Projekt Leírása

Az alkalmazás a következő funkcionalitásokat biztosítja:

### 1. **Fejléc és Útmutató**
- Vonzó, professzionális design
- Letölthető "Útmutató a sikeres vizsgához" gomb
- Strukturált TXT segédlet az érettségi értékelési szempontjaival

### 2. **Tételgenerátor Űrlap**
- Dinamikus kategória választó (5 NAT 2020 témakör)
- Szöveges beviteli mező konkrét témához
- Intuitív "Tétel Generálása" gomb

### 3. **Generált Tétel Kártya**
- Pontos tétel cím és kulcsfogalmak
- **Szöveges forrás**: Történelmi idézetek
- **Képi forrás**: Beágyazott illusztrációk

### 4. **Hangalapú Felelet és AI Javítás**
- Web Speech API integráció (magyar nyelvű)
- Élő szövegdoboz a felelethez
- 50 pontos érettségi szempontok szerinti értékelés:
  - Szakkifejezések (0-20 pont)
  - Törvények/Események (0-15 pont)
  - Térbeli-Időbeli Tájékozódás (0-15 pont)

### 5. **Lábléc (Forráslinkek)**
- Dinamikus hivatkozások
- Nemzeti Köznevelési Portál (NKP)
- Wikipédia és egyéb hivatalos források

## 🏗️ Projekt Struktúra

```
ai-historia-szobeli-mentor/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Fejléc komponens
│   │   ├── ThesisGenerator.tsx # Tételgenerátor
│   │   ├── ThesisCard.tsx      # Tétel megjelenítés
│   │   ├── SpeechRecorder.tsx  # Hangfelület
│   │   ├── EvaluationResult.tsx# Értékelési eredmények
│   │   └── Footer.tsx          # Lábléc
│   ├── data/
│   │   └── knowledgeBase.ts    # NAT 2020 témakörök, források
│   ├── types/
│   │   └── index.ts            # TypeScript típusdefiníciók
│   ├── App.tsx                 # Főalkalmazás
│   ├── index.tsx               # React entry point
│   └── index.css               # Globális stílusok
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Technológiák

- **React 18** - UI keretrendszer
- **TypeScript** - Típusbiztos JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Web Speech API** - Hangfelismerés (magyar)
- **Unsplash** - Képforrások

## 🚀 Telepítés és Futtatás

### Előfeltételek
- Node.js 16+ és npm

### Lépések

1. **Repository klónozása**
```bash
git clone https://github.com/szabotanarno-star/ai-historia-szobeli-mentor.git
cd ai-historia-szobeli-mentor
```

2. **Függőségek telepítése**
```bash
npm install
```

3. **Fejlesztői szerver indítása**
```bash
npm start
```

4. **Buildel (produkción)**
```bash
npm run build
```

## 📚 NAT 2020 Témakörök

1. **I. Gazdaság, gazdaságpolitika, anyagi kultúra**
   - Gazdasági rendszerek, kereskedelmi kapcsolatok

2. **II. Népesség, település, életmód**
   - Demográfiai változások, urbanizáció

3. **III. Egyén, közösség, társadalom**
   - Társadalmi szerkezet, csoportok, identitás

4. **IV. Politikai intézmények, eszmék, ideológiák**
   - Államberendezkedés, politikai gondolkodás

5. **V. Nemzetközi kapcsolatok, külpolitika**
   - Diplomácia, háborúk, szövetségek

## 📖 Megjelenítésre kerülő Előadási Szempontok (50 pont)

| Szempont | Pontszám | Leírás |
|----------|----------|--------|
| Szakkifejezések | 0-20 | Történelmi fordulatok, szaknyelv |
| Törvények/Események | 0-15 | Adatok, törvények, kronológia |
| Térbeli-Időbeli | 0-15 | Periódusok, helyek, oksági kapcsolatok |

## 🌐 Hivatalos Források

- 📚 [Nemzeti Köznevelési Portál (NKP)](https://www.nkp.hu)
- 🌐 [Wikipédia Enciklopédia](https://hu.wikipedia.org)
- 🎓 [Magyar Oktatási Portál](https://www.oktatas.hu)
- 📖 [Nemzeti Emlékezet Bizottság (NEB)](https://neb.hu)

## 🎨 Dizájn Téma

- **Szín séma**: Mélykék (Navy) / Fehér / Palaszürke (Slate)
- **Stílus**: Professzionális, letisztult, iskolai jellegű
- **Reszponzív**: Mobilra, tablettre és desktopra optimalizált

## 📱 Böngészőkompatibilitás

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ⚠️ Web Speech API támogatás szükséges

## 🤝 Közreműködés

Javaslatok, bug reportok: nyiss egy GitHub issue-t!

## 📄 Licenc

MIT Licenc - Szabad felhasználás oktatási célokra

---

**Készült**: 2024
**Cél**: Magyar történelem érettségi szóbeli vizsga felkészítés
