import { createContext, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  function adicionarTarefa(texto) {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    setExibirFormulario(false);
  }

  const removeCompletedTasks = () => {
    setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa.concluida === false));
  };

  const removeAllTasks = () => {
    setTarefas([]);
  };

  const deleteTask = (id) => {
    setTarefas((tarefas) => tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const completeTask = (id, completed) => {
    setTarefas((tarefas) =>
      tarefas.map((tarefa) => (tarefa.id === id ? { ...tarefa, concluida: !completed } : tarefa)),
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tarefas,
        setTarefas,
        removeCompletedTasks,
        removeAllTasks,
        deleteTask,
        completeTask,
        adicionarTarefa,
        exibirFormulario,
        setExibirFormulario,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
