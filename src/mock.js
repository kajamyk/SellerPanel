import {getCurrentData} from "./controllers/languagecontroller";
const data = getCurrentData();
export const allAdvices = [
    data.sale_advice,
    data.happy_advice,
    data.return_advice
];
export const allItems = [
    {
        productName: "Orzechy",
        image: "drawable/walnut.png",
        stars: 3,
        comment: "Pyszne orzechy, ale mam na nie uczulenie"
    },
    {
        productName: "Orzechy",
        image: "drawable/walnut.png",
        stars: 1,
        comment: "Nie smakują mi"
    },
    {
        productName: "Orzechy",
        image: "drawable/walnut.png",
        stars: 5,
        comment: "Nigdy nie jadłem lepszych orzechów"
    },
]
export const orderItems = {
    notPayed:10,
    notSend:10,
    returns:10,
}
export const rankingItems = [
    {
        productName: "Orzechy włoskie",
        image: "drawable/walnut.png",
        timesBought: 10,
    },
    {
        productName: "Orzechy brazylijskie",
        image: "drawable/brasilian_nut.png",
        timesBought: 1,
    },
    {
        productName: "Orzechy nerkowca",
        image: "drawable/cashew.png",
        timesBought: 15,
    },
    {
        productName: "Orzechy pekan",
        image: "drawable/pekan_nut.png",
        timesBought: 310,
    },
    {
        productName: "Migdały",
        image: "drawable/almond.png",
        timesBought: 5,
    },
]
export const orderInfo = {
    notPayed:10,
    notPayedSum:1000,
    notSend:10,
    notSendSum:2000,
    returns:10,
    returnsSum:500
}
export const quality = {
    aspect1:"74/100",
    aspect2:"71/100",
    aspect3:"60/100",
    aspect4:"20/100",
    aspect5:"80/100",
    aspect6:"70/100",
}
export const chartItems = {
    labels: [16.01, 17.01, 18.01, 19.01, 20.01, 21.01, 22.01],
    data1: [11, 12, 13, 11, 10, 12, 10], 
    data2: [101, 102, 130, 110, 100, 120, 100],
}
    

