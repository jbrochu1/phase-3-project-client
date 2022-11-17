import React from 'react';

export default function OrderHistoryDetail ( { order } ) {


    const data = order.opas.map((opa) => {


        return(
        <div>
            <span>{opa.product.name} </span>
            <span>${opa.product.price} </span>
            <span>{opa.quantity} </span>
            <span> {opa.quantity*opa.product.price} </span>
        </div>
        )
    })

return (
    <div>
        <div>Order Number: {order.id}</div>
        <div>Order Total: </div>
        <div>Order: {order.id}</div>
        {data}
    </div>
)

};