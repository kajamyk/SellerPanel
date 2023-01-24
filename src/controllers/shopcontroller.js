const SHOP = "Orzechowy sklep"
export const changeShop = (shop) => {
    //console.log("change");
    //console.log(shop)
    localStorage.setItem("SHOP", JSON.stringify(shop));
    //console.log("get" +  JSON.parse(localStorage.getItem("Orzechowy sklep")).value)
}
export const getShop = () => {
    
     let shop = JSON.parse(localStorage.getItem("SHOP"));
     
    if (shop === undefined || shop === null) {
        removeShop();
        getShop();
    }
    //console.log("get " + shop.value);
    return shop;
}
export const removeShop = () => {
    //console.log("remove");
    changeShop("Orzechowy sklep");
}