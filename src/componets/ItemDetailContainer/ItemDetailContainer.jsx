import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'



const ItemDetailContainer=()=>{
    const [producto,setProducto]=useState(null)
    const {itemId}=useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProducto(response)
        })
        .catch((error)=>{
            console.error(error)
        })
    },[itemId])

    return(
        <div  className='ItemDetailContainer'>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer