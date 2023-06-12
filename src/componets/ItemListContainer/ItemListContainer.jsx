import "./ItemListContainer.css"
import { getProducts, getProductsByCategory, } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer= ({gretting})=>{
    const {categoriaId}=useParams()
    const [products, setProducts]=useState([])

    useEffect(()=>{
        const asyncFunc = categoriaId ? getProductsByCategory:getProducts
        
        asyncFunc(categoriaId)
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[categoriaId])


    return(
        <div>
            <h1 id="titulo">{gretting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
