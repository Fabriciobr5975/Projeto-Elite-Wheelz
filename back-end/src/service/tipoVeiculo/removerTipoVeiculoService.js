import { deletarTipoVeiculo } from "../../repository/veiculo/tipoVeiculoRepository.js";

export default async function removerTipoVeiculoService(id) {
    const resposta = await deletarTipoVeiculo(id);

    return resposta;
}