import { listarTipoVeiculo } from "../../repository/veiculo/tipoVeiculoRepository.js";

export default async function listarTipoVeiculoService() {
    const resposta = await listarTipoVeiculo();

    return resposta;
}