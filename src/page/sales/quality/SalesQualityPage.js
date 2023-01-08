import {Toolbar} from "../../../shared/Toolbar";
import {Card} from "../../../shared/Card";
import {VerticalDivider} from "../../../shared/VerticalDivider";

function AspectItem({className, textColor, leftText, rightText}) {
    const spanStyle = {
        flex: 1,
        marginTop: 24,
        marginBottom: 24,
    }
    return <Card className={className}>
        <div style={{textAlign: "center"}} className="flexRow">
            <span style={spanStyle} className="display-medium">{leftText}</span>
            <VerticalDivider style={{height: "100pv"}}/>
            <span style={spanStyle} className="display-medium">{rightText}</span>
        </div>
    </Card>
}

export function SalesQualityPage() {
    return <div>
        <Toolbar title={"Jakość sprzedaży"}/>
        <div style={{margin: 24}}>
            <AspectItem className={"card"} leftText={"Nazwa aspektu"} rightText={"Ocena"}/>
            <AspectItem className={"card-transparent"} leftText={"Marketing produktu"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Relacja z klientem"} rightText={"86/100"}/>
            <AspectItem className={"card-transparent"} leftText={"Czas wysyłki"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Satysfakcja klienta"} rightText={"86/100"}/>
            <AspectItem className={"card-transparent"} leftText={"Utrzymanie klienta"} rightText={"75/100"}/>
            <AspectItem className={"card-secondary"} leftText={"Sprzedaż produktu"} rightText={"86/100"}/>
        </div>
    </div>
}
