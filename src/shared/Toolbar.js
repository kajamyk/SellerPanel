import {useNavigate} from "react-router-dom";
import {getTheme, setTheme} from "../controllers/themecontroller";
import {getShop, changeShop} from "../controllers/shopcontroller";
export function Toolbar({title}) {
    const navigate = useNavigate()
    



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
        <select onChange={(event) => changeShop(event.target.value)} defaultValue={getShop()} className="headline-large select-list">
            <option value="Orzechowy sklep">Orzechowy sklep</option>
            <option value="Twoje orzechy">Twoje orzechy</option>
            <option value="Orzechowy świat">Orzechowy świat</option>
            <option value="Świat orzechów">Świat orzechów</option>
        </select>
        <img className="toolbar-image" src={"drawable/uk_flag.svg"}/>
        <img onClick={commandChangeTheme} className="theme-icon"
             src={themeIconPath}/>
    </div>
}