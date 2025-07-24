import './Orcamento.css';

function Orcamento() {
  return (
    <section id="orcamento" className="section-orcamento">
      <h2>Solicite seu Orçamento</h2>

      {/* Caixa do formulário com fundo e arredondamento */}
      <div className="form-container">
        <form className="form-orcamento">
          <div className="campo-form">
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="campo-form">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu e-mail"
              required
            />
          </div>

          <div className="campo-form">
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone"
              required
            />
          </div>

          <div className="campo-form">
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva seu projeto (área, localização)"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Orcamento;
