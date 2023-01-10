import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";
import {Toolbar} from "../../shared/Toolbar";

function OrderInfo({headline, amount, moneyValue}) {
    return <div className="order-info">
        <span className="display-medium">{headline}</span>
        <span style={{marginTop: 16}} className="headline-large">{amount}</span>
        <span className="title-large">Kwota:</span>
        <span className="title-large">{moneyValue}zł</span>
    </div>
}

export function OrdersPage() {
    return <div>
        <Toolbar title={"Zamówienia"}/>
        <div style={{margin: 24}}>
            <Card>
                <div style={{height: "75vh"}} className="flex-row">
                    <OrderInfo headline={"Nieopłacone"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <OrderInfo headline={"Niewysłane"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <OrderInfo headline={"Zwroty"} amount={10} moneyValue={100}/>
                </div>
            </Card>
        </div>
    </div>
}
