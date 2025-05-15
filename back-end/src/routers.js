import clienteController from "./controller/cliente/clienteController.js";
import tipoVeiculoController from "./controller/veiculo/tipoVeiculoController.js";
import veiculoController from "./controller/veiculo/veiculoController.js";
import locacaoController from "./controller/locacao/locacaoController.js";

export default function adicionarRotas(servidor) {
  servidor.use(clienteController);
  servidor.use(tipoVeiculoController);
  servidor.use(veiculoController);
  servidor.use(locacaoController);
}
