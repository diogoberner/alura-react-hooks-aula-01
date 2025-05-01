import MenuOpcoes from "../MenuOpcoes";

import styles from "../styles.module.css";

const CabecalhoTarefas = () => {
  return (
    <section className={styles["task-header"]}>
      <h2 className={styles["task-header__heading"]}>Lista de tarefas:</h2>
      <MenuOpcoes />
    </section>
  );
};

export default CabecalhoTarefas;
