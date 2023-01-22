import {HorizontalDivider} from "../../shared/HorizontalDivider";

function Star() {
    return <img className="star" src={"drawable/star_rate.svg"} alt="Star"/>
}

export function RatingItem({productName, image, stars, comment}) {
    return <div className="flex-column list-item-margin-bottom">
        <div className="flex-row">
            <img className="image-rating" src={image} alt="Product Image"/>
            <div className="flex-column image-content-margin-left">
                <span className="headline-small">{comment}</span>
                <div className="flex-row">
                    {Array(stars).fill(<Star/>)}
                </div>
                <span className="title-large">{productName}</span>
            </div>
        </div>
        <HorizontalDivider/>
    </div>
}
