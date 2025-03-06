
import { JobDetailsView } from "./JobDetailsView.jsx";
import { JobDetailsEdit } from "../pages/JobDetailsEdit.jsx";
import { jobService } from "../services/job.service.js";
import { stageService } from "../services/stage.service.js";


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

                let stage1 = {
                    // id: makeId(),
                    index: 0,
                    jobId: persistedJob.id,
                    name: "Phone call",
                    type: "CALL",
                    description: "The first SE interview assesses technical skills, problem-solving, and cultural fit, often with coding challenges and past project discussions.",
                    reviewers: [] // Assign 2 random reviewers
                };

                let stage2 = {
                    // id: makeId(),
                    index: 1, // Increment index for last stage
                    jobId: persistedJob.id,
                    name: "Contract",
                    type: "CONTRACT",
                    description: "The contract interview reviews terms, expectations, and final hiring details before an offer is signed.",
                    reviewers: [] // Assign 2 random reviewers
                };

                stageService.save(stage1).then(p =>                 stageService.save(stage2))
            

                setEditedJob(persistedJob)
                setMode("view")
                navigate(`/job/${persistedJob.id}/details`)
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
            <button className="job-details-btn" onClick={toggleMode}>
                {/* Change image based on mode */}
                <img src={`assets/img/${mode === "view" ? "edit.png" : "view.png"}`} alt={mode === "view" ? "Edit" : "View"} />
                <br/>
                {mode === "view" ? "Edit" : "View"}
            </button>

            {mode === "view" && <JobDetailsView job={editedJob} />}
            {mode === "edit" && <JobDetailsEdit job={editedJob} handleSave={handleSave} handleChange={handleChange}/>}    
        </section>);
}

