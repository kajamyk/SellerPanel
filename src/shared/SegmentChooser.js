import {VerticalDividerOnPrimaryContainer} from "./VerticalDivider";

export function SegmentChooser({segments, chosenSegmentIndex, onSegmentClick}) {
    return <div className="segment-chooser">
        {segments.map(
            (segment, index) => {
                let className = "flex-row not-chosen-segment"
                if (index === chosenSegmentIndex) {
                    className = "chosen-segment"
                }
                return <div onClick={() => onSegmentClick(index)} className={className}>
                    <span className="display-small segment-span">{segment}</span>
                    {index < segments.length - 1 && <VerticalDividerOnPrimaryContainer/>}
                </div>
            }
        )
        }
    </div>
}
