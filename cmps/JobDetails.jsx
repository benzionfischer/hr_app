
import { stageService } from "../services/stage.service.js";
import { reviewerService } from "../services/reviewer.service.js";
import { UserProfile } from "./UserProfile.jsx";
import { StageChain } from "./StageChain.jsx";
import { JobDetailsView } from "./JobDetailsView.jsx";
import { JobEdit } from "../pages/JobEdit.jsx";


const { useEffect, useState } = React;

// mode: ["view", "edit"]
export function JobDetails({ job, modeEx}) {

    const [mode, setMode] = useState(modeEx)
    const [editedJob, setEditedJob] = useState({ ...job });

    function handleSave(event) {
        event.preventDefault();
        onSave(editedJob);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setEditedJob(prev => ({ ...prev, [name]: value }));
    }

    function toggleMode() {
        if (mode === "view") setMode("edit")
        else if (mode === "edit") setMode("view")
    }

    return (
        <section className="job-details"> 
             <button  onClick={toggleMode}>{/* className="job-details-edit-button" */}
                <img src="/assets/img/edit.png" alt="Edit" />
            </button>

            {mode === "view" && <JobDetailsView job={job} />}
            {mode === "edit" && <JobEdit job={job} handleSave={handleSave} handleChange={handleChange}/>}    
        </section>);
}

