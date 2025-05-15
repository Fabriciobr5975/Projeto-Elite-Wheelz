import { inserirLocacao } from "../../repository/locacao/locacaoRepository.js";

export default async function inserirLocacaoService(locacao) {
    const resposta = await inserirLocacao(locacao);

    return resposta;
}