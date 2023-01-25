import {SegmentChooser} from "../../shared/SegmentChooser";
import {Toolbar} from "../../shared/Toolbar";
import {useEffect, useState} from "react";
import {RankingItem} from "./RankingItem";
import { getCurrentData } from "../../controllers/languagecontroller";
import {rankingItems} from '../../mock'

export function RankingPage() {
    const data = getCurrentData();
    
    let [items, setItems] = useState(rankingItems)
    let [segmentIndex, setSegmentIndex] = useState(0)

    useEffect(() => {
        commandChangeSegmentIndex(0)
    }, [])

    const commandChangeSegmentIndex = (index) => {
        if (index === 0) {
            setItems(rankingItems.sort((item, nextItem) => nextItem.timesBought - item.timesBought))
        } else if (index === 1) {
            setItems(rankingItems.sort((item, nextItem) => item.timesBought - nextItem.timesBought))
        }
        setSegmentIndex(index)
    }

    return <div className="surface-background">
        <Toolbar title={"Ranking Ofert"}/>
        <span className="display-medium screen-margin">{data.sort}</span>
        <SegmentChooser segments={[data.most_frequently_bought, data.least_Frequantly_bought]}
                        chosenSegmentIndex={segmentIndex}
                        onSegmentClick={commandChangeSegmentIndex}/>

        <div className="flex-column screen-margin">
            {
                rankingItems.map(item => (
                    <RankingItem productName={item.productName} image={item.image} amount={item.timesBought} />
                ))
            }
        </div>
    </div>
}
