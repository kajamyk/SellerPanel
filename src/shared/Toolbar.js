import {useNavigate} from "react-router-dom";

export function Toolbar({title}) {
    const navigate = useNavigate()

    const commandNavigateToMain = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return <div className="Toolbar">
        <img onClick={commandNavigateToMain} src={'drawable/money.svg'} alt="App logo"/>
        <span onClick={commandNavigateToMain} style={{marginLeft: 24}} className="headline-large">{title}</span>
    </div>
}