import {Toolbar} from "../../shared/Toolbar";
import {HomeCard} from "./HomeCard";
import {HomeOrders} from "./HomeOrders";
import {HomeRanking} from "./HomeRanking";
import {HomeOpinions} from "./HomeOpinions";
import {HomeSalesQuality} from "./HomeSalesQuality";
import {HomeAdvices} from "./HomeAdvices";
import {Chart} from "../sales/chart/Chart"
import {Card} from "../../shared/Card"
import {getTheme} from "../../controllers/themecontroller";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { getCurrentData } from "../../controllers/languagecontroller";

export function HomePage() {
    const data = getCurrentData();
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
        <Toolbar title={data.seller_panel}/>
        <div className="flex-row screen-margin">
            <div className="home-item">
                <HomeCard onClick={() => navigate("/orders")} image={images.order} title={data.orders}>
                    <HomeOrders/>
                </HomeCard>
                <HomeCard image={images.chart} title={data.seller_chart}>
                    <Card><Chart></Chart></Card>
                </HomeCard>
            </div>
            <div className="flex-column home-item">
                <HomeCard onClick={() => navigate("/opinions")} image={images.opinion} title={data.customer_opinions}>
                    <HomeOpinions/>
                </HomeCard>
                <HomeCard onClick={() => navigate("/ranking")} image={images.ranking} title={data.offer_ranking}>
                    <HomeRanking/>
                </HomeCard>
                <HomeCard onClick={() => navigate("/sales_quality")} image={images.quality} title={data.sale_quality}>
                    <HomeSalesQuality/>
                </HomeCard>
                <HomeCard className={"home-card-not-selectable"} image={images.advice} title={data.sale_advices}>
                    <HomeAdvices/>
                </HomeCard>
            </div>
        </div>
    </div>
}
