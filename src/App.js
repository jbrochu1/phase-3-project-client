import React , { useState , useEffect } from 'react';
import { Switch ,  Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Browse from "./components/Browse"
import Cart from "./components/Cart"
import ProductPage from "./components/ProductPage"

function App() {

  const [cartItems, setCartItems] = useState([])
  const [shown, setShown] = useState([])
  const [allItems, setAllItems] = useState([])


  fetch("")
  .then(r => r.json())
  .then(re => {
    setAllItems(re)
    setShown(re)
  })

  const productPages = allItems.map((item) => {
    const path = "/" + item.name

    return(
    <Route path={path}>
      <ProductPage item={item}></ProductPage>
    </Route>
    )
  })

  return (
    <>
      <NavBar allItems={allItems} setShown={setShown}/>

      <Switch>

        {productPages}

        <Route path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>
        </Route>

        <Route path="/">
          <Browse shown={shown} cartItems={cartItems} setCartItems={setCartItems}></Browse>
          <div>Im here</div>
        </Route>

      </Switch>



    </>
  );
}

export default App;