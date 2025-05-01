const taskReducer = (tarefas, action) => {
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

export default taskReducer;
