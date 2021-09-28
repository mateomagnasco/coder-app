import {useEffect, useState, createContext} from 'react' 
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './context/CartContext';






   
function App() {

const [state, setState] = useState ()



  


  return (
  <div className="App" >
    <CartContext.Provider>
     <BrowserRouter>
      <header className="App-header">
         <NavBar/>
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>

      </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
        </Route>
        <Route exact path="/category/:id">
            <ItemListContainer/>
        </Route>
        <Route path="/item/:id">
           <ItemDetailContainer />
        </Route>

        <Route path="/cart">
          <div/> 
        </Route>
        </Switch>
        </BrowserRouter>
        </CartContext.Provider>
        

    </div>
  );
}

export default App;
