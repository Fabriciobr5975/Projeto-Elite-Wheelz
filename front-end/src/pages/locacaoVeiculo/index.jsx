import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LocacaoVeiculo() {
  const [buscaCliente, setBuscaCliente] = useState("");
  const [listaClientes, setListaClientes] = useState([]);

  const [buscaVeiculo, setBuscaVeiculo] = useState("");
  const [listaVeiculos, setListaVeiculos] = useState([]);

  const [locacao, setLocacao] = useState({ seguro: false });
  const [listaLocacao, setListaLocacao] = useState([]);
  const [clienteBuscaListagem, setClienteBuscaListagem] = useState("");

  const navigate = useNavigate();

  const buscarClientes = useCallback(async () => {
    try {
      const url = `http://localhost:5001/cliente/busca?nome=${buscaCliente}`;
      const resp = await axios.get(url);
      setListaClientes(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }, [buscaCliente]);

  useEffect(() => {
    buscarClientes();
  }, [buscaCliente, buscarClientes]);

  const buscarVeiculos = useCallback(async () => {
    try {
      const url = `http://localhost:5001/veiculo/busca?caracteristica=${buscaVeiculo}`;
      const resp = await axios.get(url);

      setListaVeiculos(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }, [buscaVeiculo]);

  useEffect(() => {
    buscarVeiculos();
  }, [buscaVeiculo, buscarVeiculos]);

  const inserirLocacao = async () => {
    try {
      const body = {
        cliente: locacao.cliente,
        veiculo: locacao.veiculo,
        km_retirada: locacao.km_retirada,
        data_locacao: locacao.data_locacao,
        seguro: locacao.seguro,
        observacoes: locacao.observacoes,
        situacao: "Em Andamento",
        km_entrega: 0,
        entrega: 0,
        total: 0,
      };

      const url = "http://localhost:5001/locacao";
      await axios.post(url, body);
      alert("Locacao inserida com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao cadastrar o veículo");
    }
  };

  const alterarLocacao = async () => {
    try {
      const url = `http://localhost:5001/locacao/${locacao.idLocacao}`;
      await axios.put(url, locacao);

      alert("Locação alterado com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao alterar o veiculo");
    }
  };

  const manipularLocacao = async () => {
    if (!locacao.idLocacao || locacao.idLocacao === 0) {
      await inserirLocacao();
    } else {
      await alterarLocacao();
    }

    await listarLocacao();
    limparLocacao();
  };

  const removerLocacao = async (idLocacao) => {
    if (!window.confirm("Essa ação pode ser barrada pelo banco de dados!")) {
      return;
    }

    try {
      const url = `http://localhost:5001/locacao/${idLocacao}`;
      await axios.delete(url);

      alert("Locação Removida com sucesso");
      await listarLocacao();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao remover a locação");
    }
  };

  const listarLocacao = async () => {
    try {
      const url = "http://localhost:5001/locacao";
      const resp = await axios.get(url);

      setListaLocacao(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  };

  const buscarLocacaoPorCliente = useCallback(async () => {
    try {
      const url = `http://localhost:5001/locacao/busca/cliente?cliente=${clienteBuscaListagem}`;
      const resp = await axios.get(url);
      setListaLocacao(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }, [clienteBuscaListagem]);

  const limparLocacao = () => {
    if (locacao) {
      setLocacao({ cliente: "", veiculo: "", observacoes: "" });
      setBuscaCliente("");
      setBuscaVeiculo("");
    }
  };

  const concluirLocacao = async (item) => {
    navigate("/teste", {
      state: { item }});
  };

  useEffect(() => {
    buscarLocacaoPorCliente();
  }, [buscarLocacaoPorCliente]);


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
                  <InputPadrao
                    labelCampo="Nome"
                    placeholder="Digite o nome do cliente"
                    valor={buscaCliente}
                    setValor={(novaBusca) => setBuscaCliente(novaBusca)}
                    required={true}
                  />
                  <i class="fa-solid fa-arrow-right"></i>

                  <div className="campo-select">
                    <div className="cabecalho-select">
                      <label>Cliente</label>
                    </div>
                    <select
                      name="clientes"
                      value={locacao.cliente}
                      onChange={(e) =>
                        setLocacao({ ...locacao, cliente: e.target.value })
                      }
                    >
                      <option value={0} selected disabled>
                        Selecione um cliente
                      </option>
                      {listaClientes.map((item) => (
                        <option value={item.ID_CLIENTE}>
                          {item.NM_CLIENTE}, {item.DS_CPF}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="informacao-veiculo">
                  <InputPadrao
                    labelCampo="Modelo"
                    placeholder="Digite o modelo do veículo"
                    valor={buscaVeiculo}
                    setValor={(novaBusca) => setBuscaVeiculo(novaBusca)}
                    required={true}
                  />
                  <i class="fa-solid fa-arrow-right"></i>

                  <div className="campo-select">
                    <div className="cabecalho-select">
                      <label>Veiculo</label>
                    </div>
                    <select
                      name="veiculos"
                      value={locacao.veiculo}
                      onChange={(e) =>
                        setLocacao({ ...locacao, veiculo: e.target.value })
                      }
                    >
                      <option value={0} selected disabled>
                        Selecione um veículo
                      </option>
                      {listaVeiculos.map((item) => (
                        <option value={item.ID_VEICULO}>
                          {item.DS_MODELO}, {item.NR_ANO}, {item.DS_PLACA}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="informacoes-adicionas">
                  <div className="inputs-informacoes-adicionas">
                    <InputPadrao
                      tipoCampo="date"
                      labelCampo="Data de Locação"
                      placeholder="Digite o nome do cliente para a locação"
                      valor={locacao.data_locacao}
                      setValor={(dataLocacao) =>
                        setLocacao({ ...locacao, data_locacao: dataLocacao })
                      }
                      required={true}
                    />
                    <InputPadrao
                      tipoCampo="number"
                      labelCampo="KM Retirada"
                      placeholder="Digite a KM retirada"
                      valor={locacao.km_retirada}
                      setValor={(novoKmRetirada) =>
                        setLocacao({ ...locacao, km_retirada: novoKmRetirada })
                      }
                      required={true}
                    />
                    <div className="input-checkbox">
                      <input
                        type="checkbox"
                        value={locacao.seguro}
                        onChange={(e) =>
                          setLocacao({
                            ...locacao,
                            seguro: e.target.checked,
                          })
                        }
                      />{" "}
                      Seguro
                    </div>
                  </div>
                  <div className="campo-textarea">
                    <div className="cabecalho-textarea">
                      <label>Tipo</label>
                    </div>
                    <textarea
                      rows={4}
                      value={locacao.observacoes}
                      onChange={(e) =>
                        setLocacao({ ...locacao, observacoes: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <button onClick={() => manipularLocacao()}>Salvar</button>
              </div>
            </div>

            <div className="area-listagem-veiculo">
              <div className="secao">
                <div className="cabecalho-listagem">
                  <h2>Lista de Veiculos</h2>
                  <InputPadrao
                    labelCampo="Nome ou CPF"
                    placeholder="Digite o nome ou seu CPF para a busca"
                    valor={clienteBuscaListagem}
                    setValor={(novoCliente) =>
                      setClienteBuscaListagem(novoCliente)
                    }
                  />
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
                      {listaLocacao.map((item) => (
                        <tr key={item.ID_LOCACAO}>
                          <td>{item.NM_CLIENTE}</td>
                          <td>{item.DS_CPF}</td>
                          <td>
                            {item.DS_MODELO} ({item.DS_PLACA})
                          </td>
                          <td>{(item.DT_LOCACAO)}</td>
                          <td>
                            <button onClick={() => concluirLocacao(item)}>Concluir</button>
                          </td>
                          <td>
                            <div className="icones-tabela">
                              <i
                                class="fa-solid fa-pen-to-square"
                                onClick={() =>
                                  setLocacao((prev) => ({
                                    ...prev,
                                    idLocacao: item.ID_LOCACAO,
                                    cliente: item.ID_CLIENTE,
                                    veiculo: item.ID_VEICULO,
                                    km_retirada: item.NR_KM_RETIRADA,
                                    data_locacao: item.DT_LOCACAO,
                                    seguro: item.BT_SEGURO,
                                    observacoes: item.DS_OBSERVACOES,
                                    situacao: item.DS_SITUACAO,
                                    km_entrega: item.NR_KM_ENTREGA,
                                    entrega: item.DT_ENTREGA,
                                    total: item.VL_TOTAL,
                                  }))
                                }
                              ></i>
                              <i
                                class="fa-solid fa-trash-can"
                                onClick={() => removerLocacao(item.ID_LOCACAO)}
                              ></i>
                            </div>
                          </td>
                        </tr>
                      ))}
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
