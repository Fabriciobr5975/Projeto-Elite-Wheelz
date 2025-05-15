import { inserirVeiculo } from "../../repository/veiculo/veiculoRepository.js";

export default async function inserirVeiculoService(veiculo, id) {
    const resposta = await inserirVeiculo(veiculo, id);

    return resposta;
}