import {useNavigate} from "react-router-dom";
import {getTheme, setTheme} from "../controllers/themecontroller";

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

    return <div className="Toolbar">
        <img onClick={commandNavigateToMain} src={logoPath} alt="App logo"/>
        <span onClick={commandNavigateToMain} style={{marginLeft: 24, flex: 1}}
              className="headline-large">{title}</span>
        <img style={{cursor: "pointer", width: 40, height: 30, marginRight: 24}}
             src={"drawable/uk_flag.svg"}/>
        <img onClick={commandChangeTheme} style={{cursor: "pointer", width: 48, height: 48, marginRight: 24}}
             src={themeIconPath}/>
    </div>
}