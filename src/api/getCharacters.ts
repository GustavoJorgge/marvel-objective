import type { Character } from "../types/character";
import { api } from "./client";

// Coloquei a tipagem FetchOptions para alterar o limit para mobile entre 10 e 5. 
type FetchOptions = {
  limit?: number;
};

export async function getCharacters({
  limit,
}: FetchOptions): Promise<Character[]> {
  const response = await api.get("/characters", { params: { limit } });
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return response.data.data.results.map((char: any) => ({
    id: char.id,
    name: char.name,
    thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    series: char.series.items.slice(0, 3).map((s: any) => s.name),
    events: char.events.items.slice(0, 3).map((e: any) => e.name),
  }));
}
