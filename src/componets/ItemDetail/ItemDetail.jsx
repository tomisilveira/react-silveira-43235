import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import {Link} from "react-router-dom"
import { CartContext } from "../../context/cartContext"


const ItemDetail=({id, nombre, precio, categoria, img, stock, descripcion}) =>{

    //estado para ver si agrego al carrito o no
    const [quantityAdded, setQuantityAdded]=useState(0)
    const {addItem} = useContext(CartContext)
    
    
    const handleOnAdd=(quantity)=>{
        setQuantityAdded(quantity)

        const item = {
            id,nombre,precio
            
        }
        addItem(item,quantity)
    }

    return(
        <div className="item-detail">
            <header >
                <h2 >
                    
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre}  />
            </picture>
            <section>
                <p>
                    Precio : {precio}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
                <p>{descripcion}</p>
                <p>Categoria: {categoria}</p>
            </section>
            <footer>
                {/* <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('cantidad seleccionada', quantity)}></ItemCount> */}
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'>Terminar la compra</Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail