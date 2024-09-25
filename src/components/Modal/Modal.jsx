import PropTypes from "prop-types";
import css from "./modal.module.css";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={css.modalOverlay}>
            <div className={css.modalContent}>
                <button className={css.closeButton} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,       
    onClose: PropTypes.func.isRequired,      
    children: PropTypes.node.isRequired,     
};