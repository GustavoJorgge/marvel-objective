import { CaretDoubleRight, CaretRight } from "@phosphor-icons/react";
import styles from "./pagination.module.css";

export function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <button className={`${styles.button} ${styles.active}`}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
      <button className={styles.button}>5</button>
      <div className={styles.arrowButtons}>
        <button className={styles.iconButton}>
          <CaretRight size={18} />
        </button>
        <button className={styles.iconButton}>
          <CaretDoubleRight size={18} />
        </button>
      </div>
    </div>
  );
}
