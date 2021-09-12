import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from "react";

const NavBar = () => {

  useEffect (()=>{
    console.log("despues del primer renderizado");
    return () => {
      console.log("antes de desmontar el componente")
    }
  },[])

  console.log("el componente va a ser renderizado")
  
  const [] = useState();

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
        <div class="container-fluid" >
          <a class="navbar-brand" href="#">Inicio</a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Guitarras</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Modelos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Precio</a>
              </li>
              <button type="button" class="btn btn-danger">Contactanos!  <CartWidget/> </button>
             
              
            </ul>
          </div>
        </div>
        
      </nav>
      

    );
}

export default NavBar;