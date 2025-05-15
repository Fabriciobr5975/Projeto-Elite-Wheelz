import { buscarVeiculoPorPlaca } from "../../repository/veiculo/veiculoRepository.js";

export default async function buscarVeiculoPorPlacaService(placa) {
    const resposta = await buscarVeiculoPorPlaca(placa);

    return resposta;
}