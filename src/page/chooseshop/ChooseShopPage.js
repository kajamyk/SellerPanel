import {Card} from "../../shared/Card";
import {Toolbar} from "../../shared/Toolbar";
import {useNavigate} from "react-router-dom";

function ShopItem({image, name}) {
    const navigate = useNavigate()
    const commandOpenShop = (e) => {
        e.preventDefault()
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
    return <div className="ChooseShop">
        <Toolbar title={"Wybierz sklep"}/>
        <div className="choose-shop-container">
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
        </div>
    </div>
}