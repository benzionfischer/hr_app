const { Link } = ReactRouterDOM
import { JobPreview } from "./JobPreview.jsx";


export function JobList({ jobs, onRemoveCar }) {

    return (
        <div className="job-list">
            {jobs.map(job =>
                <JobPreview job={job} />
            )}
        </div>
    )

}


