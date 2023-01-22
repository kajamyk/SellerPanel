export function ShortInfo({headline, amount}) {
    return <div className="order-info">
        <span className="title-large">{headline}</span>
        <span className="headline-medium info-next-item-margin">{amount}</span>
    </div>
}

export function DetailedInfo({headline, amount, moneyValue}) {
    return <div className="order-info">
        <span className="headline-medium">{headline}</span>
        <span className="display-medium info-next-item-margin">{amount}</span>
        <span className="display-small">Suma:{moneyValue}zł</span>
    </div>
}
