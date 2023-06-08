import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'
import ItemCount from './componets/ItemCount/ItemCount'
import ItemDetailContainer from'./componets/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
   <div>
    <NavBar/>
    <ItemListContainer gretting={"bienvenidos!"}/>  
    
    <ItemDetailContainer/>
   </div>
  )
}

export default App
