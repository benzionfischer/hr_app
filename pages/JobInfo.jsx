import { jobService } from "../services/job.service.js"
import { JobDetailsHeader } from "../cmps/JobDetailsHeader.jsx"
import { Stages } from "../cmps/Stages.jsx"
import { JobDetails } from "../cmps/JobDetails.jsx"



const { useEffect, useState } = React
const { useParams, useNavigate, useLocation, Link } = ReactRouterDOM


export function JobInfo() {
    const [job, setJob] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    const location =  useLocation()

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

    const tab = location.pathname.split("/").pop()

    if (!job) return <div>Details Loading...</div>

    return (
        <section className="job-info">
            <JobDetailsHeader job={job} />
            { tab === "details" && <JobDetails job={job} modeEx="view"/>}
            { tab === "stages" && <Stages job={job}/> }   
        </section>
    )
}