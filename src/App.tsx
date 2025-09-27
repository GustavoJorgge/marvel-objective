import "./global.css";
import { Header } from "./components/header";
import { SearchCharacter } from "./components/searchCharacter";
import { ListCharacters } from "./components/listCharacter";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchCharacter />
        <ListCharacters />
      </main>
    </>
  );
}

export default App;
