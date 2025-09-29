import { useState, useEffect, useMemo } from "react";
import { useCharacters } from "../hooks/useCharacters";
import styles from "./listCharacter.module.css";
import { Pagination } from "./pagination";
import { useNavigate } from "react-router-dom";

export function ListCharacters({
  nameStartsWith,
}: {
  nameStartsWith?: string;
}) {
  const limit = 10;
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
  }, [nameStartsWith]);

  const {
    data: personagens,
    total,
    loading,
    error,
  } = useCharacters(limit, page, nameStartsWith);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / limit)),
    [total, limit]
  );

  if (loading) {
    return (
      <div>
        <p>Carregando personagens...</p>
      </div>
    );
  }

  if (error) {
    console.error("Erro ao carregar personagens:", error);
  }

  const handleRowKey = (e: React.KeyboardEvent, id: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/character/${id}`);
    }
  };

  return (
    <section className={styles.tableWrap} aria-label="Lista de personagens">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Personagem</th>
            <th className={styles.seriesCol}>Séries</th>
            <th className={styles.eventsCol}>Eventos</th>
          </tr>
        </thead>

        <tbody>
          {personagens.map((c) => (
            <tr
              key={c.id}
              className={styles.row}
              role="link"
              tabIndex={0}
              onClick={() =>
                navigate(
                  `/character/${c.id}?page=${page}&name=${encodeURIComponent(
                    nameStartsWith ?? ""
                  )}`
                )
              }
              onKeyDown={(e) => handleRowKey(e, c.id)}
              style={{ cursor: "pointer" }}
              aria-label={`Ver detalhes de ${c.name}`}
            >
              <td>
                <div className={styles.character}>
                  <img
                    src={c.thumbnail}
                    alt={c.name}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.name}>{c.name}</div>
                  </div>
                </div>
              </td>

              <td className={styles.seriesCol}>
                <div className={styles.metaList}>
                  {c.series.length > 0 ? (
                    c.series.map((s, i) => <div key={i}>{s}</div>)
                  ) : (
                    <span className={styles.empty}>Sem séries</span>
                  )}
                </div>
              </td>

              <td className={styles.eventsCol}>
                <div className={styles.metaList}>
                  {c.events.length > 0 ? (
                    c.events.map((e, i) => <div key={i}>{e}</div>)
                  ) : (
                    <span className={styles.empty}>Sem eventos</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </section>
  );
}
