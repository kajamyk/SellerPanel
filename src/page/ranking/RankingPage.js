import {SegmentChooser} from "../../shared/SegmentChooser";
import {Toolbar} from "../../shared/Toolbar";
import {useEffect, useState} from "react";
import {RankingItem} from "./RankingItem";

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

export function RankingPage() {
    let [items, setItems] = useState(allItems)
    let [segmentIndex, setSegmentIndex] = useState(0)

    useEffect(() => {
        commandChangeSegmentIndex(0)
    }, [])

    const commandChangeSegmentIndex = (index) => {
        if (index === 0) {
            setItems(allItems.sort((item, nextItem) => nextItem.timesBought - item.timesBought))
        } else if (index === 1) {
            setItems(allItems.sort((item, nextItem) => item.timesBought - nextItem.timesBought))
        }
        setSegmentIndex(index)
    }

    return <div>
        <Toolbar title={"Ranking Ofert"}/>
        <span style={{marginTop: 16, marginLeft: 24, marginRight: 24}} className="display-large">Sortuj według:</span>
        <SegmentChooser segments={["Najczęściej kupowane", "Najrzadziej kupowane"]}
                        chosenSegmentIndex={segmentIndex}
                        onSegmentClick={commandChangeSegmentIndex}/>

        <div style={{marginTop: 34, marginLeft: 24, marginRight: 24}} className="flex-column">
            {
                items.map(item => (
                    <RankingItem productName={item.productName} image={item.image} stars={item.stars}
                                 comment={item.comment}/>
                ))
            }
        </div>
    </div>
}
