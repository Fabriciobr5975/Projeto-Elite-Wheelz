import { deletarCliente } from "../../repository/cliente/clienteRepository.js";

export default async function removerClienteService(id) {
    const resposta = await deletarCliente(id);

    return resposta;
}