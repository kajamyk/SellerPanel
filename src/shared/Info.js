export function ShortInfo({headline, amount}) {
    return <div className="order-info">
        <span className="title-large">{headline}</span>
        <span style={{marginTop: 16}} className="headline-medium">{amount}</span>
    </div>
}

export function DetailedInfo({headline, amount, moneyValue}) {
    return <div className="order-info">
        <span className="headline-medium">{headline}</span>
        <span style={{marginTop: 16}} className="display-medium">{amount}</span>
        <span className="display-small">Suma:{moneyValue}zł</span>
    </div>
}
