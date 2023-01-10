import {HorizontalDivider} from "../../shared/HorizontalDivider";

function Star() {
    return <img style={{width: 36, height: 36, marginRight: 4}} src={"drawable/star_rate.svg"} alt="Star"/>
}

export function RatingItem({productName, image, stars, comment, width = 300, height = 200}) {
    return <div style={{marginBottom: 16}} className="flex-column">
        <div className="flex-row">
            <img style={{width: width, height: height}} src={image} alt="Product Image"/>
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
