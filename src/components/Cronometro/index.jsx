import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useContext, useEffect, useRef } from "react";
import { TimerContext } from "../../context/TimerContext";

export default function Cronometro() {
  const musicaRef = useRef(null);

  const {
    modoAtual,
    setModoAtual,
    tempoRestante,
    setTempoRestante,
    emExecucao,
    setEmExecucao,
    modos,
  } = useContext(TimerContext);

  useEffect(() => {
    let intervalo;

    if (emExecucao && tempoRestante > 0) {
      intervalo = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      setModoAtual((prev) => {
        const modoAtualIndex = modos.findIndex((modo) => modo.id === prev.id);
        const proximoModo = modos[(modoAtualIndex + 1) % modos.length];
        setTempoRestante(proximoModo.duracao);
        return proximoModo;
      });
      setEmExecucao(false);
    }

    return () => clearInterval(intervalo);
  }, [emExecucao, tempoRestante, modoAtual]);

  const controlarMusica = () => {
    if (musicaRef.current) {
      musicaRef.current.play();
    }
  };

  const alternarCronometro = () => {
    setEmExecucao((prev) => !prev);

    if (!emExecucao) {
      controlarMusica();
    } else {
      musicaRef.current.pause();
    }
  };

  const selecionarModo = (novoModo) => {
    setModoAtual(novoModo);
    setTempoRestante(novoModo.duracao);
    setEmExecucao(false);
    musicaRef.current.pause();
  };

  return (
    <div className={styles["cronometer"]}>
      <BotoesModos onModoSelecionado={selecionarModo} />
      <Timer />
      <SwitchMusica ref={musicaRef} />
      <BotaoCronometro onClick={alternarCronometro} />
    </div>
  );
}
