export interface Compound {
    id?: string;
    name: string;
    image: string;
    description: string;
  };
  
  export interface CompoundResponse {
    count: number;
    rows: Compound[];
  };