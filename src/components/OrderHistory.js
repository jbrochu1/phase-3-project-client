import { useState, useEffect } from "react";
import OrderCard from "./OrderCard"

export default function OrderHistory({currentUser, allOrders}) {
    
    let userOrders

    if (currentUser.admin === true) {
        userOrders = allOrders.map((order) => 
        <OrderCard key={order.id} order={order} currentUser={currentUser}/>)
    }
    else {
        userOrders = allOrders.filter((order) => order.user_id === currentUser.id).map((order) => 
     <OrderCard key={order.id} order={order} />);
    }
    return (
    <div className="text-center">
        <div className="grid grid-cols-3 text-2xl bg-red-50 rounded-xl shadow lg p-5">
            <p>Order Number</p>
            <p>Order Date</p>
            <p>Order Total</p>
        </div>
        <div>{userOrders}</div>
    </div>
    )

}
