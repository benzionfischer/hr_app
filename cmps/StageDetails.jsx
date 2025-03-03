import { UserProfile } from "./cmps/UserProfile.jsx"


export function StageDetails({ stage }) {

    if (!stage || Object.keys(stage).length === 0) {
        return <div>Loading...</div>;
    }

    return (<div className="stage-details">
                <UserProfile name={stage.reviewers[0].name}
                             role={stage.reviewers[0].role}
                             icon={stage.reviewers[0].icon}/>
                <div className="divider"></div>
                <div>Stage name: {stage.name}</div>
                <div>Stage description: {stage.description}</div>

                <div className="divider"></div>

            </div>)
}