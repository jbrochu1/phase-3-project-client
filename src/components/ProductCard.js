import React from "react"
import { Link } from "react-router-dom"

function ProductCard ( { item, cart , cartItems , setCartItems} ) {

    const path = ("/" + item.id)

    function remove() {
        setCartItems(cartItems.filter((cart) => cart !== item))
    }

    function add () {
        setCartItems([...cartItems, item])
    }

    return (
        <>
            <span className="productCard">
                <div className="productName">{item.name}</div>
                <Link to={path}>
                    <img alt="" className="cardImage" src={item.img}/>
                </Link>
                <button onClick={cart?remove:add}>{cart?"Remove From Cart":"Add to Cart"}</button>
                <br></br>
            </span>
        </>
    )

}


export default ProductCard