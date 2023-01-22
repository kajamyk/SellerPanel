import {Toolbar} from "../../shared/Toolbar";
import {HomeCard} from "./HomeCard";
import {HomeOrders} from "./HomeOrders";
import {HomeRanking} from "./HomeRanking";
import {HomeOpinions} from "./HomeOpinions";
import {HomeSalesQuality} from "./HomeSalesQuality";
import {HomeAdvices} from "./HomeAdvices";
import {Chart} from "../../page/sales/chart/Chart"
import {Card} from "../../shared/Card"
import {getTheme} from "../../controllers/themecontroller";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate()
    let [images, setImages] = useState({})
    useEffect(() => {
        if (getTheme().theme === "light-theme") {
            setImages(
                {
                    order: "drawable/order.svg",
                    chart: "drawable/chart.svg",
                    opinion: "drawable/ranking.svg",
                    ranking: "drawable/opinion.svg",
                    quality: "drawable/quality.svg",
                    advice: "drawable/advice.svg",
                }
            )
        } else {
            setImages(
                {
                    order: "drawable/order_dark.svg",
                    chart: "drawable/chart_dark.svg",
                    opinion: "drawable/ranking_dark.svg",
                    ranking: "drawable/opinion_dark.svg",
                    quality: "drawable/quality_dark.svg",
                    advice: "drawable/advice_dark.svg",
                }
            )
        }
    }, [getTheme().theme])
    return <div className="home">
        <Toolbar title={"Panel Sprzedawcy"}/>
        <div className="flex-row screen-margin">
            <div style={{flex: 1, marginRight: 12}}>
                <HomeCard onClick={() => navigate("/orders")} image={images.order} title={"Zamówienia"}>
                    <HomeOrders/>
                </HomeCard>
                <HomeCard onClick={() => navigate("/sales_chart")} image={images.chart} title={"Wykres sprzedaży"}>
                    <Card><Chart></Chart></Card>
                </HomeCard>
            </div>
            <div style={{flex: 1, marginLeft: 12}} className="flex-column">
                <HomeCard onClick={() => navigate("/opinions")} image={images.opinion} title={"Opinie kupujących"}>
                    <HomeOpinions/>
                </HomeCard>
                <HomeCard onClick={() => navigate("/ranking")} image={images.ranking} title={"Ranking ofert"}>
                    <HomeRanking/>
                </HomeCard>
                <HomeCard onClick={() => navigate("/sales_quality")} image={images.quality} title={"Jakość sprzedaży"}>
                    <HomeSalesQuality/>
                </HomeCard>
                <HomeCard style={{cursor: "auto"}} image={images.advice} title={"Porady sprzedażowe"}>
                    <HomeAdvices/>
                </HomeCard>
            </div>
        </div>
    </div>
}
