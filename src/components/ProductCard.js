import React from "react"
import { Link } from "react-router-dom"

function ProductCard ( { item , cart , cartItems , setCartItems , admin , allItems, setAllItems , shown, setShown} ) {

    const path = ("/" + item.id)

    function remove() {
        setCartItems(cartItems.filter((cart) => cart !== item))
    }

    function add () {
        const filler = [...cartItems , item]
        const filler2 = [...new Set(filler)]
        setCartItems(filler2)
    }

    function handleDelete() {
        const filler = allItems.filter((itms) => itms !== item)
        const filler2 = shown.filter((itms) => itms !== item)
        const filler3 = cartItems.filter((cart) => cart !== item)
        fetch(`http://localhost:9292/products/${item.id}`, {
            method : "DELETE"
        })
            setAllItems(filler)
            setShown(filler2)
            setCartItems(filler3)
    }

    return (
        <>
            <span className="productCard">
                <div className="productName">{item.name}</div>
                <Link to={path}>
                    <img alt="" className="cardImage" src={item.img}/>
                </Link>
                {admin?(<button onClick={handleDelete}>Delete</button>):(<button onClick={cart?remove:add}>{cart?"Remove From Cart":"Add to Cart"}</button>)}
                <br></br>
            </span>
        </>
    )

}


export default ProductCard