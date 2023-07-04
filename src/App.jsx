import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar';
import { CartProvider } from './context/cartContext';
import ItemCount from './componets/ItemCount/ItemCount';
import ItemDetailContainer from'./componets/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './componets/Cart/cart';



function App() {

  return (
   <div>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer gretting={"bienvenidos!"}/>}/>
          <Route path='/category/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
   </div>
  )
}

export default App
