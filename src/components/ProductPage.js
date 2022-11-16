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
        <div className="productName">{item.name} {item.price} {item.description}</div>
            <img alt="" className="mainImage" src={item.img}/>
            <div className="floatRight">{item.description}</div>
            <button onClick={add}>{"Add to Cart"}</button>
        </div>
        </>
    )


}


export default ProductPage