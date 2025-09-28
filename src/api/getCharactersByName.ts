import { api } from "./client";

type FetchOptions = {
  limit?: number;
};

export async function getCharactersByName({
  limit,
  nameStartsWith,
}: FetchOptions & { nameStartsWith: string }) {
  const response = await api.get("/characters", {
    params: { limit, nameStartsWith },
  });
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const total = response.data.data.total as number;
  const items = response.data.data.results.map((char: any) => ({
    id: char.id,
    name: char.name,
    thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    series: char.series.items.slice(0, 3).map((s: any) => s.name),
    events: char.events.items.slice(0, 3).map((e: any) => e.name),
  }));
  return { items, total };
}
