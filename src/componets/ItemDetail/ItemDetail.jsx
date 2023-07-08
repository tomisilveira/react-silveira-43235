import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import {Link} from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import Button from "react-bootstrap/esm/Button"


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
                {
                    quantityAdded > 0 ? (
                        
                        <Button as={Link} to={`/cart`} variant="primary">Terminar la compra</Button>

                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail