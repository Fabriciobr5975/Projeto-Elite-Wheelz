import { inserirTipoVeiculo } from "../../repository/veiculo/tipoVeiculoRepository.js";

export default async function insirirTipoVeiculoService(tipoVeiculo) {
    const resposta = await inserirTipoVeiculo(tipoVeiculo);

    return resposta;
}