import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useContext } from "react";
import { TimerContext } from "../../context/TimerContext";

export default function Cronometro() {
  const { selecionarModo, alternarCronometro, musicaRef } = useContext(TimerContext);

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos onModoSelecionado={selecionarModo} />
      <Timer />
      <SwitchMusica ref={musicaRef} />
      <BotaoCronometro onClick={alternarCronometro} />
    </div>
  );
}
