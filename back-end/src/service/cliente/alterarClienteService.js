import { alterarCliente } from "../../repository/cliente/clienteRepository.js";

export default async function alterarClienteService(cliente, id) {
    const resposta = await alterarCliente(cliente, id);

    return resposta;
}