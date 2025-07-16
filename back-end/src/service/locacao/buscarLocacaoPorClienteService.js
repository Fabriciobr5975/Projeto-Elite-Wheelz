import { buscarLocacaoPorCliente } from "../../repository/locacao/locacaoRepository.js";

export default async function buscarLocacaoPorClienteService(cliente) {
  const resposta = await buscarLocacaoPorCliente(cliente);

  return resposta;
}
