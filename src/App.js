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



    useEffect(() => {
      fetch("http://localhost:9292/products")
      .then(r => r.json())
      .then(re => {
        setAllItems(re)
        setShown(re)
      })
    }, [])

  const productPages = allItems.map((item) => {
    const path = ("/" + item.id)

    return (
        <Route exact path={path} key={item.id}>
          <ProductPage item={item} cartItems={cartItems} setCartItems={setCartItems}></ProductPage>
        </Route>
    )
  })

  return (
    <>
      <NavBar allItems={allItems} setShown={setShown} cartItems={cartItems}/>

      <Switch>

        <Route exact path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>
        </Route>

        <Route exact path="/">
          <Browse shown={shown} cartItems={cartItems} setCartItems={setCartItems}></Browse>
        </Route>

        {productPages}

      </Switch>


    </>
  );
}

export default App;