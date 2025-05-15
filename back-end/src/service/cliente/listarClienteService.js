import { listarCliente } from "../../repository/cliente/clienteRepository.js";

export default async function listarClienteService() {
    const resposta = await listarCliente();

    return resposta;
}