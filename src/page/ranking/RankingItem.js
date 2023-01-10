import {HorizontalDivider} from "../../shared/HorizontalDivider";

export function RankingItem({productName, image, width = 300, height = 120}) {
    return <div style={{marginBottom: 16}} className="flex-column">
        <div className="flex-row">
            <img style={{width: width, height: height}} src={image} alt="Product Image"/>
            <div style={{marginLeft: 16}} className="flex-column">
                <span className="display-medium">{productName}</span>
            </div>
        </div>
        <HorizontalDivider/>
    </div>
}
