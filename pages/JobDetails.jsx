import { jobService } from "../services/job.service.js"
import { JobDetailsHeader } from "../cmps/JobDetailsHeader.jsx"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM


export function JobDetails() {
    const [job, setJob] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // console.log(job.id)
        loadJob()
    }, [params.jobId])

    function loadJob() {
        jobService.get(params.jobId)
            .then(setJob)
            .catch(err => {
                console.log('Problem getting job', err);
            })
    }

    function onBack() {
        navigate('/job')
        // navigate(-1)
    }

    // console.log('car:', car)

    if (!job) return <div>Details Loading...</div>
    return (
        <section className="job-details">
            <JobDetailsHeader />
            <section className="job-details-content">
                <h2 className="job-details-title">{job.title}</h2>
                <p className="job-details-not-title">{job.experience} Years experience</p>
                <p className="job-details-not-title">{job.skills}</p>
                <p className="job-details-not-title">{job.workType}</p>
                <p className="job-details-not-title">{job.location}</p>
                {/* <h1>{job.languages}</h1> */}
                <p className="job-details-not-title">{job.jobType}</p>
                <p className="job-details-not-title">{job.degree}</p>
                <p className="job-details-not-title">{job.relocation}</p>
                {/* <h1>{job.salaryRange}</h1> */}
                <p>{job.description}</p>
            </section>
        </section>
    )
}