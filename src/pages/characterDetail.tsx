import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenIcon,
  BookOpenText,
  Lightning,
  Users,
} from "@phosphor-icons/react";
import styles from "./characterDetail.module.css";

export function CharacterDetails() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page") ?? 1);
  const name = searchParams.get("name") ?? "";

  const back = () =>
    navigate(`/?page=${page}&name=${encodeURIComponent(name)}`);

  const sample = {
    id: 1009446,
    name: "3-D Man",
    description:
      "3-D Man é um super-herói com a habilidade de ver através de disfarces e ilusões. Ele possui força e agilidade sobre-humanas, além de poder detectar alienígenas Skrull.",
    thumbnail:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    counts: { comics: 6, series: 3, events: 1, stories: 4 },
    series: [
      "Avengers: The Initiative (2007 - 2010)",
      "Deadpool (1997 - 2002)",
      "Marvel Premiere (1972 - 1981)",
    ],
    comics: [
      "Avengers: The Initiative #1",
      "Avengers: The Initiative #2",
      "Deadpool #11",
      "Marvel Premiere #35",
      "Marvel Premiere #36",
      "Marvel Premiere #37",
    ],
    stories: ["Cover #19947", "The 3-D Man", "The 3-D Man"],
  };

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
              src={sample.thumbnail}
              alt={sample.name}
              className={styles.characterImage}
            />
          </div>

          <div className={styles.Content}>
            <h1 className={styles.title}>{sample.name}</h1>
            <p className={styles.description}>{sample.description}</p>

            <div className={styles.CardContainer}>
              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <BookOpenIcon size={32} />
                </div>
                <div className={styles.CardCount}>{sample.counts.comics}</div>
                <div className={styles.CardLabel}>Comics</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <Users size={32} />
                </div>
                <div className={styles.CardCount}>{sample.counts.series}</div>
                <div className={styles.CardLabel}>Séries</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <Lightning size={32} />
                </div>
                <div className={styles.CardCount}>{sample.counts.events}</div>
                <div className={styles.CardLabel}>Eventos</div>
              </div>

              <div className={styles.Card}>
                <div className={styles.CardIcon}>
                  <BookOpenText size={32} />
                </div>
                <div className={styles.CardCount}>{sample.counts.stories}</div>
                <div className={styles.CardLabel}>Histórias</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <BookOpenIcon size={20} style={{ marginRight: 8 }} />
              Comics ({sample.comics.length})
            </h2>
            <ul className={styles.itemList}>
              {sample.comics.map((c, i) => (
                <li key={i} className={styles.item}>
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <Users size={20} style={{ marginRight: 8 }} />
              Séries ({sample.series.length})
            </h2>
            <ul className={styles.itemList}>
              {sample.series.map((s, i) => (
                <li key={i} className={styles.item}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.cardList}>
            <h2 className={styles.cardTitle}>
              <Users size={20} style={{ marginRight: 8 }} />
              Histórias ({sample.stories.length})
            </h2>
            <ul className={styles.itemList}>
              {sample.stories.map((s, i) => (
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
