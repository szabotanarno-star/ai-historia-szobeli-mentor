import { TopicCategoryOption, GeneratedThesis, OfficialSource } from "../types";

// NAT 2020 Témakörök
export const TOPIC_CATEGORIES: TopicCategoryOption[] = [
  {
    value: "economy",
    label: "I. Gazdaság, gazdaságpolitika, anyagi kultúra",
    description: "Gazdasági rendszerek, kereskedelmi kapcsolatok, termelési módok",
  },
  {
    value: "population",
    label: "II. Népesség, település, életmód",
    description: "Demográfiai változások, urbanizáció, mindennapi élet",
  },
  {
    value: "society",
    label: "III. Egyén, közösség, társadalom",
    description: "Társadalmi szerkezet, csoportok, identitás, konfliktusok",
  },
  {
    value: "politics",
    label: "IV. Politikai intézmények, eszmék, ideológiák",
    description: "Államberendezkedés, politikai gondolkodás, ideológiák",
  },
  {
    value: "international",
    label: "V. Nemzetközi kapcsolatok, külpolitika",
    description: "Diplomácia, háborúk, szövetségek, nemzetközi jog",
  },
];

// Szimulált tudásbázis - Témakörönkénti témajavaslatok
export const KNOWLEDGE_BASE: Record<string, GeneratedThesis> = {
  "Hunyadi Mátyás": {
    id: "hunyadi-matyas",
    title: "Hunyadi Mátyás és az önfenntartó királyi hatalom",
    category: "politics",
    keyTerms: [
      "fekete sereg",
      "humanizmus",
      "corvinák",
      "királyi abszolutizmus",
      "Magyarország nagyhatalmúsodása",
    ],
    textSource: {
      content:
        "Mátyás királyunk a türkök ellen vitézségével tűnt ki... fekete sereget tartva, mely minden ellenségét megtörte. A tudományok és művészetek pártfogója volt, ki össze gyűjtötte a nemes szerzőket, hogy a tudatlanság sötétségéből fényre hozza az országot.",
      type: "chronicle",
      author: "Thuróczy János",
      period: "15. század",
    },
    imageSource: {
      url: "https://images.unsplash.com/photo-1578262996442-48f60103fc96?w=400",
      caption: "Hunyadi Mátyás era - Medieval Hungarian Kingdom",
      source: "unsplash",
    },
    timestamp: new Date(),
  },
  "Az ipari forradalom": {
    id: "industrial-revolution",
    title: "Az ipari forradalom gazdasági és társadalmi hatásai",
    category: "economy",
    keyTerms: [
      "gépesítés",
      "manufaktúra",
      "proletariátus",
      "urbanizáció",
      "tőkefelhalmozás",
    ],
    textSource: {
      content:
        "Az ipari termelés új módszerén alapulva egy új világ született. A gépek emberi erőt helyettesítve, termelékenyebb lett a munka, de a munkások osztálya nélkülözni kezdett jogokért.",
      type: "document",
      author: "Gazdaságtörténeti források",
      period: "18-19. század",
    },
    imageSource: {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400",
      caption: "Industrial Era - Factory and mechanical production",
      source: "unsplash",
    },
    timestamp: new Date(),
  },
};

// Hivatalos magyar történelem érettségi források
export const OFFICIAL_SOURCES: OfficialSource[] = [
  {
    name: "Nemzeti Köznevelési Portál (NKP)",
    url: "https://www.nkp.hu",
    icon: "📚",
  },
  {
    name: "Wikipédia Enciklopédia",
    url: "https://hu.wikipedia.org",
    icon: "🌐",
  },
  {
    name: "Magyar Oktatási Portál",
    url: "https://www.oktatas.hu",
    icon: "🎓",
  },
  {
    name: "Nemzeti Emlékezet Bizottság (NEB)",
    url: "https://neb.hu",
    icon: "📖",
  },
];

// Érettségi értékelési szempontok (50 pont)
export const EVALUATION_GUIDELINES = {
  terminology:
    "Szakkifejezések helyes használata, történelmi fordulatok pontos megnevezése (0-20 pont)",
  lawsAndEvents:
    "Törvények, események, adatok pontos ismerete és sorrendiségének helyes felsorolása (0-15 pont)",
  spatialTemporal:
    "Térbeli és időbeli tájékozódás, történelmi periodizáció ismerete (0-15 pont)",
};
