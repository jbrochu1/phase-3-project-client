import { Link } from "react-router-dom"; 
export default function OrderCard({order , currentUser = {admin: false}}) {
// const date = order;


return (
    <Link to={`/order/${order.id}`} className="grid grid-cols-3">
        <div>{order.id}</div>
        <div>{order.date}</div>
        <div>${order.total}</div>
        {currentUser.admin ? <div>{order.user_id}</div>: null}
    </Link>
);

};