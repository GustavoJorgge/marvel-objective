import { useEffect, useState } from "react";
import { getCharacters } from "../api/getCharacters";
import type { Character } from "../types/character";

export function useCharacters(limit: number = 10) {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCharacters({ limit })
      .then((chars) => {
        setData(chars);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [limit]);

  return { data, loading, error };
}
