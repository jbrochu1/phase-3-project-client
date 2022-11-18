import React from 'react';

export default function OrderHistoryDetail ( { order } ) {


    const orderData = order.opas.map((opa) => {


        return(
        <div className="grid grid-cols-4 odd:bg-white even:bg-red-50 text-center">
            <span>{opa.product.name} </span>
            <span>{opa.quantity} </span>
            <span>${opa.product.price} </span>
            <span>${opa.quantity*opa.product.price} </span>
        </div>
        )
    })

return (
    <div>
        <div className='text-2xl p-5 text-center'>
            <div>Order Number: {order.id}</div>
            <div>Order Date: {order.date}</div>
            <div>Order Total: ${order.total}</div>
            <div>Order: {order.id}</div>
            
        </div>
        <div className="grid grid-cols-4 text-2xl p-3 bg-red-50 text-center">
            <p>Product Name:</p>
            <p>Qty:</p>
            <p>Unit Price:</p>
            <p>Ext:</p>
        </div>
        <div>
        {orderData}
        </div>
    </div>
)

};