import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

export default function LocacaoVeiculo() {
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
            <h1>Controle de Locação</h1>
          </div>

          <div className="area-locacao-veiculo">
            <div className="secao">
              <h2>Nova Locacao</h2>
              <div className="entrada-dados">
                <div className="informacao-cliente">
                  <InputPadrao />
                  <i class="fa-solid fa-arrow-right"></i>
                  <InputPadrao />
                </div>
                <div className="informacao-veiculo">
                  <InputPadrao />
                  <i class="fa-solid fa-arrow-right"></i>
                  <InputPadrao />
                </div>
                <div className="informacoes-adicionas">
                  <div className="inputs-informacoes-adicionas">
                    <InputPadrao />
                    <InputPadrao />
                    <div className="input-checkbox">
                      <input type="checkbox" /> Seguro
                    </div>
                  </div>
                  <textarea rows={10}></textarea>
                </div>
                <button>Salvar</button>
              </div>
            </div>

            <div className="area-listagem-veiculo">
              <div className="secao">
                <div className="cabecalho-listagem">
                  <h2>Lista de Veiculos</h2>
                  <InputPadrao />
                </div>
                <div className="listagem-veiculo">
                  <table>
                    <colgroup>
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="botao-tabela" />
                      <col className="edicao-veiculo" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>Veículo</th>
                        <th>Data da Locação</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Bruno</td>
                        <td>123.456.789-09</td>
                        <td>HB20 (ABC-123)</td>
                        <td>28/03/2023</td>
                        <td><button>Concluir</button></td>
                        <td>
                          <i class="fa-solid fa-pen-to-square"></i>
                          <i class="fa-solid fa-trash-can"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
