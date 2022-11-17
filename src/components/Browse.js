import React from "react"
import ProductCard from "./ProductCard"

function Browse ( { shown, cartItems , setCartItems } ){

    const shownCards = shown.map((item) =>{
       return (
            <div>
                <ProductCard key={item.id} item={item} cart={false} setCartItems={setCartItems} cartItems={cartItems}></ProductCard>
            </div>
       )
    })


    return (
        <>
        <div className="sticky top-10 grid grid-cols-5 content-center p-5 m-10 space-x-10 aspect-auto">
                {shownCards}
        </div>
        </>
    )

}


export default Browse