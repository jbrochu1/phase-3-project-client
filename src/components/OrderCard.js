
export default function OrderCard({order}) {
// const date = order;


return (
    <div className="grid grid-cols-3">
        <div>{order.id}</div>
        <div>{order.date}</div>
        <div>${order.total}</div>
    </div>
);

};