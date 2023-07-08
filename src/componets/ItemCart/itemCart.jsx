import './itemCart.css'
import { useNavigate } from 'react-router-dom';
import {  useCart } from "../../context/cartContext"
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const ItemCart = ({ id, nombre, quantity, precio }) => {
    const navigate = useNavigate()

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        removeItem(id)
    }
    return (
        <div className="ItemCart">
            <div className="background">
                <div className="item-info">
                    <div className="item-name">{nombre}</div>
                    <div className="item-quantity">Cantidad: {quantity}</div>
                    <div>Precio unitario: ${precio}</div>
                    <div className="item-total">Total: {quantity * precio}</div>
                </div>
                <FontAwesomeIcon
                    icon={faTrashAlt}
                    className="delete-icon"
                    onClick={handleRemoveItem}
                />
            </div>
        </div>
    );
}

export default ItemCart