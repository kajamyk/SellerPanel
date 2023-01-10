import {RankingItem} from "../ranking/RankingItem";

const allItems = [
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

export function HomeRanking() {
    return <div style={{overflowY: "scroll", paddingTop: 16, height: 250, paddingLeft: 24, paddingRight: 24}}
                className="flex-column">
        {
            allItems.map(item => (
                <RankingItem productName={item.productName} image={item.image} stars={item.stars} width={200}
                             height={125} comment={item.comment}/>
            ))
        }
    </div>
}