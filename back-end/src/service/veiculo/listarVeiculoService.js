import { listarVeiculo } from "../../repository/veiculo/veiculoRepository.js";

export default async function listarVeiculoService() {
    const resposta = await listarVeiculo();

    return resposta;
}