import { jobService } from "../services/job.service.js"
import { JobInfoHeader } from "../cmps/JobInfoHeader.jsx"
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
        if (!params.jobId) {
            setJob(jobService.getEmptyJob())
            return
        }

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

    // console.log('Job info page loaded')

    const tab = location.pathname.split("/").pop()

    if (!job) return <div>Details Loading...</div>

    // console.log("tab: " + tab)
    // console.log("job: " + JSON.stringify(job))

    return (
        <section className="job-info">
            <JobInfoHeader job={job} />
            { (tab === "details" || tab === "new") && <JobDetails job={job} modeEx={ tab === "details" ? "view": "edit"}/>}
            { tab === "stages" && <Stages job={job}/> }   
        </section>
    )
}