
export function JobListItem({ job }) {

    return (
        <article className="job-preview">
            <h1>{job.title}</h1>
            <div>{job.description}</div>
        </article>
    )
}