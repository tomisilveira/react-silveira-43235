import { createContext, useState, useContext } from "react";
import { useEffect } from "react";


export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0)
    const [totalToPay, setTotalToPay] = useState(0)

    useEffect(() => {
        updateTotalProductsAdded()
        updateTotalToPay()
    }, [cart])


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('Producto ya cargado')
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

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalToPay, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => {
    return useContext(CartContext)
}