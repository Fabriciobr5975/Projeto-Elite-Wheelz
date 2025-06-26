import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

export default function ControleVeiculo() {
  return (
    <section className="pagina-controle-veiculo">
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
            <h1>Controle de Veículos</h1>
          </div>

          <div className="area-insercao-veiculo">
            <div className="secao">
              <h2>Novo Veículo</h2>
              <div className="entrada-dados">
                <InputPadrao />
                <InputPadrao />
                <InputPadrao />
                <InputPadrao />
                <InputPadrao />
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
                      <col className="campo-tabela" />
                        <col className="edicao-veiculo" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Tipo</th>
                        <th>Placa</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HB20</td>
                        <td>Hyundai</td>
                        <td>2016</td>
                        <td>Carro</td>
                        <td>ABC-126</td>
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
