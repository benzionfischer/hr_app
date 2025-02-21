import { JobFilter } from "../cmps/JobFilter.jsx"
import { JobList } from "../cmps/JobList.jsx"
import { JobIndexHeaderButton } from "../cmps/JobIndexHeaderButton.jsx"
import { JobIndexHeader } from "../cmps/JobIndexHeader.jsx"


import { jobService } from "../services/job.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { getTruthyValues } from "../services/util.service.js"
const { Link, useSearchParams } = ReactRouterDOM

const { useEffect, useState } = React


export function JobIndex() {

    const [jobs, setJobs] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterBy, setFilterBy] = useState(jobService.getFilterFromSrcParams(searchParams))

    useEffect(() => {
        setSearchParams(getTruthyValues(filterBy))
        loadJobs()
    }, [filterBy])

    function loadJobs() {
        jobService.query(filterBy)
            .then(setJobs)
            .catch(err => {
                console.log('Problems getting jobs:', err)
            })
    }

    function onRemoveJob(jobId) {
        jobService.remove(jobId)
            .then(() => {
                setJobs(job => jobs.filter(job => job.id !== jobId))
                showSuccessMsg(`Job (${jobId}) removed!`)
            })
            .catch(err => {
                console.log('Problems removing job:', err)
                showErrorMsg('Problems removing job')
            })
    }

    function onSetFilter(filterBy) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }

    // if (!cars) return <div>Loading...</div>
    return (
        <section className="job-index">
            <JobIndexHeader filterBy={filterBy} onSetFilter={onSetFilter}/>
            {jobs
                ? <JobList
                    jobs={jobs}
                    onRemoveCar={onRemoveJob}
                />
                : <div className="loader">Loading...</div>
            }
        </section>
    )

}