import { deletarVeiculo } from "../../repository/veiculo/veiculoRepository.js";

export default async function deletarVeiculoService(id) {
    const resposta = await deletarVeiculo(id);

    return resposta;
}