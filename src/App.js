import "./styles.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {LoginPage} from "./page/login/LoginPage";
import {HomePage} from "./page/home/HomePage";
import {OpinionsPage} from "./page/opinions/OpinionsPage";
import {OrdersPage} from "./page/orders/OrdersPage";
import {RankingPage} from "./page/ranking/RankingPage";
import {SalesChartPage} from "./page/sales/chart/SalesChartPage";
import {SalesQualityPage} from "./page/sales/quality/SalesQualityPage";
import {NotFoundPage} from "./page/notfound/NotFoundPage";
import {useState} from "react";
import {getTheme} from "./controllers/themecontroller";
import {ChooseShopPage} from "./page/chooseshop/ChooseShopPage";

export default function App() {
    let [theme, setTheme] = useState(getTheme())
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<HomePage/>}/>,
            <Route path="/login" element={<LoginPage/>}/>,
            <Route path="/choose_shop" element={<ChooseShopPage/>}/>,
            <Route path="/opinions" element={<OpinionsPage/>}/>,
            <Route path="/orders" element={<OrdersPage/>}/>,
            <Route path="/ranking" element={<RankingPage/>}/>,
            <Route path="/sales_chart" element={<SalesChartPage/>}/>,
            <Route path="/sales_quality" element={<SalesQualityPage/>}/>,
            <Route path="/*" element={<NotFoundPage/>}/>,
        ])
    )
    return (
        <div className="material-theme">
            <div style={{height: "100vh", width: "100wh"}} className={theme.theme}>
                <div className="app">
                    <RouterProvider router={router}/>
                </div>
            </div>
        </div>
    );
}
