const { Link, useNavigate } = ReactRouterDOM;
import { JobInfoTab } from "./JobInfoTab.jsx";

export function JobInfoHeader({ job }) {
    const navigate = useNavigate(); // Hook for navigation

    function onBack() {
        navigate('/job'); // Change this to your specific path
    }

    return (
        <div className="job-details-header">
            <button className="back-button" onClick={onBack}>🔙 Back</button> {/* Back Button */}
            
            <section className="job-details-header-tabs">
                <Link to={`/job/${job.id}/details`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <JobInfoTab title="Details" job={job} />
                </Link> 
                <Link to={`/job/${job.id}/stages`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <JobInfoTab title="Stages" job={job} />
                </Link> 
                <Link to={`/job/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <JobInfoTab title="Launch" job={job} />
                </Link> 
            </section>
            <section> 
                <button className="job-details-header-freeze-btn" onClick={onBack}>Freeze</button> {/* Back Button */}
                <button className="job-details-header-delete-btn" onClick={onBack}>Delete</button> {/* Back Button */}
            </section>
        </div>
    );
}
