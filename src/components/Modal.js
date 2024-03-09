import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
    const dispatch = useDispatch();

    const handleConfirm = () => {
        dispatch(clearCart());
        dispatch(closeModal());
    };

    return (
        <aside className="modal-container">
            <div className="modal">
                <h4>Remove all items from your shopping cart?</h4>
                <div className="btn-container">
                    <button
                        onClick={handleConfirm}
                        type="button"
                        className="btn confirm-btn"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={() => dispatch(closeModal())}
                        type="button"
                        className="btn clear-btn"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Modal;
