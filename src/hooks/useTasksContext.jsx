import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasksContext deve ser usado dentro de um TasksProvider!");
  }

  return context;
};

export default useTasksContext;
