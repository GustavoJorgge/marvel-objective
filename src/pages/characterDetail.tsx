import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenIcon,
  BookOpenText,
  Lightning,
  Users,
} from "@phosphor-icons/react";
import styles from "./characterDetail.module.css";
import { getCharacterById } from "../api/getCharacters";
import type { CharacterResult } from "../types/apiResult";

export function CharacterDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [data, setData] = useState<CharacterResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    getCharacterById(Number(id))
      .then((res) => setData(res))
      .catch((err: unknown) => {
        const msg =
          err && typeof err === "object" && "message" in err
            ? (err as any).message
            : "Erro ao carregar personagem";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const back = () => navigate(`/`);

  if (loading) {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <button className={styles.Button} onClick={back}>
              <ArrowLeft size={16} className={styles.icon} /> Voltar para a
              busca
            </button>
          </div>
          <div style={{ padding: 24 }}>Carregando...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <button className={styles.Button} onClick={back}>
              <ArrowLeft size={16} /> Voltar para a busca
            </button>
          </div>
          <div style={{ padding: 24, color: "crimson" }}>{error}</div>
        </div>
      </div>
    );
  }

  // fallback to empty layout if no data yet
  if (!data) {
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div>
            <button className={styles.Button} onClick={back}>
              <ArrowLeft size={16} /> Voltar para a busca
            </button>
          </div>
          <div style={{ padding: 24 }}>Nenhum dado.</div>
        </div>
      </div>
    );
  }

  const { character, description, counts, comics, series, stories } = data;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <button className={styles.Button} onClick={back}>
            <ArrowLeft size={16} /> Voltar para a busca
          </button>
        </div>

        <div className={styles.Grid}>
          <div className={styles.imageCard}>
            <img
              src={character.thumbnail}
              alt={character.name}
              className={styles.characterImage}
            />
          </div>

          <div className={styles.Content}>
            <h1 className={styles.title}>{character.name}</h1>
            <p className={styles.description}>
              {description && description.trim() !== ""
                ? description
                : "Sem descrição disponível."}
            </p>

            <div className={styles.CardContainer}>
              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <BookOpenIcon size={32} />
                </div>
                <div className={styles.CardCount}>{counts.comics}</div>
                <div className={styles.CardLabel}>Comics</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <Users size={32} />
                </div>
                <div className={styles.CardCount}>{counts.series}</div>
                <div className={styles.CardLabel}>Séries</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <Lightning size={32} />
                </div>
                <div className={styles.CardCount}>{counts.events}</div>
                <div className={styles.CardLabel}>Eventos</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <BookOpenText size={32} />
                </div>
                <div className={styles.CardCount}>{counts.stories}</div>
                <div className={styles.CardLabel}>Histórias</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <BookOpenIcon size={20} style={{ marginRight: 8 }} />
              Comics ({comics.length})
            </h2>
            <ul className={styles.itemList}>
              {comics.map((c, i) => (
                <li key={i} className={styles.item}>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <Users size={20} style={{ marginRight: 8 }} />
              Séries ({series.length})
            </h2>
            <ul className={styles.itemList}>
              {series.map((s, i) => (
                <li key={i} className={styles.item}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <Users size={20} style={{ marginRight: 8 }} />
              Histórias ({stories.length})
            </h2>
            <ul className={styles.itemList}>
              {stories.map((s, i) => (
                <li key={i} className={styles.item}>
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
