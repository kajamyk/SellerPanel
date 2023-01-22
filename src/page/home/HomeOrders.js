import {VerticalDivider} from "../../shared/VerticalDivider";
import {ShortInfo} from "../../shared/Info";

export function HomeOrders() {
    return <div className="flex-row">
        <ShortInfo headline={"Nieopłacone"} amount={10}/>
        <VerticalDivider/>
        <ShortInfo headline={"Niewysłane"} amount={10}/>
        <VerticalDivider/>
        <ShortInfo headline={"Zwroty"} amount={10}/>
    </div>
}