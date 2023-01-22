import {HorizontalDivider} from "../../shared/HorizontalDivider";

export function RatingItemShort({productName, comment}) {
    return <div className="flex-column">
        <span className="headline-small Rating-Short column-texts-margin-bottom">{comment}</span>
        <span className="title-medium Rating-Short">{productName}</span>
        <HorizontalDivider/>
    </div>
}
