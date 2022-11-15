import React , { useState , useEffect } from "react"
import ProductCard from "./ProductCard"

function Cart ( { cartItems , setCartItems } ) {

    const shownCards = cartItems.map((item) =>{
        <ProductCard item={item} cat={true}></ProductCard>
    })

    function tableRows() {
            for(let i=0; i < shownCards.length; i + 3) {
                <tr>
                    {shownCards[i]?<td>{shownCards[i]}</td>:<td/>}
                    {shownCards[i+1]?<td>{shownCards[i+1]}</td>:<td/>}
                    {shownCards[i+2]?<td>{shownCards[i+2]}</td>:<td/>}
                </tr>
            }

    }

    return (
        <>
        <table>
            <tbody>
                {tableRows()}
            </tbody>
        </table>
        </>
    )

}

export default Cart