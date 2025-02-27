export function StageDetails({ stage }) {

    if (!stage || Object.keys(stage).length === 0) {
        return <div>Loading...</div>;
    }

    return (<div className="stage-details">
                <div>Stage name: {stage.name}</div>
            </div>)
}