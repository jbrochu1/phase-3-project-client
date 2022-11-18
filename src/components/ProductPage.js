import React from "react"

function ProductPage ( { item, cartItems, setCartItems } ) {

    function add () {
        const filler = [...cartItems , item]
        const filler2 = [...new Set(filler)]
        console.log(filler2)
        setCartItems(filler2)
    }

    // let sentence = `${item.name} for only a cheap price of: $${item.price} ${item.description}`

    return (
        <>
        <div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-center text-3xl"> {item.name}</p>
                <p className="">{item.description}</p>
                <p className="">${item.price}</p>
                <img alt="" className="mainImage" src={item.img}/>
                <button className="bg-blue-500 w-1/4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={add}>{"Add to Cart"}</button>
            </div>
            
        </div>
        </>
    )


}


export default ProductPage