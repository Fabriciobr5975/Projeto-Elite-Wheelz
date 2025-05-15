import { listarLocacao } from "../../repository/locacao/locacaoRepository.js";

export default async function listarLocacaoService() {
    const resposta = await listarLocacao();

    return resposta;
}