// coloquei a tipagem em um arquivo separado para manter o codigo mais organizado

export type Character = {
  id: number;
  name: string;
  thumbnail: string;
  series: string[];
  events: string[];
};
