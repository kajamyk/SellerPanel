import {AspectItem} from "../sales/quality/SalesQualityPage";

export function HomeSalesQuality() {
    return <div style={{margin: 24, height: 250, overflowY: "scroll"}}>
        <AspectItem className={"card-secondary"} leftText={"Nazwa aspektu"} rightText={"Ocena"}/>
        <AspectItem className={"card-transparent"} leftText={"Marketing produktu"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Relacja z klientem"} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Czas wysyłki"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Satysfakcja klienta"} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Utrzymanie klienta"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Sprzedaż produktu"} rightText={"86/100"}/>
    </div>
}