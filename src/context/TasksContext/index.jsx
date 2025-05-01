import { createContext, useReducer, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const reducer = (tarefas, action) => {
    switch (action.type) {
      case "addTask": {
        const newTask = {
          id: Date.now(),
          texto: action.payload,
          concluida: false,
        };
        return [...tarefas, newTask];
      }
      case "taskCompleted": {
        return tarefas.map((tarefa) =>
          tarefa.id === action.payload ? { ...tarefa, concluida: !tarefa.concluida } : tarefa,
        );
      }
      case "removeCompleted": {
        return tarefas.filter((tarefa) => tarefa.concluida === false);
      }
      case "removeAll": {
        return [];
      }
      case "deleteTask": {
        return tarefas.filter((tarefa) => tarefa.id !== action.payload);
      }

      default:
        return tarefas;
    }
  };

  const [tarefas, dispatch] = useReducer(reducer, []);

  return (
    <TasksContext.Provider
      value={{
        tarefas,
        exibirFormulario,
        setExibirFormulario,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksProvider };
