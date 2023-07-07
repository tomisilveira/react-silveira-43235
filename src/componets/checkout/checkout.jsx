import { useContext, useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { useCart } from "../../context/cartContext"
import { collection, where, documentId, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"



const Checkout = () => {

    const { cart, totalToPay,clearCart } = useCart()
    const [loading,setLoading]=useState(false)

    const createOrder = async () => {
        console.log('entro a la comopra')
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'tomas',
                phone: '123',
                email: 'a@a.com'
            },
            items: cart,
            total: totalToPay
        }
        console.log(objOrder)
        try {
            //Validacion de stock 
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products').where(documentId(), 'in', ids))
            const { docs } = await getDocs(productsRef)
            console.log(ids)

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                }
                else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc })
                }


            })
            if (outOfStock.length === 0) {
                batch.commit()
                const orderRef = collection(db, 'orders')

                const { id } = await addDoc(orderRef, objOrder)
                return(
                    <div><h1>Se genero correctamente la orden id: {id}</h1></div>
                )
                clearCart()
            }
        }
        catch (error) {
            console.log('error')
        }
        finally {
            setLoading(false)
        }


    }

    if (loading) {
        return(
            <h1>Se esta generando su orden</h1>
        )
    }

    return (
        <div>
            <h1>Queda un paso más</h1>
            <h2>formulario</h2>
            <Button onClick={createOrder} className='Button'>Crear orden de compra!</Button>
        </div>
    )
}
export default Checkout