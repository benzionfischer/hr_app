import { UserProfile } from "./UserProfile.jsx"


export function StageDetailsView({ stage }) {

    if (!stage || Object.keys(stage).length === 0) {
        return <div>Loading...</div>;
    }

    console.log("reviewers: " + stage.reviewers.length)

    return (<div className="stage-details">
                <UserProfile name={stage.reviewers.length > 0 ? stage.reviewers[0].name : "No reviewer chosen ..."}
                             role={stage.reviewers.length > 0 ? stage.reviewers[0].role : "No reviewer chosen ..."}
                             icon={stage.reviewers.length > 0 ? stage.reviewers[0].icon : "No reviewer chosen ..."}/>
                <div className="divider"></div>
                <div className="stage-details-txt"> Stage name: {stage.name}</div>
                <div className="stage-details-txt">Stage description: {stage.description}</div>
            </div>)
}