import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import styles from "./pagination.module.css";

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(Math.max(1, page - 1))}
      >
        <CaretLeftIcon size={24} weight="bold" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`${styles.button} ${p === page ? styles.active : ""}`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
      >
        <CaretRightIcon size={24} weight="bold" />
      </button>
    </div>
  );
}
