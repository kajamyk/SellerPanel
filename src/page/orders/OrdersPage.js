import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";
import {Toolbar} from "../../shared/Toolbar";
import {DetailedInfo} from "../../shared/Info";
import { getCurrentData } from "../../controllers/languagecontroller";

export function OrdersPage() {
    const data = getCurrentData();
    return <div>
        <Toolbar title={data.orders}/>
        <div className="screen-margin">
            <Card>
                <div className="flex-row">
                    <DetailedInfo headline={data.not_payed} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={data.not_delivered} amount={10} moneyValue={100}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={data.returns} amount={10} moneyValue={100}/>
                </div>
            </Card>
        </div>
    </div>
}
