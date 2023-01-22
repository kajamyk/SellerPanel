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

    return <div className="surface-background">
        <Toolbar title={"Ranking Ofert"}/>
        <span className="display-medium screen-margin">Sortuj według:</span>
        <SegmentChooser segments={["Najczęściej kupowane", "Najrzadziej kupowane"]}
                        chosenSegmentIndex={segmentIndex}
                        onSegmentClick={commandChangeSegmentIndex}/>

        <div className="flex-column screen-margin">
            {
                items.map(item => (
                    <RankingItem productName={item.productName} image={item.image} amount={item.timesBought} />
                ))
            }
        </div>
    </div>
}
