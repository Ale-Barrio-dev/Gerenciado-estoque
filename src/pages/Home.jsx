import dayjs from "dayjs";
import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";

export default function Home() {
  const { items } = useStock();

  const diversity = items.length;
  const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0);

  const today = dayjs();

  const limiteDate = today.subtract(1, "day");

  const recentItems = items.filter(
    (item) =>
      dayjs(item.createAt).isAfter(limiteDate) &&
      dayjs(item.createAt).isBefore(today)
  );
  const recentTotal = recentItems.length;

  const lowQuantityItems = items.filter((item) => item.quantity < 10);
  const lowQuantityTotal = lowQuantityItems.length;

  return (
    <main className="wrapperHome">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="dashboard-card">
          Diversidade de itens
          <span>{diversity}</span>
        </div>
        <div className="dashboard-card">
          Inventário total
          <span>{inventoryTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens recentes
          <span>{recentTotal}</span>
        </div>
        <div className="dashboard-card">
          Itens acabando
          <span>{lowQuantityTotal}</span>
        </div>
      </div>
      <div className="tables-container">
        <div className="recent">
          <table>
            <thead>
              <tr>
                <th>Itens Recentes</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.length > 0 ? (
                recentItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <Link to={`/items/${item.id}`} className="button">
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    Nenhum item recente encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="low">
          <table>
            <thead>
              <tr>
                <th>Itens acabando</th>
                <th>Qtd.</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lowQuantityItems.length > 0 ? (
                lowQuantityItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Link to={`/items/${item.id}`} className="btnView">
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    Nenhum item com quantidade baixa encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
