import { useEffect, useState } from "react";
import styles from "./searchCharacter.module.css";

type SearchCharacterProps = {
  onSearch?: (name: string) => void;
};

export function SearchCharacter({ onSearch }: SearchCharacterProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (onSearch) {
      const delayDebounceFn = setTimeout(() => {
        onSearch(search);
      }, 200);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [search, onSearch]);

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
