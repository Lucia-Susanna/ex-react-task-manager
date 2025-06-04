import { createPortal } from "react-dom"

const Modal = ({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) => {
    if (!show) return null

    return createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <h3>{title}</h3>
                {content}
                <div className="modal-action">
                    <button onClick={onConfirm}>{confirmText}</button>
                    <button onClick={onClose}>Annulla</button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal
