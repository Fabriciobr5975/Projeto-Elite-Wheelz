import { inserirVeiculo } from "../../repository/veiculo/veiculoRepository.js";

export default async function inserirVeiculoService(veiculo) {
    const resposta = await inserirVeiculo(veiculo);

    return resposta;
}