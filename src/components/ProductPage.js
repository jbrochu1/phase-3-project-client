import React from "react"

function ProductPage ( { item, cartItems, setCartItems } ) {



    function add () {
        const filler = [...cartItems , item]
        const filler2 = [...new Set(filler)]
        console.log(filler2)
        setCartItems(filler2)
    }



    return (
        <>
        <div>
         <span className="productCard">
        <div className="productName">{item.name} {item.price} {item.description}</div>
            <img alt="" className="cardImage" src={item.img}/>
            <button onClick={add}>{"Add to Cart"}</button>
        </span>
        </div>
        </>
    )


}


export default ProductPage