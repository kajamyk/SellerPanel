const allAdvices = [
    "Należy poprawić czas wysyłki",
    "Wzrosła liczba nieopłaconych produktów, przypomnij klientom o zapłacie",
    "Wzrosła liczba zwrotów zadbaj o podniesienie jakości produktów",
    "Spadek sprzedaży w grudniu, przemyśl zrobienie promocji",
    "Wzrost sprzedaży w lutym, oby tak dalej"
]

export function HomeAdvices() {
    return <div style={{overflowY: "scroll", paddingTop: 16, height: 250, paddingLeft: 24, paddingRight: 24}}
                className="flex-column">
        {
            allAdvices.map(advice => (
                    <span style={{marginBottom: 24}} className="headline-small">{advice}</span>
                )
            )
        }
    </div>
}
