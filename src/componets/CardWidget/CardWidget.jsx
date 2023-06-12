import './CardWidget.css'
import Button from 'react-bootstrap/Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';



const CardWidget = () => {
    return (
        <div className='CardWidget'>
            <Button type="button" className="btn btn-primary position-relative" size="sm" >
            {/* <FontAwesomeIcon icon="fa-cart-shopping" /> */}
            <FontAwesomeIcon icon={faCartShopping} width={50} color='black'/>
            {/* <img src="../img/cart-shopping-solid.svg" alt="" /> */}
                <span className="position-absolute top-100 start-80 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </Button>
        </div>
    )
}

export default CardWidget