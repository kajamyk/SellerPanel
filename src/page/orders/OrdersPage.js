import {Card} from "../../shared/Card";
import {VerticalDivider} from "../../shared/VerticalDivider";
import {Toolbar} from "../../shared/Toolbar";
import {DetailedInfo} from "../../shared/Info";
import { getCurrentData } from "../../controllers/languagecontroller";
import {orderInfo} from "../../mock"
export function OrdersPage() {
    const data = getCurrentData();
    return <div>
        <Toolbar title={data.orders}/>
        <div className="screen-margin">
            <Card>
                <div className="flex-row">
                    <DetailedInfo headline={data.not_payed} amount={orderInfo.notPayed} moneyValue={orderInfo.notPayedSum}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={data.not_delivered} amount={orderInfo.notSend} moneyValue={orderInfo.notSendSum}/>
                    <VerticalDivider/>
                    <DetailedInfo headline={data.returns} amount={orderInfo.returns} moneyValue={orderInfo.returnsSum}/>
                </div>
            </Card>
        </div>
    </div>
}
