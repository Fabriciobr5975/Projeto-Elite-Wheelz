import { inserirCliente } from "../../repository/cliente/clienteRepository.js";

export default async function insirirClienteService(cliente) {
    const resposta = await inserirCliente(cliente);

    return resposta;
}