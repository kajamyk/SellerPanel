import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";

function OrderInfo({style, headline, amount, moneyValue}) {
    return <div style={{...style, textAlign: "center", display: "flex", flexDirection: "column"}}>
        <span className="display-medium">{headline}</span>
        <span style={{marginTop: 16}} className="headline-large">{amount}</span>
        <span className="title-large">Wartość:</span>
        <span className="title-large">{moneyValue}zł</span>
    </div>
}

export function OrdersPage() {
    return <div>
        <Card>
            <div style={{height: "90vh"}} className="flexRow">
                <OrderInfo style={{flex: 1}} headline={"Nieopłacone"} amount={10} moneyValue={100}/>
                <VerticalDivider/>
                <OrderInfo style={{flex: 1}} headline={"Niewysłane"} amount={10} moneyValue={100}/>
                <VerticalDivider/>
                <OrderInfo style={{flex: 1}} headline={"Zwroty"} amount={10} moneyValue={100}/>
            </div>
        </Card>
    </div>
}
