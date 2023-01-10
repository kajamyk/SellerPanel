import {Toolbar} from "../../shared/Toolbar";
import {HomeCard} from "./HomeCard";
import {HomeOrders} from "./HomeOrders";
import {HomeRanking} from "./HomeRanking";
import {HomeOpinions} from "./HomeOpinions";
import {HomeSalesQuality} from "./HomeSalesQuality";
import {HomeAdvices} from "./HomeAdvices";
import {Chart} from "../../page/sales/chart/Chart"
import {Card} from "../../shared/Card"

export function HomePage() {
    return <div className="home">
        <Toolbar title={"Panel Sprzedawcy"}/>
        <div style={{margin: 24}} className="flex-row">
            <div style={{flex: 1, marginRight: 12}}>
                <HomeCard title={"Zamówienia"}>
                    <HomeOrders/>
                </HomeCard>
                <HomeCard title={"Wykres sprzedaży"}>
                    <Card><Chart></Chart></Card>
                </HomeCard>
            </div>
            <div style={{flex: 1, marginLeft: 12}} className="flex-column">
                <HomeCard title={"Opinie kupujących"}>
                    <HomeOpinions/>
                </HomeCard>
                <HomeCard title={"Ranking ofert"}>
                    <HomeRanking/>
                </HomeCard>
                <HomeCard title={"Jakość sprzedaży"}>
                    <HomeSalesQuality/>
                </HomeCard>
                <HomeCard title={"Porady sprzedażowe"}>
                    <HomeAdvices/>
                </HomeCard>
            </div>
        </div>
    </div>
}
