// NAT 2020 témakörök
export type TopicCategory = 
  | "economy"
  | "population"
  | "society"
  | "politics"
  | "international";

export interface TopicCategoryOption {
  value: TopicCategory;
  label: string;
  description: string;
}

// Generált tétel adatstruktúra
export interface GeneratedThesis {
  id: string;
  title: string;
  category: TopicCategory;
  keyTerms: string[];
  textSource: {
    content: string;
    type: "chronicle" | "law" | "speech" | "document";
    author?: string;
    period?: string;
  };
  imageSource: {
    url: string;
    caption: string;
    source: "unsplash" | "wikimedia" | "placeholder";
  };
  timestamp: Date;
}

// Felelet értékelés struktúra
export interface EvaluationCriteria {
  terminology: number; // 0-100
  lawsAndEvents: number; // 0-100
  spatialTemporalOrientation: number; // 0-100
}

export interface EvaluationResult {
  criteria: EvaluationCriteria;
  totalScore: number; // 0-50 pont
  feedback: string;
  timestamp: Date;
}

// Hivatalos források
export interface OfficialSource {
  name: string;
  url: string;
  icon?: string;
}
