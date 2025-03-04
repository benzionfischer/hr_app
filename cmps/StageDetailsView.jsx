import { UserProfile } from "./UserProfile.jsx"


export function StageDetailsView({ stage }) {

    if (!stage || Object.keys(stage).length === 0) {
        return <div>Loading...</div>;
    }

    return (<div className="stage-details">
                <UserProfile name={stage.reviewers[0].name}
                             role={stage.reviewers[0].role}
                             icon={stage.reviewers[0].icon}/>
                <div className="divider"></div>
                <div className="stage-details-txt">Stage name: {stage.name}</div>
                <div className="stage-details-txt">Stage description: {stage.description}</div>
            </div>)
}