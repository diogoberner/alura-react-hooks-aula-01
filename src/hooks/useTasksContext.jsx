import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const useTasksContext = () => {
  const { tarefas, exibirFormulario, setExibirFormulario, dispatch } = useContext(TasksContext);

  return { tarefas, exibirFormulario, setExibirFormulario, dispatch };
};

export default useTasksContext;
