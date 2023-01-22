import {Card} from "../../shared/Card";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate()
    const commandLogin = (e) => {
        e.preventDefault()
        navigate("/choose_shop")
    }

    return <div className="login-container">
        <Card>
            <div className="screen-margin">
                <div className="flex-column center-text">
                    <span className="display-medium">Logowanie</span>
                    <img src={'drawable/login.svg'} alt="Login"/>
                </div>
                <form onSubmit={commandLogin} className="flex-column">
                    <span className="headline-medium">Email</span>
                    <input className="headline-medium" type="email" name="email" placeholder="email@example.com"/>
                    <span className="headline-medium">Hasło</span>
                    <input className="headline-medium" type="password" name="password" placeholder="******"/>
                    <button className="button-56" role="button">Zaloguj</button>
                </form>
            </div>
        </Card>
    </div>
}
