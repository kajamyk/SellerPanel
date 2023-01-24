import {Toolbar} from "../../../shared/Toolbar"
import {Card} from "../../../shared/Card"
import {Date} from "./Date"
import {Chart} from "./Chart"
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import React, {useState} from 'react';
import { getCurrentData } from "../../../controllers/languagecontroller";

export function SalesChartPage() {
    const data = getCurrentData();
    const [userData, setUserData] = useState({
        labels: [23.05, 24.05, 25.05, 26.05, 27.05, 28.05, 29.05],
        datasets: [{
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: data.number_of_sells,
            data: [11, 12, 13, 11, 10, 12, 10]
        }]

    });
    return <div className="surface-background">
        <Toolbar title={"Wykres sprzedaży"}/>
        <div>
            <div style={{margin: 24, width: "120vh", float: "left", position: "relative"}}>
                <Card>
                    <div style={{height: "75vh"}} className="flex-row">
                        <div style={{height: "95%", width: "95%", top: "10%", position: "absolute", margin: 24}}>
                            <Bar data={userData}/>
                        </div>
                    </div>
                </Card>
            </div>

            <div style={{width: "70vh", float: "left", margin: 40, position: "relative"}}>
                <Card>
                    <div style={{height: "30vh"}} className="flex-row">
                        <div>
                            <label style={{position: "absolute", margin: 24}}>
                                <input type="radio"/>
                                Obrót
                            </label>
                            <label style={{position: "absolute", bottom: "15%", margin: 24}}>
                                <input type="radio"/>
                                Liczba sprzedanych sztuk
                            </label>
                        </div>

                    </div>
                </Card>
            </div>

            <div style={{width: "70vh", float: "left", position: "relative", margin: 40}}>
                <Card>
                    <div style={{height: "30vh"}} className="flex-row">
                        <Date name="Od" allign="top"/>

                        <Date name="Do" allign="bottom"/>


                    </div>
                </Card>
            </div>
        </div>

    </div>
}
