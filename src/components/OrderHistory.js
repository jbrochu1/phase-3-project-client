import { useState, useEffect } from "react";
import OrderCard from "./OrderCard"
import OrderHistoryDetail from "./OrderHistoryDetail";

export default function OrderHistory({currentUser, userOrders}) {
    
    

    const orders = userOrders.filter((order) => order.user_id === currentUser.id).map((order) => 
     <OrderCard key={order.id} order={order} />);

    return (
    <div>
        <div className="grid grid-cols-3">
            <p>a</p>
            <p>a</p>
            <p>a</p>
        </div>
        <div>{orders}</div>
    </div>
    )

}
