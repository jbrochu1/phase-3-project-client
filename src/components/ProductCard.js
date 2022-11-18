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
        setCartItems(cartItems.filter((cart) => cart !== item))
        setAllItems(allItems.filter((itms) => itms !== item))
        setShown(shown.filter((itms) => itms !== item))
        //this filter is mad for some reason


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
            <div className="inline-block p-3 shadow-xl gap-2">
                <div className="font-sans p-1 text-center">{item.name}<br></br>${item.price}0</div>
                <Link to={path}>
                    <img alt="" className="cardImage" src={item.img}/>
                </Link>
                {admin?(<>  <span>Supply: {supply}</span>
                            <input className="border border-red-500 w-1/4 rounded text-center" type="number" name="supply" onChange={handleChange} value={formData.supply}/>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={changeSupply}>Change Supply</button>
                            <br></br>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleDelete}>Delete</button></>):
                            (<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={cart?remove:add}>{cart?"Remove From Cart":"Add to Cart"}</button>)}
            </div>
        </>
    )

}


export default ProductCard