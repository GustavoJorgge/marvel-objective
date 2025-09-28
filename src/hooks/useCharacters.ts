import { useEffect, useState } from "react";
import { getCharacters } from "../api/getCharacters";
import { getCharactersByName } from "../api/getCharactersByName";
import type { Character } from "../types/character";

export function useCharacters(limit: number = 10, nameStartsWith?: string) {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        let chars: Character[];

        if (nameStartsWith && nameStartsWith.trim() !== "") {
          const res = await getCharactersByName({ limit, nameStartsWith });
          chars = res.items;
        } else {
          chars = await getCharacters({ limit });
        }

        setData(chars);
        setError(null);
        /* eslint-disable @typescript-eslint/no-explicit-any */
      } catch (err: any) {
        setError(err.message || "Erro ao buscar personagens");
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, nameStartsWith]);

  return { data, loading, error };
}
