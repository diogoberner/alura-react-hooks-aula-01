const Botao = ({ icone, children, ...props }) => {
  return (
    <button {...props}>
      {icone && <img src={icone} alt="" />}
      {children}
    </button>
  );
};

export default Botao;
