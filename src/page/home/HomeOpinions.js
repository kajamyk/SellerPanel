import {RatingItemShort} from "../opinions/RatingItemShort";
import {allItems} from "../../mock"


export function HomeOpinions() {
    return <div className="flex-column home-opinions">
        {
            allItems.map(item => (
                <RatingItemShort productName={item.productName} comment={item.comment}/>
            ))
        }
    </div>
}