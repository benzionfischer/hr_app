const { useEffect, useState } = React

import { UserProfile } from "./UserProfile.jsx"

export function StageDetailsEdit({ stage = {}, reviewers = [], onSave }) {
    const [stageName, setStageName] = useState(stage.name || "");
    const [description, setDescription] = useState(stage.description || "");
    const [selectedReviewer, setSelectedReviewer] = useState("");

    const handleSave = () => {
        const newStage = {
            ...stage,
            name: stageName,
            description,
            reviewer: selectedReviewer
        };
        onSave(newStage); // Callback to save stage
    };


    console.log("StageDetailsEdit: " + stage.index)
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

            <label>
                Reviewer:
                <select value={selectedReviewer} onChange={(e) => setSelectedReviewer(e.target.value)} className="stage-select">
                    <option value="">Select Reviewer</option>
                    {reviewers.map((reviewer) => (
                        <option key={reviewer.id} value={reviewer.name}>
                            {reviewer.name}
                        </option>
                    ))}
                </select>
            </label>

            <button onClick={handleSave} className="save-button">Save Stage</button>
        </div>
    );
}
