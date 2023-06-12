import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
const ItemDetail=({id, nombre, precio, categoria, img, stock, descripcion}) =>{
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
                <ItemCount initial={1} stock={10} onAdd={(quantity)=>console.log('cantidad seleccionada', quantity)}></ItemCount>
            </footer>
        </div>
    )
}

export default ItemDetail