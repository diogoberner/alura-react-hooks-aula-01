import { useState } from "react";
import { createContext } from "react";

export const TimerContext = createContext(null);

export const TimerProvider = ({ children }) => {
  const [modos, setModos] = useState([
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
  ]);
  const [modoAtual, setModoAtual] = useState(modos[0]);
  const [tempoRestante, setTempoRestante] = useState(modoAtual.duracao);
  const [emExecucao, setEmExecucao] = useState(false); // Para saber se o cronômetro está rodando

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
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
