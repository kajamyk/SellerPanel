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

    let iconPath
    if (getTheme().theme === "dark-theme") {
        iconPath = "drawable/dark_mode.svg"
    } else {
        iconPath = "drawable/light_mode.svg"
    }

    return <div className="Toolbar">
        <img onClick={commandNavigateToMain} src={'drawable/money.svg'} alt="App logo"/>
        <span onClick={commandNavigateToMain} style={{marginLeft: 24, flex: 1}}
              className="headline-large">{title}</span>
        <img onClick={commandChangeTheme} style={{cursor: "pointer", width: 48, height: 48, marginRight: 24}}
             src={iconPath}/>
    </div>
}