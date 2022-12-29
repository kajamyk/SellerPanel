import "./styles.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import {LoginScreen} from "./screen/login/LoginScreen";
import {HomeScreen} from "./screen/home/HomeScreen";
import {AdviceScreen} from "./screen/advice/AdviceScreen";
import {OpinionsScreen} from "./screen/opinions/OpinionsScreen";
import {OrdersScreen} from "./screen/orders/OrdersScreen";
import {RankingScreen} from "./screen/ranking/RankingScreen";
import {SalesChartScreen} from "./screen/sales/chart/SalesChartScreen";
import {SalesQualityScreen} from "./screen/sales/quality/SalesQualityScreen";
import {NotFoundScreen} from "./screen/notfound/NotFoundScreen";

export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route path="/" element={<HomeScreen/>}/>,
            <Route path="/login" element={<LoginScreen/>}/>,
            <Route path="/advice" element={<AdviceScreen/>}/>,
            <Route path="/opinions" element={<OpinionsScreen/>}/>,
            <Route path="/orders" element={<OrdersScreen/>}/>,
            <Route path="/ranking" element={<RankingScreen/>}/>,
            <Route path="/sales_chart" element={<SalesChartScreen/>}/>,
            <Route path="/sales_quality" element={<SalesQualityScreen/>}/>,
            <Route path="/*" element={<NotFoundScreen/>}/>,
        ])
    )
    return (
        <RouterProvider router={router}/>
    );
}
