export function Card(props) {
    let className = "card"
    if (props.className !== undefined) {
        className = props.className
    }
    return <div className={className}>
        {props.children}
    </div>
}
