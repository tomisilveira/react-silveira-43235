import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
import { useAsync } from "../../hooks/useAsync"
import { getProduct } from "../../services/firebase/firestore/products"
import { Modal } from 'react-bootstrap';

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const productId = () => getProduct(itemId)
    const { data: producto, error, loading } = useAsync(productId, itemId)

    const [showLoadingModal, setShowLoadingModal] = useState(true);

    useEffect(() => {
        if (!loading) {
            setShowLoadingModal(false);
        }
    }, [loading]);

    if(loading){
        return(
                <Modal show={showLoadingModal} onHide={() => setShowLoadingModal(false)} centered>
                    <Modal.Body>
                        <p>Cargando...</p>
                    </Modal.Body>
                </Modal>
            
        )
    }

    if (error) {
        return (
            <h1>Hubo un error</h1>
        )
    }

    return (
           <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
        
    )
}

export default ItemDetailContainer
