import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function EntregaVeiculo() {
  const location = useLocation();
  const dados = location.state || {};
  const [locacao, setLocacao] = useState({});
  const [valorTotalLocacao, setValorTotalLocacao] = useState(0);

  const alterarLocacao = async () => {
    try {
      const body = {
        cliente: dados.item.ID_CLIENTE,
        veiculo: dados.item.ID_VEICULO,
        km_retirada: dados.item.NR_KM_RETIRADA,
        data_locacao: dados.item.DT_LOCACAO,
        seguro: dados.item.BT_SEGURO,
        observacoes: dados.item.DS_OBSERVACOES,
        situacao: "Concluída",
        km_entrega: locacao.km_entrega,
        entrega: locacao.data_entrega,
        total: valorTotalLocacao,
      };

      const url = `http://localhost:5001/locacao/${dados.item.ID_LOCACAO}`;
      await axios.put(url, body);
      alert("Locação salva com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao cadastrar o veículo");
    }
  };

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
                    <h5>Cliente: </h5>
                    {dados.item.NM_CLIENTE} {dados.item.DS_CPF}
                  </span>
                  <span>
                    <h5>Veículo: </h5> {dados.item.DS_MODELO}{" "}
                    {dados.item.NR_ANO} {dados.item.DS_PLACA}
                  </span>
                  <span>
                    <h5>Data de Locação: </h5>
                    {dados.item.DT_LOCACAO}
                  </span>
                  <span>
                    <h5>KM Entrega: </h5>
                    {dados.item.NR_KM_RETIRADA}
                  </span>
                  <span>
                    <h5>Seguro: </h5>
                    {dados.item.BT_SEGURO ? "Sim" : "Não"}
                  </span>
                </div>
                <div className="observacao-locacao">
                  <h5>Observações</h5>
                  <p>{dados.item.DS_OBSERVACOES}</p>
                </div>
              </div>
            </div>

            <div className="finalizacao-locacao">
              <div className="secao">
                <h2>Finalizar Locação</h2>
                <div className="informacoes-finalizacao-locacao">
                  <div className="valores-locacao">
                    <InputPadrao
                      tipoCampo="date"
                      labelCampo="Data de Entrega"
                      placeholder="Digite a data de entrega"
                      valor={locacao.data_entrega}
                      setValor={(novaDataEntrega) =>
                        setLocacao({
                          ...locacao,
                          data_entrega: novaDataEntrega,
                        })
                      }
                      required={true}
                    />
                    <InputPadrao
                      tipoCampo="number"
                      labelCampo="KM Entrega"
                      placeholder="Digite a KM de entrega"
                      valor={locacao.km_Entrega}
                      setValor={(novoKmEntrega) =>
                        setLocacao({ ...locacao, km_Entrega: novoKmEntrega })
                      }
                      required={true}
                    />
                    <div className="total-locacao">
                      <h3>Total</h3>
                      <div className="informacao-total">
                        <p>R$</p>
                        <input
                          className="input-total"
                          type="number"
                          value={valorTotalLocacao}
                          onChange={(e) => setValorTotalLocacao(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="observacoes-locacao">
                    <div className="campo-textarea">
                      <div className="cabecalho-textarea">
                        <label>Observações</label>
                      </div>
                      <textarea
                        rows={4}
                        value={locacao.observacoes}
                        onChange={(e) =>
                          setLocacao({
                            ...locacao,
                            observacoes: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <button onClick={() => alterarLocacao()}>
                      Salvar Locação
                    </button>
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
