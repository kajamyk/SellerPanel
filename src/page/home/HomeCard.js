import {Card} from "../../shared/Card";

export function HomeCard(props) {
    let className = "home-card"
    if (props.className !== undefined) {
        className = props.className
    }
    return <div onClick={props.onClick} className={className}>
        <Card>
            <div className="Home-card-header">
                <img src={props.image}/>
                <span className="headline-small">{props.title}</span>
            </div>
            {props.children}
        </Card>
    </div>
}
