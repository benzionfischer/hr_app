const { Link } = ReactRouterDOM;
import { JobListItem } from "./JobListItem.jsx";

export function JobList({ jobs }) {
    return (
        <div className="job-list">
            {jobs.map(job => (
                <div key={job.id} className="job-item">
                    <Link to={`/job/${job.id}/details`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <JobListItem job={job} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
