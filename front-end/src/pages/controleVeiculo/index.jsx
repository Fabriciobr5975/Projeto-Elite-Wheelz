import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function ControleVeiculo() {
  const [veiculo, setVeiculo] = useState({});
  const [listaVeiculos, setListaVeiculos] = useState([]);
  const [veiculoBusca, setVeiculoBusca] = useState("");

  const inserirVeiculo = async () => {
    try {
      const url = "http://localhost:5001/veiculo";
      await axios.post(url, veiculo);
      alert("Veículo inserido com sucesso");
    
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao cadastrar o veículo");
    }
  };

  const alterarVeiculo = async () => {
    try {
      const url = `http://localhost:5001/veiculo/${veiculo.idVeiculo}`;
      await axios.put(url, veiculo);

      alert("Usuário alterado com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao alterar o veiculo");
    }
  };

  const manipularVeiculo = async () => {
    if (!veiculo.idVeiculo || veiculo.idVeiculo === 0) {
      await inserirVeiculo();
    } else {
      await alterarVeiculo();
    }

    await listarVeiculos();
    limparVeiculo();
  };

  const removerVeiculo = async (idVeiculo) => {
    if (!window.confirm("Essa ação pode ser barrada pelo banco de dados!")) {
      return;
    }

    try {
      const url = `http://localhost:5001/veiculo/${idVeiculo}`;
      await axios.delete(url);

      alert("Veículo deletado com sucesso");
      await listarVeiculos();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao remover o veículo");
    }
  };

  const listarVeiculos = async () => {
    try {
      const url = "http://localhost:5001/veiculo";
      const resp = await axios.get(url);

      setListaVeiculos(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  };

  const buscarVeiculoPorCaracteristica = useCallback(async () => {
    try {
      const url = `http://localhost:5001/veiculo/busca?caracteristica=${veiculoBusca}`;
      const resp = await axios.get(url);
      setListaVeiculos(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }, [veiculoBusca]);

  const limparVeiculo = () => {
    if (veiculo) setVeiculo({veiculo:"", tipo:""});
  };

  useEffect(() => {
    buscarVeiculoPorCaracteristica();
  }, [veiculoBusca, buscarVeiculoPorCaracteristica]);

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
                <div className="campo-select">
                  <div className="cabecalho-select">
                    <label>Tipo</label>
                  </div>
                  <select
                    name="tipo-veiculo"
                    id="tipo-veiculo"
                    value={veiculo.tipo}
                    onChange={(e) =>
                      setVeiculo({ ...veiculo, tipo: e.target.value })
                    }
                  >
                    <option value="" disabled selected>
                      Selecione uma opção
                    </option>
                    <option value="Carro">Carro</option>
                    <option value="Moto">Moto</option>
                    <option value="Caminhonete">Caminhonete</option>
                  </select>
                </div>

                <InputPadrao
                  labelCampo="Modelo"
                  placeholder="Digite o modelo do veículo"
                  valor={veiculo.modelo}
                  setValor={(novoModelo) =>
                    setVeiculo({ ...veiculo, modelo: novoModelo })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="Marca"
                  placeholder="Digite a marca do veículo"
                  valor={veiculo.marca}
                  setValor={(novaMarca) =>
                    setVeiculo({ ...veiculo, marca: novaMarca })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="Placa"
                  placeholder="Digite a placa do veículo"
                  valor={veiculo.placa}
                  setValor={(novaPlaca) =>
                    setVeiculo({ ...veiculo, placa: novaPlaca })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="Ano"
                  placeholder="Digite o ano do veículo"
                  valor={veiculo.ano}
                  setValor={(novoAno) =>
                    setVeiculo({ ...veiculo, ano: novoAno })
                  }
                  required={true}
                />
                <button onClick={() => manipularVeiculo()}>Salvar</button>
              </div>
            </div>

            <div className="area-listagem-veiculo">
              <div className="secao">
                <div className="cabecalho-listagem">
                  <h2>Lista de Veiculos</h2>
                  <InputPadrao
                    labelCampo="Modelo, Marca, Placa"
                    placeholder="Busque os veículos por essas caracteristicas"
                    valor={veiculoBusca}
                    setValor={(busca) => setVeiculoBusca(busca)}
                    required={true}
                  />
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
                      {listaVeiculos.map((item) => (
                        <tr key={item.ID_VEICULO}>
                          <td>{item.DS_MODELO}</td>
                          <td>{item.DS_MARCA}</td>
                          <td>{item.NR_ANO}</td>
                          <td>{item.DS_TIPO}</td>
                          <td>{item.DS_PLACA}</td>
                          <td>
                            <div className="icones-tabela">
                              <i
                                class="fa-solid fa-pen-to-square"
                                onClick={() =>
                                  setVeiculo((prev) => ({
                                    ...prev,
                                    idVeiculo: item.ID_VEICULO,
                                    tipo: item.DS_TIPO,
                                    modelo: item.DS_MODELO,
                                    marca: item.DS_MARCA,
                                    placa: item.DS_PLACA,
                                    ano: item.NR_ANO,
                                  }))
                                }
                              ></i>
                              <i
                                class="fa-solid fa-trash-can"
                                onClick={() => removerVeiculo(item.ID_VEICULO)}
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
