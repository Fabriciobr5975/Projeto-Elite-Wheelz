import ControleCliente from "./pages/controleCliente"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Navegacao() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/controlecliente" replace />} />
        <Route path="/controlecliente" element={<ControleCliente />} />
      </Routes>
    </BrowserRouter>
  );
}
