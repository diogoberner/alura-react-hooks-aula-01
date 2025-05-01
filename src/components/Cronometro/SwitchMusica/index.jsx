import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./styles.module.css";
import { useEffect } from "react";
import musicaSom from "/src/assets/sons/luna-rise-part-one.mp3";

const SwitchMusica = forwardRef(function SwitchMusica({ props }, ref) {
  const musicaRef = useRef(null);

  useEffect(() => {
    musicaRef.current = new Audio(musicaSom);

    return () => {
      musicaRef.current?.pause();
      musicaRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (musicaRef.current) {
        musicaRef.current.play();
      }
    },
    pause: () => {
      if (musicaRef.current) {
        musicaRef.current.pause();
      }
    },
  }));

  function alternarMusica() {
    if (!musicaRef.current) return;

    if (musicaRef.current.paused) {
      musicaRef.current.play();
    } else {
      musicaRef.current.pause();
    }
  }

  return (
    <label className={styles["toggle"]}>
      <input
        onChange={alternarMusica}
        className={styles["toggle__checkbox"]}
        type="checkbox"
        checked={!musicaRef.current?.paused}
        id="alternar-musica"
      />
      <div className={styles["toggle__switch"]}></div>
      <span className={styles["toggle__span"]} htmlFor="alternar-musica">
        Música
      </span>
    </label>
  );
});

export default SwitchMusica;
