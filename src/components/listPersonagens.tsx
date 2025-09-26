import styles from "./listPersonagens.module.css";

type Character = {
  id: number;
  name: string;
  thumbnail: string;
  series: string[];
  events: string[];
};

const sampleCharacters: Character[] = [
  {
    id: 1,
    name: "Scott Lang",
    thumbnail: "https://via.placeholder.com/80",
    series: ["Ant-Man", "Giant-Man", "Infinity Wars"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
  {
    id: 2,
    name: "Steve Rogers",
    thumbnail: "https://via.placeholder.com/80",
    series: ["New Avengers", "Captain America Special", "Secret Empire"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
  {
    id: 3,
    name: "Tony Stark",
    thumbnail: "https://via.placeholder.com/80",
    series: ["New Avengers", "Indestructible Hulk", "Ultimate Fallout"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
  {
    id: 4,
    name: "Tony Stark",
    thumbnail: "https://via.placeholder.com/80",
    series: ["New Avengers", "Indestructible Hulk", "Ultimate Fallout"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
  {
    id: 5,
    name: "Tony Stark",
    thumbnail: "https://via.placeholder.com/80",
    series: ["New Avengers", "Indestructible Hulk", "Ultimate Fallout"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
  {
    id: 6,
    name: "Tony Stark",
    thumbnail: "https://via.placeholder.com/80",
    series: ["New Avengers", "Indestructible Hulk", "Ultimate Fallout"],
    events: ["AvX", "Demon in the Bottle", "Dynasty M"],
  },
];

export function ListPersonagens() {
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
          {sampleCharacters.map((c) => (
            <tr key={c.id} className={styles.row}>
              <td>
                <div className={styles.character}>
                  <img
                    src="src/assets/images.jpg"
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
                  {c.series.map((s, i) => (
                    <div key={i}>{s}</div>
                  ))}
                </div>
              </td>

              <td className={styles.eventsCol}>
                <div className={styles.metaList}>
                  {c.events.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
