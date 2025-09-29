import { useState } from "react";
import { SearchCharacter } from "../components/searchCharacter";
import { ListCharacters } from "../components/listCharacter";
import styles from "./home.module.css";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <main className={styles.main}>
        <SearchCharacter onSearch={setSearch} />
        <ListCharacters nameStartsWith={search} />
      </main>
    </>
  );
}
