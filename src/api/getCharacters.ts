import { api } from "./client";
import type { Character } from "../types/character";
import type { CharacterResult } from "../types/apiResult";

type FetchOptions = {
  limit?: number;
  offset?: number;
};

export async function getCharacters({
  limit = 10,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}): Promise<{ items: Character[]; total: number }> {
  const { data } = await api.get("/characters", { params: { limit, offset } });
  const results = data?.data?.results ?? [];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const items = results.map((c: any) => ({
    id: c.id,
    name: c.name,
    description: c.description,
    thumbnail:
      c.thumbnail?.path && c.thumbnail?.extension
        ? `${c.thumbnail.path}.${c.thumbnail.extension}`
        : "",
    series: (c.series?.items ?? []).map((s: any) => s.name),
    events: (c.events?.items ?? []).map((e: any) => e.name),
  })) as Character[];
  const total = data?.data?.total ?? 0;
  return { items, total };
}

/* optei por colocar o AbortController para evitar chamadas da API desnecessarias conforme a digitação" */
let controller: AbortController | null = null;

export async function getCharactersByName({
  limit,
  nameStartsWith,
}: FetchOptions & { nameStartsWith: string }) {
  if (controller) controller.abort();
  controller = new AbortController();

  const response = await api.get("/characters", {
    params: { limit, nameStartsWith },
    signal: controller.signal,
  });

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


export async function getCharacterById(id: number): Promise<CharacterResult> {
  const response = await api.get(`/characters/${id}`, {
    params: {
      ts: 1,
      apikey: import.meta.env.VITE_MARVEL_PUBLIC_KEY,
      hash: import.meta.env.VITE_MARVEL_HASH,
    },
  });

  const result = response.data.data.results[0];

  return {
    character: {
      id: result.id,
      name: result.name,
      thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    },
    description: result.description,
    counts: {
      comics: result.comics.available,
      series: result.series.available,
      events: result.events.available,
      stories: result.stories.available,
    },
    comics: result.comics.items.map((c: any) => c.name),
    series: result.series.items.map((s: any) => s.name),
    stories: result.stories.items.map((s: any) => s.name),
    events: result.events.items.map((e: any) => e.name),
  };
}
