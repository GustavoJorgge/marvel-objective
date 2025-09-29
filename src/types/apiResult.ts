export type CharacterResult = {
  character: {
    id: number;
    name: string;
    thumbnail: string;
  };
  description: string;
  counts: {
    comics: number;
    series: number;
    events: number;
    stories: number;
  };
  comics: string[];
  series: string[];
  stories: string[];
  events: string[];
};
