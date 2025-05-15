import { buscarClientePorCpf } from "../../repository/cliente/clienteRepository.js";

export default async function buscarClientePorCpfService(cpf) {
    const resposta = await buscarClientePorCpf(cpf);

    return resposta;
}