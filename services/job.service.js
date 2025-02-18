import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const JOB_KEY = 'jobDB'
_createJobs()

export const jobService = {
    query,
    get,
    remove,
    save,
    getEmptyJob,
    getDefaultFilter,
    getFilterFromSrcParams
}

function query(filterBy = {}) {
    return storageService.query(JOB_KEY)
        .then(jobs => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                jobs = jobs.filter(job => regExp.test(job.title))
            }
            return jobs
        })
}

function get(jobId) {
    return storageService.get(JOB_KEY, jobId)
        .then(_setNextPrevCarId)
}

function remove(jobId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(JOB_KEY, jobId)
}

function save(job) {
    if (job.id) {
        return storageService.put(JOB_KEY, job)
    } else {
        return storageService.post(JOB_KEY, job)
    }
}

function getEmptyJob(title = '', description = ' ') {
    return { title, description }
}

function getDefaultFilter() {
    return { txt: '' }
}


function getFilterFromSrcParams(srcParams) {
    const txt = srcParams.get('txt') || ''
    return {
        txt
    }
}

function _createJobs() {
    let jobs = loadFromStorage(JOB_KEY)
    if (!jobs || !jobs.length) {
        jobs = [
            _createJob('Software Engineer', "Full-Stack developer" ),
            _createJob('Product Manager', "Security & Cyber"),
            _createJob('Data Analyst', "Full-Stack developer"),
            _createJob('Software Engineer', "C# and JavaScript")
        ]
        saveToStorage(JOB_KEY, jobs)
    }
}

function _createJob(title, description) {
    const job = getEmptyJob(title, description)
    job.id = makeId()
    return job
}