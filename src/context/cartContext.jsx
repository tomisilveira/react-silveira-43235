import { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        updateTotalProductsAdded()
        updateTotalToPay()
    }, [cart])


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            setShowMessage(true); // Mostrar mensaje modal si el producto ya está en el carrito

            // console.error('Producto ya cargado')
        }
    }
    const updateTotalProductsAdded = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        setTotalProductsAdded(count)
    }
    const updateTotalToPay = () => {
        let total = 0;
        cart.forEach(prod => {
            total += prod.quantity * prod.precio;
        });

        setTotalToPay(total);
    };


    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    const handleCloseMessage = () => {
        setShowMessage(false);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalProductsAdded, totalToPay, clearCart }}>
            {children}
            {/* Mensaje modal */}
            <Modal show={showMessage} onHide={handleCloseMessage}>
                <Modal.Header closeButton>
                    <Modal.Title>Producto duplicado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>El producto ya se encuentra en el carrito. Si desea agregar mas productos ingrese al carrito.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseMessage}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}