import './checkout.css'
import { useContext, useState } from "react"
import Button from "react-bootstrap/esm/Button"
import { useCart } from "../../context/cartContext"
import {collection, where, documentId, getDocs, writeBatch, query, addDoc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckOutForm from "../CheckOutForm/checkOutForm"
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';




const Checkout = () => {

    const { cart, totalToPay,clearCart } = useCart()
    const [loading,setLoading]=useState(false)
    const [ordenCheck,setOrdenCheck]=useState(false)
    const [ordenId,setOrdenId]=useState('')

    const createOrder = async ({name,phone,email}) => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name,phone,email
            },
            items: cart,
            total: totalToPay
        }
        console.log(objOrder)
        try {
            //Validacion de stock 
            const ids = cart.map(prod => prod.id)
            const productsRef = query(collection(db, 'products'),where(documentId(), 'in', ids))
            const { docs } = await getDocs(productsRef)
            

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
                
                setOrdenId(id)
                setOrdenCheck(true)
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
            
                <Modal show={loading} centered>
                  <Modal.Header>
                    <Modal.Title>Generando la orden</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Por favor, espera un momento...</Modal.Body>
                </Modal>
        )
    }
    if (ordenCheck) {
        return(
            <Modal show={ordenCheck} centered>
            <Modal.Header>
              <Modal.Title>Orden generada correctamente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h1>Se generó correctamente la orden id: {ordenId}</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button as={Link} to={`/`} variant="primary">
                Inicio
              </Button>
            </Modal.Footer>
          </Modal>

        )
    }

    return (
        <div className="Checkout">
            <h1>Queda un paso más</h1>
            <h2>Complete con datos del comprador</h2>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}
export default Checkout