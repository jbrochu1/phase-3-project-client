import React , { useState } from "react"
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

    const [formData, setFormData] = useState(item)

    function handleChange (e) {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    function submitChange (e) {
        e.preventDefault()
        fetch(`http://localhost:9292/products/${item.id}`, {
            method: "patch",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...formData })
        })
    }

    return (
        <>
            <span className="productCard">
                <div className="productName">{item.name}</div>
                <Link to={path}>
                    <img alt="" className="cardImage" src={item.img}/>
                </Link>
                {admin?(<>
                            <input type="text" name="supply" onChange={submitChange} value={formData.supply}/>
                            <button onClick={handleSubmit}></button>
                            <br></br>
                            <button onClick={handleDelete}>Delete</button></>
                        ):
                            (<button onClick={cart?remove:add}>{cart?"Remove From Cart":"Add to Cart"}</button>)}
                <br></br>
            </span>
        </>
    )

}


export default ProductCard