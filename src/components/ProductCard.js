import React , { useState } from "react"
import { Link } from "react-router-dom"

function ProductCard ( { item , cart , cartItems , setCartItems , admin , allItems, setAllItems , shown, setShown} ) {

    const path = ("/" + item.id)

    function remove() {
        setCartItems(cartItems.filter((cartI) => cartI !== item))
    }

    function add () {
        const filler = [...cartItems , item]
        const filler2 = [...new Set(filler)]
        setCartItems(filler2)
    }

    function handleDelete() {

        setAllItems(allItems.filter((itms) => itms !== item))
        setShown(shown.filter((itms) => itms !== item))
        //this filter is mad for some reason
        setCartItems(cartItems.filter((itms) => itms !== item))

        fetch(`http://localhost:9292/products/${item.id}`, {
            method : "DELETE"
        })

    }

    const [formData, setFormData] = useState(item)
    const [supply, setSupply] = useState(item.supply)

    function handleChange (e) {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    function changeSupply (e) {
        e.preventDefault()
        fetch(`http://localhost:9292/products/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...formData })
        })
        setSupply(formData.supply)
    }

    return (
        <>
            <span className="productCard">
                <div className="productName">{item.name}</div>
                <Link to={path}>
                    <img alt="" className="cardImage" src={item.img}/>
                </Link>
                {admin?(<>  <span>Supply: {supply}</span>
                            <input type="number" name="supply" onChange={handleChange} value={formData.supply}/>
                            <button onClick={changeSupply}>Change Supply</button>
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