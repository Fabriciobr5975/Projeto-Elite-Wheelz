import { buscarVeiculoPorCaracteristica } from "../../repository/veiculo/veiculoRepository.js";

export default async function buscarVeiculoPorCaracteristicaService(caracteristica) {
    const resposta = await buscarVeiculoPorCaracteristica(caracteristica);

    return resposta;
}