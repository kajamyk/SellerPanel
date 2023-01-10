export function VerticalDivider({style, className}) {
    let name = "vertical-divider"
    if (className !== undefined) {
        name = className
    }
    return <div style={style} className={name}></div>
}

export function VerticalDividerOnPrimaryContainer({style}) {
    return <VerticalDivider style={style} className={"vertical-divider-on-primary-container"}/>
}
