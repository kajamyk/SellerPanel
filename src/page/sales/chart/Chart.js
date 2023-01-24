import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import {Card} from "../../../shared/Card"
import React, {useState, useEffect} from 'react';
import{getTheme} from "../../../controllers/themecontroller"
export function Chart(props) {
    //ChartJS.defaults.color = '#93000A';
    
    //2A0054
    const [userData, setUserData] = useState({
        labels: [16.01, 17.01, 18.01, 19.01, 20.01, 21.01, 22.01],
        datasets: [{
            backgroundColor: "#C79FBE",

            barThickness: "30",
            label: 'Liczba sprzedanych sztuk',
            data: [11, 12, 13, 11, 10, 12, 10], 
        },
        {
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: "Obrót",
            data: [101, 102, 130, 110, 100, 120, 100],
        }
        ]
    });
     useEffect(() => {
     if (getTheme().theme === "light-theme") {
         ChartJS.defaults.color = '#2A0054';
         setUserData({
        labels: [16.01, 17.01, 18.01, 19.01, 20.01, 21.01, 22.01],
        datasets: [{

            backgroundColor: "#C79FBE",
            barThickness: "30",
            label: 'Liczba sprzedanych sztuk',
            data: [11, 12, 13, 11, 10, 12, 10], 
        },
        {
            backgroundColor: "#FFFFFF",
            barThickness: "30",
            label: "Obrót",
            data: [101, 102, 130, 110, 100, 120, 100],
        }
        ]
    });
     } else {
             ChartJS.defaults.color = '#FFFFFF';
          
         setUserData({
        labels: [16.01, 17.01, 18.01, 19.01, 20.01, 21.01, 22.01],
        datasets: [{
            

            backgroundColor: "#41196F",
            barThickness: "30",
            label: 'Liczba sprzedanych sztuk',
            data: [11, 12, 13, 11, 10, 12, 10], 
        },
        {
            
            
            backgroundColor: "#1B1B1a",
            barThickness: "30",
            label: "Obrót",
            data: [101, 102, 130, 110, 100, 120, 100],
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