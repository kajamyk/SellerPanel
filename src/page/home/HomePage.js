import {Toolbar} from "../../shared/Toolbar";
import {HomeCard} from "./HomeCard";
import {HomeOrders} from "./HomeOrders";
import {HomeRanking} from "./HomeRanking";

export function HomePage() {
    return <div>
        <Toolbar title={"Panel Sprzedawcy"}/>
        <div style={{margin: 24}} className="flex-row">
            <div style={{flex: 1, marginRight: 12}}>
                <HomeCard title={"Zamówienia"}>
                    <HomeOrders/>
                </HomeCard>
            </div>
            <div style={{flex: 1, marginLeft: 12, alignItems: "stretch"}} className="flex-column">
                <HomeCard title={"Opinie kupujących"}>
                    <HomeRanking/>
                </HomeCard>
                <HomeCard title={"Opinie kupujących"}>
                    <HomeOrders/>
                </HomeCard>
                <HomeCard title={"Opinie kupujących"}>
                    <HomeRanking/>
                </HomeCard>
                <HomeCard title={"Opinie kupujących"}>
                    <HomeRanking/>
                </HomeCard>
            </div>
        </div>
    </div>
}
