import {VerticalDivider} from "../../shared/VerticalDivider";

function PreviewOrderInfo({headline, amount}) {
    return <div className="order-info">
        <span className="headline-large">{headline}</span>
        <span style={{marginTop: 16}} className="headline-medium">{amount}</span>
    </div>
}

export function HomeOrders() {
    return <div className="flex-row">
        <PreviewOrderInfo headline={"Nieopłacone"} amount={10}/>
        <VerticalDivider/>
        <PreviewOrderInfo headline={"Niewysłane"} amount={10}/>
        <VerticalDivider/>
        <PreviewOrderInfo headline={"Zwroty"} amount={10}/>
    </div>
}