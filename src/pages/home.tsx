import { useState } from "react";
import { Header } from "../components/header";
import { SearchCharacter } from "../components/searchCharacter";
import { ListCharacters } from "../components/listCharacter";
import styles from "./Home.module.css";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchCharacter onSearch={setSearch} />
        <ListCharacters nameStartsWith={search} />
      </main>
    </>
  );
}
