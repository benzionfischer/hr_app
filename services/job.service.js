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
        // .then(_setNextPrevCarId)
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
            _createJob( ),
            _createJob(),
            _createJob(),
            _createJob()
        ]
        saveToStorage(JOB_KEY, jobs)
    }
}

function _createJob() {
    const titles = ["Product Manager", "Software Engineer", "Data Scientist", "UX Designer"];
    const fields = ["Cyber Security", "Healthcare", "Finance", "E-commerce"];
    const skillsList = [
        ["Python (High)", "C# (High)", "AI (High)", "Salesforce (Mid)"],
        ["JavaScript (High)", "React (High)", "Node.js (Mid)", "MongoDB (Mid)"],
        ["Python (High)", "Machine Learning (High)", "TensorFlow (Mid)", "SQL (Mid)"],
        ["Figma (High)", "Adobe XD (High)", "CSS (Mid)", "HTML (Mid)"]
    ];
    const workTypes = ["Hybrid 3/5", "Remote", "On-Site"];
    const locations = ["Israel, Center", "USA, California", "Germany, Berlin", "UK, London"];
    const languagesList = [
        { Hebrew: "Native", English: "High", Russian: "Mid", Italian: "Low" },
        { English: "Native", Spanish: "High", French: "Mid", German: "Low" },
        { German: "Native", English: "High", Dutch: "Mid", Swedish: "Low" },
        { French: "Native", English: "High", Italian: "Mid", Spanish: "Low" }
    ];
    const jobTypes = ["Full-Time Job", "Part-Time Job", "Contract"];
    const degrees = ["Bachelor's Degree - University", "Master's Degree - University", "PhD - University"];
    const salaryRanges = [
        { min: 14000, max: 22000 },
        { min: 8000, max: 15000 },
        { min: 20000, max: 30000 },
        { min: 10000, max: 18000 }
    ];
    const descriptions = [
        "A stable startup is looking for a skilled and creative professional to manage development projects.",
        "An innovative company is seeking an experienced engineer to work on cutting-edge solutions.",
        "We are hiring a data scientist to develop advanced machine learning models for our growing business.",
        "Looking for a UX designer to create intuitive and user-friendly digital experiences."
    ];
    
    const randomIndex = (arr) => arr[Math.floor(Math.random() * arr.length)];
    
    return {
        id: makeId(),
        title: randomIndex(titles),
        field: randomIndex(fields),
        experience: Math.floor(Math.random() * 10) + 1,
        skills: randomIndex(skillsList),
        workType: randomIndex(workTypes),
        location: randomIndex(locations),
        languages: randomIndex(languagesList),
        jobType: randomIndex(jobTypes),
        degree: randomIndex(degrees),
        relocation: Math.random() > 0.5,
        salaryRange: randomIndex(salaryRanges),
        description: randomIndex(descriptions),
        companyId: 1 //Hard coded companyId For MVP
    };
}
