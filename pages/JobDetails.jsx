import { jobService } from "../services/job.service.js"

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
            <h1>{job.title}</h1>
            <h1>{job.experience} Years experience</h1>
            <h1>{job.skills}</h1>
            <h1>{job.workType}</h1>
            <h1>{job.location}</h1>
            {/* <h1>{job.languages}</h1> */}
            <h1>{job.jobType}</h1>
            <h1>{job.degree}</h1>
            <h1>{job.relocation}</h1>
            {/* <h1>{job.salaryRange}</h1> */}
            <h1>{job.description}</h1>
        </section>
    )
}