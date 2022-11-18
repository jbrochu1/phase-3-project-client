import React from "react"
import ProductCard from "./ProductCard"

function Cart ( { cartItems , setCartItems , currentUser , setAllItems , setShown , setAllOrders } ) {
    const quantity = 1

    function purchase () {
        const math = cartItems.map((cartI) => {
            return (cartI.price * quantity)
        })
        function add(accumulator, a) {
            return accumulator + a;
          }
        const filler = {
            date: new Date().toLocaleDateString("en-US"),
            total: math.reduce(add, 0).toFixed(2),
            user_id: currentUser.id
        }
        fetch("http://localhost:9292/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(filler)
        })
        .then(r => r.json())
        .then(re => {

            cartItems.forEach((cartI) => {
                fetch("http://localhost:9292/opas", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify( {
                        order_id: re.id,
                        product_id: cartI.id,
                        quantity: quantity
                        })
                })
                fetch(`http://localhost:9292/products/${cartI.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({ ...cartI, supply: (cartI.supply - 1) })
                })
                fetch("http://localhost:9292/products")
                    .then(r => r.json())
                    .then(re => {
                        setAllItems(re)
                        setShown(re)
                })
                fetch("http://localhost:9292/orders")
                    .then(r => r.json())
                    .then(re => {
                    setAllOrders(re)
          
        })
            })
        })

        setCartItems([])
    }

    const shownCards = cartItems.map((item) =>{
        return (
             <>
                 <ProductCard key={item.id} item={item} cart={true} setCartItems={setCartItems} cartItems={cartItems}></ProductCard>
             </>
        )
     })


     return (
         <>
                 {shownCards}
                 <button className="rounded-full" onClick={purchase}>Purchase</button>
         </>
     )

}

export default Cart