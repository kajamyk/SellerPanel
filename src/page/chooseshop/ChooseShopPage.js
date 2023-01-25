import {Card} from "../../shared/Card";
import {Toolbar} from "../../shared/Toolbar";
import {useNavigate} from "react-router-dom";
import {changeShop} from '../../controllers/shopcontroller'
import {getCurrentData} from "../../controllers/languagecontroller";

function ShopItem({image, name}) {

    const navigate = useNavigate()
    const commandOpenShop = (e) => {
        e.preventDefault()
        changeShop(name);
        navigate("/")
    }
    return <div onClick={commandOpenShop}>

        <Card className={"ChooseShop-card card"}>
            <div className="flex-column">
                <div className="default-border-radius">
                    <img src={image} alt={"Shop logo"}/>
                </div>
                <span className="headline-large item-to-item-margin">{name}</span>
            </div>
        </Card>
    </div>
}

export function ChooseShopPage() {
    const data = getCurrentData();
    return <div className="ChooseShop">
        <Toolbar title={data.chooseshop} showSelect={false}/>
        <div className="choose-shop-container">
            <ShopItem name={"Orzechowy sklep"} image={"drawable/orzechy1.jpg"}/>
            <ShopItem name={"Twoje orzechy"} image={"drawable/orzechy2.jpg"}/>
            <ShopItem name={"Orzechowy świat"} image={"drawable/orzechy3.jpg"}/>
            <ShopItem name={"Świat orzechów"} image={"drawable/orzechy4.jpg"}/>
        </div>
    </div>
}