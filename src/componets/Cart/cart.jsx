import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import ItemCart from "../ItemCart/itemCart"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, totalQuantity,totalToPay, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>Carrito vacio.</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }


    return (
        <div>
            {cart.map(p => <ItemCart key={p.id}{...p} />)}
            <h3>Total: ${totalToPay}</h3>
            <Button onClick={() => clearCart()} className='Button'>Limpiar carrito</Button>
            <Button as={Link} to={`/checkout`} variant="primary">Ir a pagar</Button>
            <Button as={Link} to={`/`} variant="primary">Seguir comprando</Button>
            
        </div>
    )
}
export default Cart