import { useEffect, useState } from "react";
import { getCharacters, getCharactersByName } from "../api/getCharacters";
import type { Character } from "../types/character";

export function useCharacters(
  limit: number = 10,
  page: number = 1,
  nameStartsWith?: string
) {
  const [data, setData] = useState<Character[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const offset = (page - 1) * limit;
        let res;
        if (nameStartsWith && nameStartsWith.trim() !== "") {
          res = await getCharactersByName({ limit, offset, nameStartsWith });
        } else {
          res = await getCharacters({ limit, offset });
        }

        setData(res.items);
        setTotal(res.total ?? 0);
        setError(null);
        /* eslint-disable @typescript-eslint/no-explicit-any */
      } catch (err: unknown) {
        const message =
          err && typeof err === "object" && "message" in err
            ? (err as any).message
            : "Erro ao buscar personagens";
        setError(message);
        setData([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, page, nameStartsWith]);

  return { data, total, loading, error };
}
