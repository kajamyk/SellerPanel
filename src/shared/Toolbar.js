export function Toolbar({title}) {
    return <div className="toolbar">
        <img className="toolbar-image" src={'drawable/money.svg'} alt="App logo"/>
        <span style={{marginLeft: 24}} className="headline-large">{title}</span>
    </div>
}