import {Card} from "../../shared/Card";

export function HomeCard(props) {
    return <div style={{...props.style, flex: 1, marginBottom: 16}}>
        <Card>
            <div className="Home-card-header">
                <img src={"drawable/money_dark.svg"}/>
                <span className="headline-small">{props.title}</span>
            </div>
            {props.children}
        </Card>
    </div>
}
