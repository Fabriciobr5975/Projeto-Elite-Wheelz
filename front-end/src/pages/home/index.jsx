import "./index.scss";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="pagina-home">
      <div className="navegacao-home">
        <h2>Navegação</h2>
        <ul>
          <li>
            <Link to="/controlecliente">Cliente</Link>
          </li>
          <li>
            <Link to="/controleveiculo">Veículo</Link>
          </li>
          <li>
            <Link to="/locacaoveiculo">Locação</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
