const { Link } = ReactRouterDOM
import { JobPreview } from "./JobPreview.jsx";


export function JobList({ jobs, onRemoveCar }) {

    return (
        <ul className="car-list">
            {jobs.map(job =>
                <li key={job.id}>
                    <JobPreview job={job} />
                    <section>
                        {/* <button onClick={() => onRemoveJob(job.id)}>Remove</button> */}
                        {/* <button ><Link to={`/car/${car.id}`}>Details</Link></button>
                        <button ><Link to={`/car/edit/${car.id}`}>Edit</Link></button> */}
                    </section>
                </li>
            )}
        </ul>
    )

}


