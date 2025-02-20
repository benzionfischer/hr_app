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

                <div className="job-detail-description">
                    <img src="/assets/img/suitcase.png" alt="title" />
                    <h1>{job.title}</h1>
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/calendar.png" alt="Experience" />
                    {job.experience} Years experience
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/light.png" alt="Skills" />
                    {job.skills}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/calendar.png" alt="Work Type" />
                    {job.workType}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/location.png" alt="Location" />
                    {job.location}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/clock.png" alt="Job Type" />
                    {job.jobType}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/education.png" alt="Degree" />
                    {job.degree}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/calendar.png" alt="Relocation" />
                    Relocation: {job.relocation ? "Yes" : "No"}
                </div>

                <div className="job-detail-item">
                    <img src="/assets/img/money.png" alt="Relocation" />
                    Salary Range: {job.salaryRange.min} - {job.salaryRange.max}
                </div>

                <div className="job-detail-description">
                    <img src="/assets/img/information.png" alt="Description" />
                    {job.description}
                </div>
            </section>

        </section>
    )
}