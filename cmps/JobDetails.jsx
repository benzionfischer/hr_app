
import { JobDetailsView } from "./JobDetailsView.jsx";
import { JobDetailsEdit } from "../pages/JobDetailsEdit.jsx";
import { jobService } from "../services/job.service.js";

const { Link, useNavigate } = ReactRouterDOM;
const { useEffect, useState } = React;

// mode: ["view", "edit"]
export function JobDetails({ job, modeEx}) {

    const [mode, setMode] = useState(modeEx)
    const [editedJob, setEditedJob] = useState({ ...job });
    const navigate = useNavigate()

    function handleSave(event) {
        event.preventDefault();
        jobService.save(editedJob)
            .then(persistedJob => {
                setEditedJob(persistedJob)
                setMode("view")
                navigate(`/job/${job.id}/details`)
            })
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

            {mode === "view" && <JobDetailsView job={editedJob} />}
            {mode === "edit" && <JobDetailsEdit job={editedJob} handleSave={handleSave} handleChange={handleChange}/>}    
        </section>);
}

