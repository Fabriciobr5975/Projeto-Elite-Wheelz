import { alterarLocacao } from "../../repository/locacao/locacaoRepository.js";

export default async function alterarLocacaoService(locacao, id) {
    const resposta = await alterarLocacao(locacao, id);

    return resposta;
}