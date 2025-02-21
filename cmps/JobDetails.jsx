
import { stageService } from "../services/stage.service.js";
import { reviewerService } from "../services/reviewer.service.js";
import { UserProfile } from "./UserProfile.jsx";
import { StageChain } from "./StageChain.jsx";
import { JobDetailsView } from "./JobDetailsView.jsx";

const { useEffect, useState } = React;

// mode: ["view", "edit"]
export function JobDetails({ job, modeEx}) {

    const [mode, setMode] = useState(modeEx)

    function handleSave(event) {
        event.preventDefault();
        onSave(editedJob);
    }

    const [editedJob, setEditedJob] = useState({ ...job });

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
            {mode === "edit" &&
                <form className="job-edit-form" onSubmit={handleSave}>
                    <label>Title: <input type="text" name="title" value={editedJob.title} onChange={handleChange} /></label>
                    <label>Experience: <input type="number" name="experience" value={editedJob.experience} onChange={handleChange} /></label>
                    <label>Skills: <input type="text" name="skills" value={editedJob.skills} onChange={handleChange} /></label>
                    <label>Work Type: <input type="text" name="workType" value={editedJob.workType} onChange={handleChange} /></label>
                    <label>Location: <input type="text" name="location" value={editedJob.location} onChange={handleChange} /></label>
                    <label>Job Type: <input type="text" name="jobType" value={editedJob.jobType} onChange={handleChange} /></label>
                    <label>Degree: <input type="text" name="degree" value={editedJob.degree} onChange={handleChange} /></label>
                    <label>Relocation: <select name="relocation" value={editedJob.relocation} onChange={handleChange}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select></label>
                    <label>Salary Range:
                        <input type="number" name="salaryRange.min" value={editedJob.salaryRange.min} onChange={handleChange} /> -
                        <input type="number" name="salaryRange.max" value={editedJob.salaryRange.max} onChange={handleChange} />
                    </label>
                    <label>Description: <textarea name="description" value={editedJob.description} onChange={handleChange} /></label>
                    <button type="submit">Save</button>
                </form>}    
        </section>);
}

