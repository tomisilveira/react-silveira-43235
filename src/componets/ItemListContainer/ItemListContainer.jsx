import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { getProducts } from "../../services/firebase/firestore/products"
import { Modal } from 'react-bootstrap';

const ItemListContainer = ({ gretting }) => {
    const { categoriaId } = useParams()

    const productsWithCategory = () => getProducts(categoriaId)
    const { data: products, error, loading } = useAsync(productsWithCategory, [categoriaId])

    const [showLoadingModal, setShowLoadingModal] = useState(true);

    useEffect(() => {
        if (!loading) {
            setShowLoadingModal(false);
        }
    }, [loading]);

    if (loading) {
        return (
            <Modal show={showLoadingModal} onHide={() => setShowLoadingModal(false)} centered>
                <Modal.Body>
                    <p>Cargando...</p>
                </Modal.Body>
            </Modal>
        );
    }

    if (error) {
        return (
            <h1>Error: Vuelva más tarde</h1>
        );
    }

    return (
        <div>
            <h1 id="titulo">{gretting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
