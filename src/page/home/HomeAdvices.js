import { getCurrentData } from "../../controllers/languagecontroller";

const data = getCurrentData();
const allAdvices = [
    data.sale_advice,
    data.happy_advice,
    data.return_advice
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
