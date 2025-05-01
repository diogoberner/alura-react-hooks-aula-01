import Botao from "../Botao";
import deleteImg from "/src/assets/imgs/delete.png";
import closeImg from "/src/assets/imgs/close.png";
import saveImg from "/src/assets/imgs/save.png";
import styles from "../styles.module.css";

const RodapeTarefas = ({ aoSalvar, aoCancelar }) => {
  return (
    <footer className={styles["form-add-task__footer"]}>
      <Botao
        icone={deleteImg}
        type="button"
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--delete"]}`}
        onClick={aoCancelar}
      >
        Deletar
      </Botao>
      <div className={styles["splitter"]}></div>
      <Botao
        icone={closeImg}
        type="button"
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--cancel"]}`}
        onClick={aoCancelar}
      >
        Cancelar
      </Botao>

      <Botao
        type="button"
        icone={saveImg}
        className={`${styles["form-add-task__footer-button"]} ${styles["form-add-task__footer-button--confirm"]}`}
        onClick={aoSalvar}
      >
        Salvar
      </Botao>
    </footer>
  );
};

export default RodapeTarefas;
