import { createContext, useEffect, useReducer, useState } from "react";
import taskReducer from "../../reducers/taskReducer";
import useLocalStorage from "../../hooks/useLocalStorage";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [value, setValue] = useLocalStorage("tarefas", []);
  const [tarefas, dispatch] = useReducer(taskReducer, value);

  useEffect(() => {
    setValue(tarefas);
  }, [tarefas, setValue]);

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
