import { useContext, useState } from "react";
import CampoTexto from "../CampoTexto";
import RodapeTarefas from "../RodapeTarefas";
import styles from "../styles.module.css";
import { TasksContext } from "../../../context/TasksContext";

const FormularioTarefas = () => {
  const [texto, setTexto] = useState("");
  const { exibirFormulario, setExibirFormulario, dispatch } = useContext(TasksContext);

  return (
    <form
      className={`${styles["form-add-task"]} ${!exibirFormulario ? styles["form-add-task--hidden"] : ""}`}
      aria-hidden={!exibirFormulario}
    >
      <CampoTexto
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        etiqueta="Adicionando tarefa"
        placeholder="No que você está trabalhando?"
      />
      <RodapeTarefas
        aoSalvar={() => dispatch({ type: "addTask", payload: texto })}
        aoCancelar={() => setExibirFormulario(false)}
      />
    </form>
  );
};

export default FormularioTarefas;
