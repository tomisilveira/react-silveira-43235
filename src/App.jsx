import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'
import ItemCount from './componets/ItemCount/ItemCount'
import ItemDetailContainer from'./componets/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  return (
   <div>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer gretting={"bienvenidos!"}/>}/>
          <Route path='/category/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
