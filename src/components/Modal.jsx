import PropTypes from "prop-types";

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default function Modal({ show, children }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
