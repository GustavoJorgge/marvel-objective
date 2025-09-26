import styles from "./searchPersonagens.module.css";

export function SearchPersonagens() {
  return (
    <section className={styles.searchContainer}>
      <header>
        <h1 className={styles.title}>Busca de personagens</h1>
      </header>
      <div className={styles.forms}>
        <label htmlFor="search" className={styles.label}>
          Nome do personagem
        </label>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className={styles.input}
          />
        </div>
      </div>
    </section>
  );
}
