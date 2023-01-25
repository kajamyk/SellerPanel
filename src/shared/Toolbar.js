import {useNavigate} from "react-router-dom";
import {getTheme, setTheme} from "../controllers/themecontroller";
import {changeShop, getShop} from "../controllers/shopcontroller";
import {changeLanguage, getCurrentLanguage} from "../controllers/languagecontroller"
import {useState} from 'react';

export function Toolbar({title, showSelect = true}) {
    const navigate = useNavigate()


    let pl = 'drawable/pl.svg';
    let en = 'drawable/uk_flag.svg';
    let lang = getCurrentLanguage();
    const [langPath, setLangPath] = useState(() => {
        console.log(lang)
        if (lang === "PL") {
            return pl;
        } else {
            return en;
        }

    });


    const setlanguage = (e) => {
        e.preventDefault();
        changeLanguage();
        if (langPath === en) {
            setLangPath(pl);
        } else {
            setLangPath(en);
        }
    }


    const commandNavigateToMain = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const commandChangeTheme = (e) => {
        e.preventDefault()
        if (getTheme().theme === "dark-theme") {
            setTheme("light-theme")
        } else {
            setTheme("dark-theme")
        }
        window.location.reload()
    }

    let themeIconPath
    let logoPath
    if (getTheme().theme === "dark-theme") {
        themeIconPath = "drawable/light_mode.svg"
        logoPath = "drawable/money_dark.svg"
    } else {
        themeIconPath = "drawable/dark_mode.svg"
        logoPath = "drawable/money_light.svg"
    }


    return <div className="toolbar">


        <img onClick={commandNavigateToMain} src={logoPath} alt="App logo"/>

        <span onClick={commandNavigateToMain} className="headline-large toolbar-title">{title}</span>
        {showSelect && <select onChange={(event) => changeShop(event.target.value)} defaultValue={getShop()}
                               className="headline-large select-list">
            <option value="Orzechowy sklep">Orzechowy sklep</option>
            <option value="Twoje orzechy">Twoje orzechy</option>
            <option value="Orzechowy świat">Orzechowy świat</option>
            <option value="Świat orzechów">Świat orzechów</option>
        </select>}
        <img className="toolbar-image" src={langPath} onClick={setlanguage}/>
        <img onClick={commandChangeTheme} className="theme-icon"
             src={themeIconPath}/>
    </div>
}