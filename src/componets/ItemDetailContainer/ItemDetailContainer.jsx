import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
 import { db } from '../../services/firebase/firebaseConfig'
 import { getDoc,doc } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    


    useEffect(() => {
        setLoading(true)

        const productRef = doc(db,'products',itemId)
        

        getDoc(productRef)
            .then(response => {
                const data= response.data()
                
                const productoAdaptado={id:response.id,...data}
                
                setProducto(productoAdaptado)
                
                })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer