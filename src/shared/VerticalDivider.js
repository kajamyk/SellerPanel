export function VerticalDivider({className}) {
    let name = "vertical-divider"
    if (className !== undefined) {
        name = className
    }
    return <div className={name}></div>
}

export function VerticalDividerOnPrimaryContainer() {
    return <VerticalDivider className={"vertical-divider-on-primary-container"}/>
}
