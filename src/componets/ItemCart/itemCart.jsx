import { useNavigate } from 'react-router-dom';
import { CartContext, useCart } from "../../context/cartContext"
import Button from 'react-bootstrap/Button';


const ItemCart = ({ id, nombre, quantity, precio }) => {
    const navigate = useNavigate()

    const { removeItem } = useCart()

    const handleRemoveItem = (e) => {
        // e.stopPropagation()
        removeItem(id)
    }
    return (
        <div>
       ${id}
       {nombre}
       {quantity}
       ${precio}
       total: {quantity*precio}
       <Button onClick={() => handleRemoveItem(id)} className='Button'>Limpiar carrito</Button>
        </div>
    );
}

  export default ItemCart