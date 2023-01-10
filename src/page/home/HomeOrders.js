import {VerticalDivider} from "../../shared/VerticalDivider";

function OrderShortInfo({headline, amount}) {
    return <div className="order-info">
        <span className="headline-large">{headline}</span>
        <span style={{marginTop: 16}} className="headline-medium">{amount}</span>
    </div>
}

export function HomeOrders() {
    return <div className="flex-row">
        <OrderShortInfo headline={"Nieopłacone"} amount={10}/>
        <VerticalDivider/>
        <OrderShortInfo headline={"Niewysłane"} amount={10}/>
        <VerticalDivider/>
        <OrderShortInfo headline={"Zwroty"} amount={10}/>
    </div>
}