import "./ItemListContainer.css"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"

const ItemListContainer= ({gretting})=>{
    const [products, setProducts]=useState([])

    useEffect(()=>{
        getProducts()
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])


    return(
        <div>
            <h1 id="titulo">{gretting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
