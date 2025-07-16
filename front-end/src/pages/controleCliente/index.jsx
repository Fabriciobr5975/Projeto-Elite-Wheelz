import "./index.scss";

import Navegacao from "../../components/navegacao";
import InputPadrao from "../../components/inputPadrao";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function ControleCliente() {
  const [cliente, setCliente] = useState({});
  const [listaClientes, setListaClientes] = useState([]);
  const [clienteBusca, setClienteBusca] = useState("");

  const inserirCliente = async () => {
    try {
      const url = "http://localhost:5001/cliente";
      await axios.post(url, cliente);
      alert("Usuário inserido com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao cadastrar o cliente");
    }
  };

  const alterarCliente = async () => {
    try {
      const url = `http://localhost:5001/cliente/${cliente.idCliente}`;
      await axios.put(url, cliente);

      alert("Usuário alterado com sucesso");
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao alterar o cliente");
    }
  };

  const manipularUsuario = async () => {
    if (!cliente.idCliente || cliente.idCliente === 0) {
      await inserirCliente();
    } else {
      await alterarCliente();
    }

    await listarClientes();
    limparCliente();
  };

  const removerCliente = async (idCliente) => {
    if (!window.confirm("Essa ação pode ser barrada pelo banco de dados!")) {
      return;
    }

    try {
      const url = `http://localhost:5001/cliente/${idCliente}`;
      await axios.delete(url);

      alert("Usuário deletado com sucesso");
      await listarClientes();
    } catch (error) {
      alert(error.response?.data?.erro ?? "Erro ao remover o cliente");
    }
  };

  const listarClientes = async () => {
    try {
      const url = "http://localhost:5001/cliente";
      const resp = await axios.get(url);

      setListaClientes(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  };

  const buscarClientesPorNome = useCallback(async () => {
    try {
      const url = `http://localhost:5001/cliente/busca?nome=${clienteBusca}`;
      const resp = await axios.get(url);
      setListaClientes(resp.data);
    } catch (error) {
      alert(error.response?.data?.erro);
    }
  }, [clienteBusca]);

  const limparCliente = () => {
    if (cliente) setCliente({});
  };

  useEffect(() => {
    buscarClientesPorNome();
  }, [clienteBusca, buscarClientesPorNome]);

  return (
    <section className="pagina-controle-cliente">
      <Navegacao />

      <div className="conteudo-pagina-controle-cliente">
        <div className="cabecalho">
          <span>Olá, que bom que você voltou!</span>
          <div className="usuario">
            <h5>A</h5>
          </div>
        </div>

        <div className="conteudo">
          <div className="titulo-pagina">
            <span id="area-administrativa">ÁREA ADMINISTRATIVA</span>
            <h1>Controle de Cliente</h1>
          </div>

          <div className="area-insercao-cliente">
            <div className="secao">
              <h2>Novo Cliente</h2>
              <div className="entrada-dados">
                <InputPadrao
                  labelCampo="Nome"
                  placeholder="Digite o seu Nome"
                  valor={cliente.nome}
                  setValor={(novoNome) =>
                    setCliente({ ...cliente, nome: novoNome })
                  }
                  required={true}
                />
                <InputPadrao
                  type="email"
                  labelCampo="Email"
                  placeholder="Digite o seu e-mail"
                  valor={cliente.email}
                  setValor={(novoEmail) =>
                    setCliente({ ...cliente, email: novoEmail })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="Telefone"
                  placeholder="Digite o seu telefone"
                  valor={cliente.telefone}
                  setValor={(novoTelefone) =>
                    setCliente({ ...cliente, telefone: novoTelefone })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="CPF"
                  placeholder="Digite o seu CPF"
                  valor={cliente.cpf}
                  setValor={(novoCpf) =>
                    setCliente({ ...cliente, cpf: novoCpf })
                  }
                  required={true}
                />
                <InputPadrao
                  labelCampo="CNH"
                  placeholder="Digite o seu CNH"
                  valor={cliente.cnh}
                  setValor={(novaCnh) =>
                    setCliente({ ...cliente, cnh: novaCnh })
                  }
                  required={true}
                />
                <button onClick={() => manipularUsuario()}>Salvar</button>
              </div>
            </div>

            <div className="area-listagem-cliente">
              <div className="secao">
                <div className="cabecalho-listagem">
                  <h2>Lista de Clientes</h2>
                  <InputPadrao
                    labelCampo="Nome"
                    placeholder="Digite o nome para realizar a busca"
                    valor={clienteBusca}
                    setValor={(novoClienteBusca) =>
                      setClienteBusca(novoClienteBusca)
                    }
                    required={true}
                  />
                </div>
                <div className="listagem-cliente">
                  <table>
                    <colgroup>
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="campo-tabela" />
                      <col className="edicao-cliente" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {listaClientes.map((item) => (
                        <tr key={item.ID_CLIENTE}>
                          <td>{item.NM_CLIENTE}</td>
                          <td>{item.DS_CPF}</td>
                          <td>{item.DS_TELEFONE}</td>
                          <td>{item.DS_EMAIL}</td>
                          <td>
                            <div className="icones-tabela">
                              <i
                                class="fa-solid fa-pen-to-square"
                                onClick={() =>
                                  setCliente((prev) => ({
                                    ...prev,
                                    idCliente: item.ID_CLIENTE,
                                    nome: item.NM_CLIENTE,
                                    cpf: item.DS_CPF,
                                    email: item.DS_EMAIL,
                                    telefone: item.DS_EMAIL,
                                    cnh: item.DS_CNH,
                                  }))
                                }
                              ></i>
                              <i
                                class="fa-solid fa-trash-can"
                                onClick={() => removerCliente(item.ID_CLIENTE)}
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
