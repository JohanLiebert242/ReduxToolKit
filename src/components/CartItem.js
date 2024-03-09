import { ChevronUp, ChevronDown } from "../icons";
import { useDispatch } from "react-redux";
import {
    removeItem,
    increaseAmount,
    decreaseAmount,
} from "../features/cart/cartSlice";

function CartItem({ id, title, price, img, amount }) {
    const dispatch = useDispatch();

    const handleDecreaseAmount = (id) => {
        if (amount === 1) {
            dispatch(removeItem(id));
            return;
        }

        dispatch(decreaseAmount(id));
    };

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button
                    onClick={() => dispatch(removeItem(id))}
                    className="remove-btn"
                >
                    remove
                </button>
            </div>
            <div>
                <button
                    onClick={() => dispatch(increaseAmount(id))}
                    className="amount-btn"
                >
                    <ChevronUp></ChevronUp>
                </button>
                <p className="amount">{amount}</p>
                <button
                    onClick={() => handleDecreaseAmount(id)}
                    className="amount-btn"
                >
                    <ChevronDown></ChevronDown>
                </button>
            </div>
        </article>
    );
}

export default CartItem;
