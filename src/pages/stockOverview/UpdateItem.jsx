import { useParams } from "react-router-dom";
import useStock from "../../hooks/useStock";
import ItemForm from "../../components/ItemForm";

export default function UpdateItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(+id);

  return (
    <>
      <h1>Atualizar Item - {item.name}</h1>
      <ItemForm itemToUpdate={item} />
    </>
  );
}
