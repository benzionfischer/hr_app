import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const REVIEWER_KEY = 'reviewerDB'

export const reviewerService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getFilterFromSrcParams
}

function query(filterBy = {}) {
    return storageService.query(REVIEWER_KEY)
        .then(reviewers => {
            if (filterBy.companyId) {
                reviewers = reviewers.filter(reviewer => reviewer.companyId == filterBy.companyId)
            }
            return reviewers
        })
}

function get(reviewerId) {
    return storageService.get(REVIEWER_KEY, reviewerId)
        // .then(_setNextPrevCarId)
}

function remove(reviewerId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(REVIEWER_KEY, reviewerId)
}

function save(reviewer) {
    if (reviewer.id) {
        return storageService.put(REVIEWER_KEY, reviewer)
    } else {
        return storageService.post(REVIEWER_KEY, reviewer)
    }
}

// function getEmptyJob(title = '', description = ' ') {
//     return { title, description }
// }

function getDefaultFilter() {
    return { companyId: 1 }
}


function getFilterFromSrcParams(srcParams) {
    const jobId = srcParams.get('jobId') || ''
    return {
        jobId
    }
}