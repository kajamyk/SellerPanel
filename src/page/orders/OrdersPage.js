import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";
import {Toolbar} from "../../shared/Toolbar";

function OrderInfo({style, headline, amount, moneyValue}) {
    return <div style={{...style, textAlign: "center", display: "flex", flexDirection: "column"}}>
        <span className="display-medium">{headline}</span>
        <span style={{marginTop: 16}} className="headline-large">{amount}</span>
        <span className="title-large">Kwota:</span>
        <span className="title-large">{moneyValue}zł</span>
    </div>
}

export function OrdersPage() {
    const orderInfoStyle = {
        flex: 1,
        padding: 24
    }
    return <div>
        <Toolbar title={"Zamówienia"}/>
        <div style={{margin: 24}}>
            <Card>
                <div style={{height: "75vh"}} className="flex-row">
                    <OrderInfo style={orderInfoStyle} headline={"Nieopłacone"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <OrderInfo style={orderInfoStyle} headline={"Niewysłane"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <OrderInfo style={orderInfoStyle} headline={"Zwroty"} amount={10} moneyValue={100}/>
                </div>
            </Card>
        </div>
    </div>
}
