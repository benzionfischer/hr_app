import { JobFilter } from "../cmps/JobFilter.jsx"
import { JobList } from "../cmps/JobList.jsx"
import { JobIndexHeaderButton } from "../cmps/JobIndexHeaderButton.jsx"

import { jobService } from "../services/job.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { getTruthyValues } from "../services/util.service.js"
const { Link, useSearchParams } = ReactRouterDOM

const { useEffect, useState } = React


export function JobIndexHeader({ filterBy, onSetFilter }) {
    // if (!cars) return <div>Loading...</div>

    return (
        <section className="job-index-header">
            <JobFilter defaultFilter={filterBy} onSetFilter={onSetFilter} />
            <section className="job-index-header-tabs">
                <JobIndexHeaderButton icon="assets/img/add.png"/>
                <JobIndexHeaderButton icon="assets/img/freeze.png"/>
                <JobIndexHeaderButton icon="assets/img/garbage.png"/>
            </section>
        </section>
    )

}