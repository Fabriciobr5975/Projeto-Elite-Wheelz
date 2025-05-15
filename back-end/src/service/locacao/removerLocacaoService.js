import { deletarLocacao } from "../../repository/locacao/locacaoRepository.js";

export default async function deletarLocacaoService(id) {
    const resposta = await deletarLocacao(id);

    return resposta;
}