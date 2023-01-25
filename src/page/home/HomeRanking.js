import {RankingItem} from "../ranking/RankingItem";
import {rankingItems} from "../../mock"


export function HomeRanking() {
    return <div className="flex-column home-ranking">
        {
            rankingItems.map(item => (
                <RankingItem productName={item.productName} image={item.image} amount={item.timesBought} imageClassName="image-ranking-small"/>
            ))
        }
    </div>
}