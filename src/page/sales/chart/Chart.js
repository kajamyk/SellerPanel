import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import {Card} from "../../../shared/Card"
import React, {useState, useEffect} from 'react';
import{getTheme} from "../../../controllers/themecontroller"
import { getCurrentData } from "../../../controllers/languagecontroller";
import {chartItems} from "../../../mock"
export function Chart(props) {
    //ChartJS.defaults.color = '#93000A';
    const data = getCurrentData();
    //2A0054
    const [userData, setUserData] = useState({
        labels: chartItems.labels,
        datasets: [{
            backgroundColor: "#C79FBE",

            barThickness: "30",
            label: data.sold_items,
            data: chartItems.data1
        },
        {
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: data.turnover,
            data: chartItems.data2
        }
        ]
    });
     useEffect(() => {
     if (getTheme().theme === "light-theme") {
         ChartJS.defaults.color = '#2A0054';
         setUserData({
        labels: chartItems.labels,
        datasets: [{

            backgroundColor: "#C79FBE",
            barThickness: "30",
            label: data.sold_items,
            data: chartItems.data1
        },
        {
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: data.turnover,
            data: chartItems.data2
        }
        ]
    });
     } else {
             ChartJS.defaults.color = '#FFFFFF';
          
         setUserData({
        labels: chartItems.labels,
        datasets: [{
            

            backgroundColor: "#41196F",
            barThickness: "30",
            label: data.sold_items,
            data: chartItems.data1
        },
        {
            
            
            backgroundColor: "#1B1B1a",
            barThickness: "30",
            label: data.turnover,
            data: chartItems.data2
        }
        ]
    });
     }
      }, [getTheme().theme]);
    return (
        <><div style={{height: "75vh"}} className="flex-row">
                        <div style={{height:"95%", width:"100%", top:"20%", position:"relative"}}>
                            <Bar data={userData}/>
                        </div>
                    </div></>
    );
    
}