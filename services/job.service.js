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
    return {
        title: "",
        field: "",
        experience: 0, // Null for numeric values
        skills: [],
        workType: "",
        location: "",
        languages: [],
        jobType: "",
        degree: "",
        daysInOfficeRange: {min: 0, max:0},
        relocation: false, // Default to false
        salaryRange: {min: 0, max:0},
        description: "",
        companyId: 1 // Null to indicate no company assigned
    }
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
        ["Python (High), C# (High), AI (High), Salesforce (Mid)"],
        ["JavaScript (High), React (High), Node.js (Mid), MongoDB (Mid)"],
        ["Python (High), Machine Learning (High), TensorFlow (Mid), SQL (Mid)"],
        ["Figma (High), Adobe XD (High), CSS (Mid), HTML (Mid)"]
    ];
    const workTypes = ["Hybrid 3/5", "Remote", "On-Site"];
    const locations = ["Israel, Center", "USA, California", "Germany, Berlin", "UK, London"];
    const languagesList = [
        ["Hebrew (Native), English (High), Russian (Mid), Italian (Low)"],
        ["English (Native), Spanish (High), French (Mid), German (Low)"],
        ["German (Native), English (High), Dutch (Mid), Swedish (Low)"],
        ["French (Native), English (High), Italian (Mid), Spanish (Low)"]
    ];
    
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

    const daysInOfficeRange = [
        { min: 1, max: 3 },
        { min: 2, max: 5 },
        { min: 3, max: 4 },
        { min: 5, max: 5 }
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
        degree: randomIndex(degrees),
        relocation: Math.random() > 0.5,
        salaryRange: randomIndex(salaryRanges),
        description: randomIndex(descriptions),
        daysInOfficeRange: randomIndex(daysInOfficeRange),
        companyId: 1 //Hard coded companyId For MVP
    };
}

const REVIEWER_KEY = "reviewerDB";

function _createReviewers() {
    
    const reviewers = [
        {  
            id: makeId(),
            name: "Ben Fisher",
            role: "CTO",
            icon: "assets/img/male-profile-1.png"
        },
        {  
            id: makeId(),
            name: "Itzik Nehemia",
            role: "CEO",
            icon: "assets/img/male-profile-2.png"
        },
        {  
            id: makeId(),
            name: "Inbal Shelef",
            role: "Human Resource",
            icon: "assets/img/female-profile-3.png"
        }
    ]

    saveToStorage(REVIEWER_KEY, reviewers);
    return reviewers
}

const reviewers = _createReviewers()


const STAGE_KEY = "stageDB";

function _createStages() {
    console.log("Create stages has been run .. ");

    const stageNames = ["Application Review", "Phone Screen", "Technical Interview", "HR Interview", "Offer", "Onboarding"];    

    let jobs = loadFromStorage(JOB_KEY);
    let stages = jobs.map(job => {
        const numStages = Math.floor(Math.random() * 4) + 1; // Generate between 1 and 5 stages

        const firstStage = {
            id: makeId(),
            jobId: job.id,
            name: "Phone call",
            type: "CALL",
            description: "The first SE interview assesses technical skills, problem-solving, and cultural fit, often with coding challenges and past project discussions.",
            prev: null, // First stage has no previous stage
            reviewers: getRandomReviewers(reviewers) // Assign 2 random reviewers
        };

        const stages = [firstStage];

        let prevStageId = firstStage.id; // Track previous stage ID

        for (let i = 0; i < numStages; i++) {
            const newStage = {
                id: makeId(),
                jobId: job.id,
                name: stageNames[i % stageNames.length], // Cycle through predefined names
                type: "OTHER",
                description: getRandomInterviewDescription(),
                prev: prevStageId, // Link to the previous stage
                next: null,
                reviewers: getRandomReviewers(reviewers) // Assign 2 random reviewers
            };

            stages[stages.length - 1].next = newStage.id; // Set next for the previous stage
            
            stages.push(newStage);
            prevStageId = newStage.id;
        }

        const lastStage = {
            id: makeId(),
            jobId: job.id,
            name: "Contract",
            type: "CONTRACT",
            description: "The contract interview reviews terms, expectations, and final hiring details before an offer is signed.",
            prev: prevStageId, // Previous stage links to this last stage
            next: null, // Last stage has no next stage
            reviewers: getRandomReviewers(reviewers) // Assign 2 random reviewers
        };

        stages[stages.length - 1].next = lastStage.id; // Set next for the previous stage
        stages.push(lastStage);

        return stages;
    }).flat();

    saveToStorage(STAGE_KEY, stages);
}

// Helper function to get two random reviewers
function getRandomReviewers(reviewersPool) {
    const shuffled = [...reviewersPool].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, 2); // Take first two
}

function getRandomInterviewDescription() {
    const interviewStages = [
        "Resume Screening: Evaluate candidate's resume for qualifications.",
        "Phone Interview: Assess basic communication and technical fit.",
        "Technical Interview: Test coding skills, algorithms, and problem-solving.",
        "System Design Interview: Evaluate architecture and scalability approaches.",
        "Behavioral Interview: Gauge cultural fit and interpersonal skills.",
        "HR Interview: Discuss benefits, salary expectations, and company policies.",
        "Onsite Interview: Conduct multiple rounds for deeper technical and team fit evaluation.",
        "Pair Programming Session: Collaborate on a live coding challenge.",
        "Take-Home Assignment Review: Assess practical coding abilities from submitted work.",
        "Final Interview: Senior leadership discussion to finalize hiring decisions."
    ];
    
    return interviewStages[Math.floor(Math.random() * interviewStages.length)];
}


// verify that it run only if no stages in the storage
// _createStages()
