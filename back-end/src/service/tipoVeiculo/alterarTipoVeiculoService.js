import { alterarTipoVeiculo } from "../../repository/veiculo/tipoVeiculoRepository.js";

export default async function alterarTipoVeiculoService(tipoVeiculo, id) {
    const resposta = await alterarTipoVeiculo(tipoVeiculo, id);

    return resposta;
}