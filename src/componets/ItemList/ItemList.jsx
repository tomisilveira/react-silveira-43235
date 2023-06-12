import './ItemList.css'
import Item from '../Item/Item'
import Container from 'react-bootstrap/esm/Container'

const ItemList=({products})=>{
return(
    <Container>
        <div className='card-container'>
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    </Container>
)
}

export default ItemList