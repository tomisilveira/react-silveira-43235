import './CardWidget.css'
import Button from 'react-bootstrap/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';



const CardWidget = () => {

    const {totalQuantity}=useContext(CartContext)
    

    return (
        <div className='CardWidget'>
            <Button as={Link} to={`/cart`}  type="button" className="btn btn-primary position-relative" size="sm" >
            
            <FontAwesomeIcon icon={faCartShopping} width={50} color='black'/>
            
                <span className="position-absolute top-100 start-80 translate-middle badge rounded-pill bg-danger">
                    {totalQuantity}
                    {/* {console.log({totalQuantity})}
                    {totalQuantity>0?({totalQuantity}):(0)} */}
                    <span className="visually-hidden">unread messages</span>
                </span>
            
            </Button>
        </div>
    )
}

export default CardWidget