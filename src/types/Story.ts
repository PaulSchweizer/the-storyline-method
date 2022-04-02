export interface Step {
  text: string;
}

export interface Episode {
  steps: {
    Premise?: Step[];
    Prologue?: Step[];
    Trailer?: Step[];
    Plotpoints?: Step[];
    Finale?: Step[];
    Epilogue?: Step[];
  };
}

export interface Round {
  episodes: Episode[];
}

export interface Concept {
  title: string;
  genres: string[];
  references: string[];
  themes: string[];
  world: string;
  other: string;
}

export interface Storyline {
  description: string;
  plotpoints: number;
}

export interface Protagonist {
  name: string;
  description: string;
  storylines: Storyline[]
}

export default interface Story {
  id: string;
  concept: Concept;
  protagonists: Protagonist[];
  pilot: {
    scenes: Step[];
  };
  rounds: Round[];
}
