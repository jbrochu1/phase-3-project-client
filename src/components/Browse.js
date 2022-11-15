import React from "react"
import ProductCard from "./ProductCard"

function Browse ( { shown, cartItems , setCartItems } ){

    const shownCards = shown.map((item) =>{
       return (
            <>
                <ProductCard key={item.id} item={item} cart={false} setCartItems={setCartItems} cartItems={cartItems}></ProductCard>
            </>
       )
    })


    return (
        <>
                {shownCards}
        </>
    )

}


export default Browse