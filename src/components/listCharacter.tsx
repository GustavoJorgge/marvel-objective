import { useCharacters } from "../hooks/useCharacters";
import styles from "./listCharacter.module.css";
import { Pagination } from "./pagination";

export function ListCharacters() {
  const { data: personagens, loading, error } = useCharacters(10);

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
            <tr key={c.id} className={styles.row}>
              <td>
                <div className={styles.character}>
                  <img
                    src={c.thumbnail}
                    alt="Imagem do personagem"
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
      <Pagination />
    </section>
  );
}
