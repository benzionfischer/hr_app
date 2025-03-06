const { useEffect, useState } = React

import { UserProfile } from "./UserProfile.jsx"

export function StageDetailsEdit({ stage = {}, reviewers = [], onSave }) {
    const [stageName, setStageName] = useState(stage.name || "");
    const [description, setDescription] = useState(stage.description || "");
    const [selectedReviewer, setSelectedReviewer] = useState(null);

    const handleSave = () => {
        const newStage = {
            ...stage,
            name: stageName,
            description,
            reviewers: [selectedReviewer]
        };
        onSave(newStage); // Callback to save stage
    };

    function getReviewerByName(name) {
        return reviewers.find(reviewer => reviewer.name === name)
    }


    return (
        <div className="stage-details">
            <div className="stage-details-txt">{stage.name ? `Edit: ${stage.name}` : "Create New Stage"}</div>

            <label>
                Stage Name:
                <input
                    type="text"
                    value={stageName}
                    onChange={(e) => setStageName(e.target.value)}
                    placeholder="Enter stage name"
                    className="stage-input"
                />
            </label>
            <br/>
            <label>
                Stage Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    className="stage-input"
                />
            </label>
            <br/>

            <label>
                Reviewer:
                <select value={selectedReviewer !=  null ? selectedReviewer.name : "Stage name..."} onChange={(e) => setSelectedReviewer(getReviewerByName(e.target.value))} className="stage-select">
                    <option value="">Select Reviewer</option>
                    {reviewers.map((reviewer) => (
                        <option key={reviewer.id} value={reviewer.name}>
                            {reviewer.name}
                        </option>
                    ))}
                </select>
            </label>

            <br/>
            <button onClick={handleSave} className="save-button">Save Stage</button>
        </div>
    );
}
