import './CardWidget.css'
import button from 'react-bootstrap/Button';



const CardWidget = () => {
    return (
        <div>
            <button
                type="button" className="btn btn-primary position-relative" size="sm" >
                <img src={'./img/ShoppingCart.png'} alt="Carrito de compras" />
                <span className="position-absolute top-100 start-80 translate-middle badge rounded-pill bg-danger">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}

export default CardWidget