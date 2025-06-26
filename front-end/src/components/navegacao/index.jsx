import "./index.scss";
import { Link } from "react-router-dom";

export default function Navegacao() {
  return (
    <section className="comp-navegacao">
      <div className="logo">
        <img src="/logo-provisoria.png" alt="Logo" />
      </div>
      <div className="links-navegacao">
        <div className="item">
          <i class="fa-solid fa-house"></i> <Link to="/home">Home</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-user"></i> <Link to="/controlecliente">Clientes</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-car"></i> <Link to="/controleveiculo">Veículo</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-key"></i> <Link to="/locacaoveiculo">Locação</Link>
        </div>
      </div>
    </section>
  );
}
