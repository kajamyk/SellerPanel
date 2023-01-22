import {Toolbar} from "../../../shared/Toolbar";
import {Card} from "../../../shared/Card";
import {VerticalDivider} from "../../../shared/VerticalDivider";

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
    return <div>
        <Toolbar title={"Jakość sprzedaży"}/>
        <div className="screen-margin">
            <AspectItem className={"card"} leftText={"Aspekt"} rightText={"Ocena"}/>
            <AspectItem className={"card-transparent"} leftText={"Marketing produktu"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Relacja z klientem"} rightText={"86/100"}/>
            <AspectItem className={"card-transparent"} leftText={"Czas wysyłki"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Satysfakcja klienta"} rightText={"86/100"}/>
            <AspectItem className={"card-transparent"} leftText={"Utrzymanie klienta"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Sprzedaż produktu"} rightText={"86/100"}/>
        </div>
    </div>
}
