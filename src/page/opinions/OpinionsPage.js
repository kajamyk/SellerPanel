import {HorizontalDivider} from "../../shared/HorizontalDivider";

function Star() {
    return <img style={{width: 36, height: 36, marginRight: 4}} src={"drawable/star_rate.svg"} alt="Star"/>
}

function RatingItem({productName, image, stars, comment}) {
    return <div style={{marginBottom: 16}} className="flex-column">
        <div className="flex-row">
            <img style={{width: 300, height: 200}} src={image} alt="Product Image"/>
            <div style={{marginLeft: 16}} className="flex-column">
                <span className="display-medium">{productName}</span>
                <div style={{marginTop: 8}} className="flex-row">
                    {Array(stars).fill(<Star/>)}
                </div>
                <span style={{marginTop: 16}} className="body-large">{comment}</span>
            </div>
        </div>
        <HorizontalDivider/>
    </div>
}

export function OpinionsPage() {
    const items = [
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
            stars: 4,
            comment: "Pyszne orzechy, ale mam na nie uczulenie"
        },
        {
            productName: "Orzechy",
            image: "drawable/walnut.png",
            stars: 5,
            comment: "Nigdy nie jadłem lepszych orzechów"
        },
    ]

    return <div>
        <div style={{marginTop: 24, marginLeft: 24, marginRight: 24}} className="flex-column">
            {
                items.map((item) => {
                    return <RatingItem productName={item.productName} image={item.image} stars={item.stars}
                                       comment={item.comment}/>
                })
            }
        </div>
    </div>
}
