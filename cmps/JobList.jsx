const { Link } = ReactRouterDOM;
import { JobPreview } from "./JobPreview.jsx";

export function JobList({ jobs }) {
    return (
        <div className="job-list">
            {jobs.map(job => (
                <div key={job.id} className="job-item">
                    <Link to={`/job/${job.id}/details`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <JobPreview job={job} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
