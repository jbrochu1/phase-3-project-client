import React from 'react';

export default function OrderHistoryDetail ( { order } ) {

console.log(order.id)

return (
    <div>{order.id}</div>
)

};