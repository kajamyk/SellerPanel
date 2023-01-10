import {Card} from "../../shared/Card";

export function HomeCard(props) {
    return <div onClick={props.onClick} style={{cursor: "pointer",...props.style, flex: 1, marginBottom: 16}}>
        <Card>
            <div className="Home-card-header">
                <img src={props.image}/>
                <span className="headline-small">{props.title}</span>
            </div>
            {props.children}
        </Card>
    </div>
}
