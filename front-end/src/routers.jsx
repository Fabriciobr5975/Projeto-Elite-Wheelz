import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ControleCliente from "./pages/controleCliente";
import ControleVeiculo from "./pages/controleVeiculo";
import LocacaoVeiculo from "./pages/locacaoVeiculo";
import EntregaVeiculo from "./pages/entregaVeiculo";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/controlecliente" replace />} />
        <Route path="/controlecliente" element={<ControleCliente />} />
        <Route path="/controleveiculo" element={<ControleVeiculo />} />
        <Route path="/locacaoveiculo" element={<LocacaoVeiculo />} />
        <Route path="/teste" element={<EntregaVeiculo />} />
      </Routes>
    </BrowserRouter>
  );
}
