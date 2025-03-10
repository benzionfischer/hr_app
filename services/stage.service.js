import { loadFromStorage, makeId, saveToStorage } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STAGE_KEY = 'stageDB'

export const stageService = {
    query,
    get,
    remove,
    save,
    getDefaultFilter,
    getFilterFromSrcParams,
    getEmptyStage
}

function query(filterBy = {}) {


    return storageService.query(STAGE_KEY)
        .then(stages => {
            if (filterBy.jobId) {
                stages = stages.filter(stage => stage.jobId == filterBy.jobId)
            }
            return stages
        })
}

function getEmptyStage(jobId) {
    return {                
            id: makeId(),
            jobId: jobId,
            name: "",
            type: "",
            description: "",
            index: -1,
            reviewers: []
        }
}

function get(stageId) {
    return storageService.get(STAGE_KEY, stageId)
        // .then(_setNextPrevCarId)
}

function remove(stageId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(STAGE_KEY, stageId)
}

function save(stage) {
    if (stage.id) {
        return storageService.put(STAGE_KEY, stage)
    } else {
        return storageService.post(STAGE_KEY, stage)
    }
}

// function getEmptyJob(title = '', description = ' ') {
//     return { title, description }
// }

function getDefaultFilter() {
    return { jobId: 1 }
}


function getFilterFromSrcParams(srcParams) {
    const jobId = srcParams.get('jobId') || ''
    return {
        jobId
    }
}