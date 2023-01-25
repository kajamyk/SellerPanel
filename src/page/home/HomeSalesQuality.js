import {AspectItem} from "../sales/quality/SalesQualityPage";
import { getCurrentData } from "../../controllers/languagecontroller";
import {quality} from "../../mock"
export function HomeSalesQuality() {
    const data = getCurrentData();
    return <div className="home-quality">
        <AspectItem className={"card-transparent"} leftText={data.aspect1} rightText={quality.aspect1}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect2} rightText={quality.aspect2}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect3} rightText={quality.aspect3}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect4} rightText={quality.aspect4}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect5} rightText={quality.aspect5}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect6} rightText={quality.aspect6}/>
    </div>
}