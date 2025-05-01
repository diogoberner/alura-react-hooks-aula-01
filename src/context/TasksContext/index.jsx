import { createContext, useReducer, useState } from "react";
import taskReducer from "../../reducers/taskReducer";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [exibirFormulario, setExibirFormulario] = useState(false);
  const [tarefas, dispatch] = useReducer(taskReducer, []);

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
