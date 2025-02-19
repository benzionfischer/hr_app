const { Link } = ReactRouterDOM;
import { JobPreview } from "./JobPreview.jsx";

export function JobList({ jobs }) {
    return (
        <div className="job-list">
            {jobs.map(job => (
                <div key={job.id} className="job-item">
                    <Link to={`/job/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <JobPreview job={job} />
                    </Link>
                    <button>
                        <Link to={`/job/${job.id}`}>Details</Link>
                    </button>
                </div>
            ))}
        </div>
    );
}
