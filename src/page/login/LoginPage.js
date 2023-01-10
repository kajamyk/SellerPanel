import {Card} from "../../shared/Card";
import {useNavigate} from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate()
    const commandLogin = (e) => {
        e.preventDefault()
        navigate("/choose_shop")
    }

    return <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
        <Card>
            <div style={{margin: 24}}>
                <div style={{textAlign: "center", alignItems: "center"}} className="flex-column">
                    <span className="display-medium">Logowanie</span>
                    <img src={'drawable/login.svg'} alt="Login"/>
                </div>
                <form onSubmit={commandLogin} style={{marginTop: 24, marginLeft: 48, marginRight: 48}}
                      className="flex-column">
                    <span style={{marginBottom: 14}} className="headline-medium">Email</span>
                    <input className="headline-medium" type="email" name="email" placeholder="email@example.com"/>
                    <span style={{marginTop: 20, marginBottom: 14}} className="headline-medium">Hasło</span>
                    <input className="headline-medium" type="password" name="password" placeholder="******"/>
                    <button style={{marginTop: 32}} class="button-56" role="button">Zaloguj</button>
                </form>
            </div>
        </Card>
    </div>
}
