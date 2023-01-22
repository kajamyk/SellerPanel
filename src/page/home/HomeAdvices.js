const allAdvices = [
    "Należy poprawić czas wysyłki",
    "Wzrosła liczba nieopłaconych produktów, przypomnij klientom o zapłacie",
    "Wzrosła liczba zwrotów zadbaj o podniesienie jakości produktów",
    "Spadek sprzedaży w grudniu, przemyśl zrobienie promocji",
    "Wzrost sprzedaży w lutym, oby tak dalej"
]

export function HomeAdvices() {
    return <div className="flex-column home-advices">
        {
            allAdvices.map(advice => (
                    <span className="headline-small home-advice">{advice}</span>
                )
            )
        }
    </div>
}
