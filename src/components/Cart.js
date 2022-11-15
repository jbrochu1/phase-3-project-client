import React from "react"
import ProductCard from "./ProductCard"

function Cart ( { cartItems , setCartItems } ) {


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
         </>
     )

}

export default Cart