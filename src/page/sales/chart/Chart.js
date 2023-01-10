import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import {Card} from "../../../shared/Card"
import React, {useState} from 'react';
export function Chart(props) {
     const [userData, setUserData] = useState({
        labels: [23.05, 24.05, 25.05, 26.05, 27.05, 28.05, 29.05],
        datasets: [{
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: "Liczba sprzedanych sztuk",
            data: [11, 12, 13, 11, 10, 12, 10]
        }]

    });
    return (
        <><div style={{height: "75vh"}} className="flex-row">
                        <div style={{height:"95%", width:"100%", top:"20%", position:"relative"}}>
                            <Bar data={userData}/>
                        </div>
                    </div></>
    );
    
}