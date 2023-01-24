import dataENG from '../translations/en/common.json';
import dataPL from '../translations/pl/common.json';
 
export const changeLanguage = () => {
    let lang = JSON.parse(localStorage.getItem("LANG"));
    if(lang === "PL") {
        localStorage.setItem("LANG", JSON.stringify("ENG"));
    } else {
         localStorage.setItem("LANG", JSON.stringify("PL"));
    }
    console.log("ch");
    window.location.reload()
}
export const getCurrentLanguage = () => {
    const lang =  JSON.parse(localStorage.getItem("LANG"));
    if(lang === "ENG") {
        return "ENG";
    } else {
        return "PL";
    }
}
export const getCurrentData = () => {
    let lang = JSON.parse(localStorage.getItem("LANG"));
    if(lang === "ENG") {
        return dataENG;
    } else {
        return dataPL;
    }
}
