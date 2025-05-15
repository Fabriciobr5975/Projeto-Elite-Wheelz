import { buscarTipoVeiculo } from "../../repository/veiculo/tipoVeiculoRepository.js";

export default async function buscarTipoVeiculoService(tipo) {
    const resposta = await buscarTipoVeiculo(tipo);

    return resposta;
}