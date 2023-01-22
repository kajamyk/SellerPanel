import {AspectItem} from "../sales/quality/SalesQualityPage";

export function HomeSalesQuality() {
    return <div className="home-quality">
        <AspectItem className={"card-transparent"} leftText={"Marketing produktu"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Relacja z klientem"} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Czas wysyłki"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Satysfakcja klienta"} rightText={"86/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Utrzymanie klienta"} rightText={"75/100"}/>
        <AspectItem className={"card-transparent"} leftText={"Sprzedaż produktu"} rightText={"86/100"}/>
    </div>
}