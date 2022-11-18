import { Link } from "react-router-dom"; 
export default function OrderCard({order , currentUser = {admin: false}}) {
// const date = order;


return (
    <Link to={`/order/${order.id}`} className="grid grid-cols-3 p-2 rounded-xl shadow lg odd:bg-white even:bg-red-50">
        <div>{order.id} {currentUser.admin ? <div>User ID: {order.user_id}</div>: null}</div>
        <div>{order.date}</div>
        <div>${order.total}</div>
        
    </Link>
);

};