import {
  CaretDoubleLeftIcon,
  CaretDoubleRightIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const windowSize = isMobile ? 3 : 5;

  if (totalPages <= 1) return null;

  let start = Math.max(1, page - Math.floor(windowSize / 2));
  let end = start + windowSize - 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - windowSize + 1);
  }

  const pages = [];
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(1)}
        disabled={page === 1}
      >
        <CaretDoubleLeftIcon size={16} weight="bold" />
      </button>

      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        <CaretLeftIcon size={16} weight="bold" />
      </button>

      {start > 1 && (
        <>
          <button className={styles.button} onClick={() => onChange(1)}>
            1
          </button>
          {start > 2 && <span className={styles.ellipsis}>…</span>}
        </>
      )}

      {pages.map((p) => (
        <button
          key={p}
          className={`${styles.button} ${p === page ? styles.active : ""}`}
          onClick={() => onChange(p)}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className={styles.ellipsis}>…</span>}
          <button
            className={styles.button}
            onClick={() => onChange(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
      >
        <CaretRightIcon size={16} weight="bold" />
      </button>

      <button
        className={styles.arrowsButtons}
        onClick={() => onChange(totalPages)}
        disabled={page === totalPages}
      >
        <CaretDoubleRightIcon size={16} weight="bold" />
      </button>
    </div>
  );
}
