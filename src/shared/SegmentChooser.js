import {VerticalDividerOnPrimaryContainer} from "./VerticalDivider";

export function SegmentChooser({segments, chosenSegmentIndex, onSegmentClick}) {
    return <div className="segment-chooser">
        {segments.map(
            (segment, index) => {
                let className = "flex-row"
                if (index === chosenSegmentIndex) {
                    className = "chosen-segment"
                }
                return <div onClick={() => onSegmentClick(index)} style={{flex: 1, cursor: "pointer"}}
                            className={className}>
                    <span style={{flex: 1, padding: 24}} className="display-small">{segment}</span>
                    {index < segments.length - 1 && <VerticalDividerOnPrimaryContainer/>}
                </div>
            }
        )
        }
    </div>
}
