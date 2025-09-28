import "./global.css";
import { Header } from "./components/header";
import { SearchCharacter } from "./components/searchCharacter";
import { ListCharacters } from "./components/listCharacter";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
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

export default App;
