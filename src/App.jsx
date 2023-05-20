import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar'


function App() {

  return (
   <div>
    <NavBar/>
    <ItemListContainer gretting={"bienvenidos!"}/>  
   </div>
  )
}

export default App
