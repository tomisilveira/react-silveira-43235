import './cart.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import ItemCart from '../ItemCart/itemCart';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, clearCart, totalProductsAdded, totalToPay, total } = useContext(CartContext);

  if (totalProductsAdded === 0) {
    return (
      <div className="Cart">
        <h1>Carrito vacio.</h1>
        <Button as={Link} to={`/`} variant="primary">
          Vamos a comprar
        </Button>
      </div>
    );
  }

  return (
    <div className="Cart">
      <div className="card-container">
        {cart.map((p) => (
          <ItemCart key={p.id} {...p} />
        ))}
      </div>
      <h3>Total: ${totalToPay}</h3>
      <div className="button-container">
        <Button onClick={() => clearCart()} variant="danger">
          Limpiar carrito
        </Button>
        <Button as={Link} to={`/checkout`} variant="success">
          Ir a pagar
        </Button>
        <Button as={Link} to={`/`} variant="primary">
          Seguir comprando
        </Button>
      </div>
    </div>
  );
};

export default Cart;
