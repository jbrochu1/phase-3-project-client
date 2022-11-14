import React , { useState , useEffect } from 'react';
import { Switch ,  Route } from "react-router-dom"
import NavBar from './components/NavBar';

function App() {

  const [cartItems, setCartItems] = useState([])
  const [shown, setShown] = useState([])
  const [allItems, setAllItems] = useState([])


  fetch("")
  .then(r => r.json())
  .then(re => setAllItems(re))

  return (
    <>
      <NavBar allItems={allItems} setShown={setShown}/>

      <Switch>

        <Route path="/cart">

        </Route>

        <Route path="/">
          <div>Im here</div>
        </Route>

      </Switch>



    </>
  );
}

export default App;