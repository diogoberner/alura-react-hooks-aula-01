import styles from "./styles.module.css";

export default function BotaoModo({ children, ativo, onClick }) {
  return (
    <button
      className={`${styles["cronometer-modes__button"]} ${ativo ? styles["cronometer-modes__button--active"] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
