// import { useNavigate } from "react-router-dom";
// import useStock from "../hooks/useStock";
// import PropTypes from "prop-types";

// DeleteButton.prototype = {
//   itemId: PropTypes.number.isRequired,
//   itemName: PropTypes.string.isRequired,
// };

// export default function DeleteButton({ itemId, itemName }) {
//   const { deleteItem } = useStock();
//   const navigate = useNavigate();

//   const handleDelete = () => {
//     if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
//       deleteItem(itemId);
//       navigate("/items");
//     }
//   };

//   return (
//     <button className="BtnDelete" onClick={handleDelete}>
//       Excluir
//     </button>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStock from "../hooks/useStock";
import PropTypes from "prop-types";
import Modal from "./Modal";

DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    deleteItem(itemId);
    navigate("/items");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className="BtnDelete" onClick={openModal}>
        Excluir
      </button>

      {showModal && (
        <Modal show={showModal}>
          <h2>Confirmação</h2>
          <br />
          <p>Tem certeza que deseja excluir {itemName}?</p>
          <br />
          <div className="modal-buttons">
            <button className="btnView" onClick={handleDelete}>
              Sim
            </button>
            <button className="BtnDelete" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
