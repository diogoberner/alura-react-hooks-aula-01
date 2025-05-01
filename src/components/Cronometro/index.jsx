import styles from "./styles.module.css";

import BotoesModos from "./BotoesModos";
import Timer from "./Timer";
import SwitchMusica from "./SwitchMusica";
import BotaoCronometro from "./BotaoCronometro";
import { useEffect, useRef } from "react";
import { useState } from "react";

const modos = [
  {
    id: "foco",
    nome: "Foco",
    duracao: 25, // em minutos
  },
  {
    id: "pausa_curta",
    nome: "Pausa curta",
    duracao: 5, // em minutos
  },
  {
    id: "pausa_longa",
    nome: "Pausa longa",
    duracao: 15, // em minutos
  },
];

export default function Cronometro() {
  const musicaRef = useRef(null);

  const [modoAtual, setModoAtual] = useState(modos[0]);
  const [tempoRestante, setTempoRestante] = useState(modoAtual.duracao);
  const [emExecucao, setEmExecucao] = useState(false); // Para saber se o cronômetro está rodando

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
      <BotoesModos modos={modos} modoAtual={modoAtual} onModoSelecionado={selecionarModo} />
      <Timer tempoRestante={tempoRestante} />
      <SwitchMusica ref={musicaRef} />
      <BotaoCronometro emExecucao={emExecucao} onClick={alternarCronometro} />
    </div>
  );
}