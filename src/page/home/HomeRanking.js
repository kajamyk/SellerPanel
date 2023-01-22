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
    return <div className="flex-column home-ranking">
        {
            allItems.map(item => (
                <RankingItem productName={item.productName} image={item.image} amount={item.timesBought} imageClassName="image-ranking-small"/>
            ))
        }
    </div>
}