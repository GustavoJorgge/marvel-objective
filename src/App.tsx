import "./global.css";
import { Header } from "./components/header";
import { SearchPersonagens } from "./components/searchCharacter";
import { ListPersonagens } from "./components/listCharacter";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SearchPersonagens />
        <ListPersonagens />
      </main>
    </>
  );
}

export default App;
