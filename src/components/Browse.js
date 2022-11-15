import React , { useState , useEffect } from "react"
import ProductCard from "./ProductCard"

function Browse ( { shown, cartItems , setCartItems } ){

    const shownCards = shown.map((item) =>{
        <ProductCard item={item} cart={false}></ProductCard>
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


export default Browse