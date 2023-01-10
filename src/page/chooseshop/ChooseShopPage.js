import {Card} from "../../shared/Card";
import {Toolbar} from "../../shared/Toolbar";
import {useNavigate} from "react-router-dom";

function ShopItem({image, name}) {
    const navigate = useNavigate()
    const commandOpenShop = (e) => {
        e.preventDefault()
        navigate("/")
    }
    return <div onClick={commandOpenShop} style={{cursor: "pointer"}}>
        <Card className={"ChooseShop-card card"}>
            <div style={{textAlign: "center",}} className="flex-column">
                <div style={{borderRadius: 10}}>
                    <img src={image} alt={"Shop logo"}/>
                </div>
                <span style={{margin: 16}} className="headline-large">{name}</span>
            </div>
        </Card>
    </div>
}

export function ChooseShopPage() {
    return <div className="ChooseShop">
        <Toolbar title={"Wybierz sklep"}/>
        <div style={{margin: 24, columns: "auto 2"}}>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
            <ShopItem name={"Shop name"} image={"drawable/shop.png"}/>
        </div>
    </div>
}