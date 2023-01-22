import {HorizontalDivider} from "../../shared/HorizontalDivider";

export function RankingItem({productName, image, amount, imageClassName = "image-ranking"}) {
    return <div className="flex-column list-item-margin-bottom">
        <div className="flex-row">
            <img className={imageClassName} src={image} alt="Product Image"/>
            <div className="flex-column image-content-margin-left">
                <span className="headline-medium">{productName}</span>
                <span className="headline-large">{amount} osób kupiło</span>
            </div>
        </div>
        <HorizontalDivider/>
    </div>
}
