import { buscarLocacaoPorVeiculo } from "../../repository/locacao/locacaoRepository.js";

export default async function buscarLocacaoPorVeiculoService(veiculo) {
  const resposta = await buscarLocacaoPorVeiculo(veiculo);

  return resposta;
}
