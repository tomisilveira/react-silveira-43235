import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer= ({gretting})=>{
    const {categoriaId}=useParams()
    const [products, setProducts]=useState([])
    const [loading,setLoading]=useState(true)

 
        useEffect(() => {
           const productsRef=!categoriaId
           ?collection(db,'products')
           :query(collection(db,'products'),where('categoria','==',categoriaId))


           getDocs(productsRef)
            .then(querySnapshot =>{
                const productsAdaptados= querySnapshot.docs.map(doc=>{
                    const fields=doc.data()
                    return {id:doc.id, ...fields}
                });
                setProducts(productsAdaptados)
                
            })
            .finally(()=>{
                setLoading(false)
            })
        }, []) 
  


    return(
        <div>
            <h1 id="titulo">{gretting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer
