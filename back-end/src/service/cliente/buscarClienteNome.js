import { buscarClientePorNome } from "../../repository/cliente/clienteRepository.js";

export default async function buscarClientePorNomeService(nome) {
    const resposta = await buscarClientePorNome(nome);

    return resposta;
}