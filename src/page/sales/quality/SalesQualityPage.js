import {Toolbar} from "../../../shared/Toolbar";
import {Card} from "../../../shared/Card";
import {VerticalDivider} from "../../../shared/VerticalDivider";
import { getCurrentData } from "../../../controllers/languagecontroller";
import {quality} from "../../../mock"
export function AspectItem({className, leftText, rightText}) {
    return <Card className={className}>
        <div className="flex-row aspect">
            <span className="headline-medium aspect-item">{leftText}</span>
            <VerticalDivider/>
            <span className="headline-medium aspect-item">{rightText}</span>
        </div>
    </Card>
}

export function SalesQualityPage() {
    const data = getCurrentData();
    return <div>
        <Toolbar title={data.sale_quality}/>
        <div className="screen-margin">
            <AspectItem className={"card"} leftText={data.aspect} rightText={data.grade}/>
            <AspectItem className={"card-transparent"} leftText={data.aspect1} rightText={quality.aspect1}/>
            <AspectItem className={"card-secondary"} leftText={data.aspect2} rightText={quality.aspect2}/>
            <AspectItem className={"card-transparent"} leftText={data.aspect3} rightText={quality.aspect3}/>
            <AspectItem className={"card-secondary"} leftText={data.aspect4} rightText={quality.aspect4}/>
            <AspectItem className={"card-transparent"} leftText={data.aspect5} rightText={quality.aspect5}/>
            <AspectItem className={"card-secondary"} leftText={data.aspect6} rightText={quality.aspect6}/>
        </div>
    </div>
}
