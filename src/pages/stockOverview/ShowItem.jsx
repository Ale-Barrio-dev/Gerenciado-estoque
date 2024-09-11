import { Link, useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import DeleteButton from "../../components/DeleteButton";
import dayjs from "dayjs";

export default function ShowItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);

  const price = Number(item.price); 
  const formattedPrice = !isNaN(price) ? `R$ ${price.toFixed(2)}` : "Preço inválido";

  return (
    <div className="wrapperShowItem">
      <div className="item">
        <h2 className="NameItem">{item.name}</h2>
        <Link to={`/items/${item.id}/update`} className="btnUpdate">
          Atualizar
        </Link>
        <DeleteButton itemId={item.id} itemName={item.name} />
        <div className="containerSpecification">
          <span className="specificationItems">Categoria: {item.category}</span>
          <span className="specificationItems">
            Quantidade em estoque: {item.quantity}
          </span>
          <span className="specificationItems">
            Preço: {formattedPrice}
          </span>
        </div>
        <p className="paragraph">{item.description}</p>
        <div>
          <p className="paragraph">
            Cadastrado em: {dayjs(item.createAt).format("DD/MM/YYYY")}
          </p>
          <p className="paragraph">
            Atualizado em: {dayjs(item.updateAt).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
}
