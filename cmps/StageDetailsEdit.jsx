import { UserProfile } from "./UserProfile.jsx"


export function StageDetailsEdit({ stage }) {

    if (!stage || Object.keys(stage).length === 0) {
        return <div>Loading...</div>;
    }

    return (<div className="stage-details">
                <div className="stage-details-txt">Stage name: {stage.name}</div>
                <div className="stage-details-txt">Stage description: {stage.description}</div>
            </div>)
}