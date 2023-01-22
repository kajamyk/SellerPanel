import {RatingItemShort} from "../opinions/RatingItemShort";

const allItems = [
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

export function HomeOpinions() {
    return <div className="flex-column home-opinions">
        {
            allItems.map(item => (
                <RatingItemShort productName={item.productName} comment={item.comment}/>
            ))
        }
    </div>
}