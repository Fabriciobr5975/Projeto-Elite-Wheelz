import { alterarVeiculo } from "../../repository/veiculo/veiculoRepository.js";

export default async function alterarVeiculoService(veiculo, id) {
    const resposta = await alterarVeiculo(veiculo, id);

    return resposta;
}