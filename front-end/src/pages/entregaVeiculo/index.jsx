import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

export default function EntregaVeiculo() {
  return (
    <section className="pagina-locacao-veiculo">
      <Navegacao />

      <div className="conteudo-pagina-controle-veiculo">
        <div className="cabecalho">
          <span>Olá, que bom que você voltou!</span>
          <div className="usuario">
            <h5>A</h5>
          </div>
        </div>

        <div className="conteudo">
          <div className="titulo-pagina">
            <span id="area-administrativa">ÁREA ADMINISTRATIVA</span>
            <h1>Entrega de Veículo</h1>
          </div>

          <div className="area-informacao-entrega-locacao">
            <div className="secao">
              <div className="informacao-locacao">
                <div className="informacoes-principais">
                  <span>
                    <h5>Cliente: </h5>Bruno, 123.456.789-09
                  </span>
                  <span>
                    <h5>Veículo: </h5>HB20, 2016, ABC-123
                  </span>
                  <span>
                    <h5>Data de Entrega: </h5>28/08/2023
                  </span>
                  <span>
                    <h5>KM Entrega: </h5>78540
                  </span>
                  <span>
                    <h5>Seguro: </h5>Sim
                  </span>
                </div>
                <div className="observacao-locacao">
                  <h5>Observações</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quia tempora ipsa blanditiis quaerat. Culpa quo corporis
                    aliquid quis voluptas sit in vitae nobis nulla numquam
                    necessitatibus, consequuntur neque? Incidunt, eveniet!
                  </p>
                </div>
              </div>
              <button>Salvar</button>
            </div>

            <div className="finalizacao-locacao">
              <div className="secao">
                <h2>Finalizar Locação</h2>
                <div className="informacoes-finalizacao-locacao">
                  <div className="valores-locacao">
                    <InputPadrao />
                    <InputPadrao />
                    <div className="total-locacao">
                      <h3>Total</h3>R$ 850,00
                    </div>
                  </div>
                  <div>
                    <span>
                      Observação
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque aspernatur quibusdam consequatur nemo id magnam
                        harum corporis aut in accusantium aliquid fugiat, nam
                        voluptas! Voluptatem, enim libero! Voluptates, molestiae
                        nesciunt.
                      </p>
                    </span>
                    <button>Salvar Locação</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
