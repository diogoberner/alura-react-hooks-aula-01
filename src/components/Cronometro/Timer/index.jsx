import styles from "./styles.module.css";

export default function Timer({ tempoRestante }) {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  return (
    <div className={styles["cronometer-timer"]}>
      {minutos}:{segundos < 10 ? `0${segundos}` : segundos}
    </div>
  );
}
