import "./global.css";
import { Header } from "./components/header";
import { SearchPersonagens } from "./components/searchPersonagens";
import { ListPersonagens } from "./components/listPersonagens";
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
