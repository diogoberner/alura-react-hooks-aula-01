import { useEffect, useRef, useState } from "react";
import { createContext } from "react";

export const TimerContext = createContext(null);

export const TimerProvider = ({ children }) => {
  const musicaRef = useRef(null);
  const [modos, setModos] = useState([
    {
      id: "foco",
      nome: "Foco",
      duracao: 25 * 60, // em minutos
    },
    {
      id: "pausa_curta",
      nome: "Pausa curta",
      duracao: 5 * 60, // em minutos
    },
    {
      id: "pausa_longa",
      nome: "Pausa longa",
      duracao: 15 * 60, // em minutos
    },
  ]);
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
    <TimerContext.Provider
      value={{
        modoAtual,
        setModoAtual,
        tempoRestante,
        setTempoRestante,
        emExecucao,
        setEmExecucao,
        modos,
        setModos,
        alternarCronometro,
        selecionarModo,
        musicaRef,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
