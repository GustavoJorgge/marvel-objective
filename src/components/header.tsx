import styles from "./header.module.css";
import logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          src={logo}
          alt="Logo da Objective em cor preta"
          className={styles.logo}
        />

        <div className={styles.candidate}>
          <div className={styles.candidateInfo}>
            <span className={styles.candidateName}>Gustavo Jorge</span>
            <span className={styles.candidateRole}>Teste de Front-end</span>
          </div>
          <div className={styles.avatar} aria-hidden="true">
            GJ
          </div>
        </div>
      </div>
    </header>
  );
}
