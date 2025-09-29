import { api } from "./client";
import type { Character } from "../types/character";

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

export async function getCharacterById(id: number) {
  const { data } = await api.get(`/characters/${id}`);
  const result = data?.data?.results?.[0];
  if (!result) throw new Error("Personagem não encontrado");
  return {
    id: result.id,
    name: result.name,
    description: result.description,
    thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`,
    series: result.series.items.map((s: any) => s.name),
    events: result.events.items.map((e: any) => e.name),
  };
}
