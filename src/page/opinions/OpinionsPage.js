import {useState} from "react";
import {Toolbar} from "../../shared/Toolbar";
import {SegmentChooser} from "../../shared/SegmentChooser";
import {RatingItem} from "./RatingItem";
import { getCurrentData } from "../../controllers/languagecontroller";
import {allItems} from "../../mock"


export function OpinionsPage() {
    const data = getCurrentData();
    let [segmentIndex, setSegmentIndex] = useState(0)
    let [items, setItems] = useState(allItems)
    const commandChangeSelectedSegment = (index) => {
        switch (index) {
            case 1:
                setItems(allItems.filter(item => item.stars >= 3))
                break
            case 2:
                setItems(allItems.filter(item => item.stars < 3))
                break
            default:
                setItems(allItems)
        }
        setSegmentIndex(index)
    }

    return <div>
        <Toolbar title={data.customer_opinions}/>
        <SegmentChooser segments={[data.all_opinions, data.positive_opinions, data.negative_opinions]} chosenSegmentIndex={segmentIndex}
                        onSegmentClick={commandChangeSelectedSegment}/>
        <div className="flex-column screen-margin">
            {
                items.map(item => (
                    <RatingItem productName={item.productName} image={item.image} stars={item.stars}
                                comment={item.comment}/>
                ))
            }
        </div>
    </div>
}
