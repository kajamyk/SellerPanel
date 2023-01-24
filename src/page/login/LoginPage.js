import {Card} from "../../shared/Card";
import {useNavigate} from "react-router-dom";
import { getCurrentData } from "../../controllers/languagecontroller";

export function LoginPage() {
    const data = getCurrentData();
    const navigate = useNavigate()
    const commandLogin = (e) => {
        e.preventDefault()
        navigate("/choose_shop")
    }

    return <div className="login-container">
        <Card>
            <div className="screen-margin">
                <div className="flex-column center-text">
                    <span className="display-medium">{data.login}</span>
                    <img src={'drawable/login.svg'} alt="Login"/>
                </div>
                <form onSubmit={commandLogin} className="flex-column">
                    <span className="headline-medium">{data.email}</span>
                    <input className="headline-medium" type="email" name="email" placeholder="email@example.com"/>
                    <span className="headline-medium">{data.password}</span>
                    <input className="headline-medium" type="password" name="password" placeholder="******"/>
                    <button className="button-56" role="button">{data.loginbutton}</button>
                </form>
            </div>
        </Card>
    </div>
}
