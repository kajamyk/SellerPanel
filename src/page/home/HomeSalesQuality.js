import {AspectItem} from "../sales/quality/SalesQualityPage";
import { getCurrentData } from "../../controllers/languagecontroller";
export function HomeSalesQuality() {
    const data = getCurrentData();
    return <div className="home-quality">
        <AspectItem className={"card-transparent"} leftText={data.aspect1} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect2} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect3} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect4} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect5} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={data.aspect6} rightText={"86/100"}/>
    </div>
}