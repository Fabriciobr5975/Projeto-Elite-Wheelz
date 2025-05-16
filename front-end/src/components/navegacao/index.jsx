import "./index.scss";
import { Link } from "react-router-dom";

export default function Navegacao() {
  return (
    <section className="comp-navegacao">
      <img src="/logo-provisoria.png" alt="Logo" />

      <div className="links-navegacao">
        <div className="item">
          <i class="fa-solid fa-house"></i> <Link to="/home">Home</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-user"></i> <Link to="/home">Clientes</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-car"></i> <Link to="/home">Veículo</Link>
        </div>
        <div className="item">
          <i class="fa-solid fa-key"></i> <Link to="/home">Veículo</Link>
        </div>
      </div>
    </section>
  );
}
