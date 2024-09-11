import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

export default function ItemsTable() {
  const { items } = useStock();

  if (!items || items.length === 0) {
    return <div className="wrapper"><p className="notice">Nenhum item adicionado.</p></div>;
  }

  return (
    <div className="wrapper">
      <table className="table">
        <thead className="thead">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {items.map((item) => (
            <tr className="tr" key={item.id}>
              <td className="td" data-label="ID">
                {item.id}
              </td>
              <td className="td" data-label="Nome">
                {item.name}
              </td>
              <td className="td" data-label="Em Estoque">
                {item.quantity} unid.
              </td>
              <td className="td" data-label="Categoria">
                {item.category}
              </td>
              <td className="tdBtn">
                <Link className="btnView" to={`/items/${item.id}`}>
                  Ver
                </Link>
                <Link className="btnUpdate" to={`/items/${item.id}/update`}>
                  Atualizar
                </Link>
                <DeleteButton itemId={item.id} itemName={item.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
