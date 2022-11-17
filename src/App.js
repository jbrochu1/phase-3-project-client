import React , { useState , useEffect } from 'react';
import { Switch ,  Route } from "react-router-dom"
import NavBar from './components/NavBar';
import Browse from "./components/Browse"
import Cart from "./components/Cart"
import ProductPage from "./components/ProductPage"
import AddProductForm from './components/AddProductForm';
import OrderHistory from './components/OrderHistory';


function App() {

  const [cartItems, setCartItems] = useState([])
  const [shown, setShown] = useState([])
  const [currentUser, setCurrentUser] = useState(
    {name: "",
     admin: false
    })
  const [allItems, setAllItems] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [userOrders, setUserOrders] = useState([])

    useEffect(() => {
      fetch("http://localhost:9292/products")
      .then(r => r.json())
      .then(re => {
        setAllItems(re)
        setShown(re)
      })
      fetch("http://localhost:9292/users")
      .then(r=>r.json())
      .then(re => {
        setAllUsers(re)
        setCurrentUser(re[0])
      })
    }, [])

    useEffect(() => {
      fetch("http://localhost:9292/orders")
        .then(r => r.json())
        .then(re => {
          setUserOrders(re)
          
        })
    }, [currentUser])


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
      <NavBar allItems={allItems} setShown={setShown} cartItems={cartItems} allUsers={allUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}/>

      <Switch>

        <Route exact path="/admin-inventory">
          {currentUser.admin?<><AddProductForm shown={shown} setShown={setShown} allItems={allItems} setAllItems={setAllItems}></AddProductForm><br></br></>:<h1> This page is admin only. </h1>}
        </Route>

        <Route exact path="/orderhistory">
          <OrderHistory currentUser={currentUser} userOrders={userOrders} shown={shown} setShown={setShown}></OrderHistory>
        </Route>

        <Route exact path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems} currentUser={currentUser}></Cart>
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