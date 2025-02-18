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

function getEmptyJob(title = '') {
    return { title }
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


// function _setNextPrevCarId(car) {
//     return query().then((cars) => {
//         const carIdx = cars.findIndex((currCar) => currCar.id === car.id)
//         const nextCar = cars[carIdx + 1] ? cars[carIdx + 1] : cars[0]
//         const prevCar = cars[carIdx - 1] ? cars[carIdx - 1] : cars[cars.length - 1]
//         car.nextCarId = nextCar.id
//         car.prevCarId = prevCar.id
//         return car
//     })
// }

function _createJobs() {
    let jobs = loadFromStorage(JOB_KEY)
    if (!jobs || !jobs.length) {
        jobs = [
            _createJob('Python Developer'),
            _createJob('Product Manager'),
            _createJob('CEO'),
            _createJob('CTO')
        ]
        saveToStorage(JOB_KEY, jobs)
    }
}

function _createJob(title) {
    const job = getEmptyJob(title)
    job.id = makeId()
    return job
}