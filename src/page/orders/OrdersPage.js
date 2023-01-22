import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";
import {Toolbar} from "../../shared/Toolbar";
import {DetailedInfo} from "../../shared/Info";

export function OrdersPage() {
    return <div>
        <Toolbar title={"Zamówienia"}/>
        <div className="screen-margin">
            <Card>
                <div className="flex-row">
                    <DetailedInfo headline={"Nieopłacone"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={"Niewysłane"} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={"Zwroty"} amount={10} moneyValue={100}/>
                </div>
            </Card>
        </div>
    </div>
}
