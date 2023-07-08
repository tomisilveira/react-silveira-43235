import './CardWidget.css'
import Button from 'react-bootstrap/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';



const CardWidget = () => {

   
    const { cart, clearCart, totalProductsAdded,totalToPay, total } = useContext(CartContext)
    

    return (
        <div className='CardWidget'>
            <Button as={Link} to={`/cart`}  type="button" className="btn btn-primary position-relative" size="sm" >
            
            <FontAwesomeIcon icon={faCartShopping} width={50} color='black' />
            
                <span className="position-absolute top-100 start-80 translate-middle badge rounded-pill bg-danger">
                {totalProductsAdded}
                </span>
            
            </Button>
        </div>
    )
}

export default CardWidget