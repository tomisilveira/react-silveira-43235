import {getDoc,doc, getDocs, collection, query, where } from 'firebase/firestore'
import {db} from '../firebaseConfig'

export const getProducts = (categoriaId) => {
    const productsRef = !categoriaId
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('categoria', '==', categoriaId))

    return getDocs(productsRef)
        .then(querySnapshot => {
            const productsAdaptados = querySnapshot.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            });
           return productsAdaptados

        })
        .catch(error=>{
            return error
        })
}

export const getProduct=(itemId)=>{
    
    const productRef = doc(db,'products',itemId)
    return getDoc(productRef)
        .then(response => {
            const data= response.data()
            
            const productoAdaptado={id:response.id,...data}
            
            return productoAdaptado
            
            })
        .catch(error => {
            return error
        })
}