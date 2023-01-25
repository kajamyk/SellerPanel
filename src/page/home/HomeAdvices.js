import {allAdvices} from '../../mock'


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
