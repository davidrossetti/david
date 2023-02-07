import NavBar from "./componets/NavBar/NavBar";
import CartWidget from "./componets/CartWidget/CartWidget";
import itemListContainer from "./componets/ItemListContainer/ItemListContainer";
function App() {
  return (
    
    <div className="App">
      <itemListContainer greeting="BIENVENIDO USUARIO"/>    
      <header className="App-header">
      
      <CartWidget/>
       <NavBar/>
       </header>
    </div>
    
  );
}

export default App;
