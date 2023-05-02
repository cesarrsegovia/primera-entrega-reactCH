import './App.css'
import ItemList from './components/ItemListContainer/ItemList';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {

  return (
    <>
    
    <NavBar />
    <ItemList greeting={"Bienvenidos a la tienda!"} />
    </>
  )
}

export default App
