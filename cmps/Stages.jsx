import { stageService } from "../services/stage.service.js"
import { reviewerService } from "../services/reviewer.service.js"
import { UserProfile } from "./UserProfile.jsx"
import { StageChain } from "./StageChain.jsx"
import { StageDetails } from "./StageDetails.jsx"


const { useEffect, useState } = React

export function Stages({ job }) {

    const [stages, setStages] = useState([])
    const [reviewers, setReviewers] = useState([])

    useEffect(() => {
        loadStages()
        loadReviewers()
    }, [])

    function loadStages() {
        stageService.query({ jobId: job.id})
            .then(setStages)
            .catch(err => {
                console.log('Problems getting stages:', err)
            })
    }

    function loadReviewers() {
        reviewerService.query()
            .then(setReviewers)
            .catch(err => {
                console.log('Problems getting reviewers:', err)
            })
    }


    return (
        <article className="stages">
            <div className="stages-reviewers">   
                {reviewers.map((reviewer, index) => (
                    <UserProfile name={reviewer.name} role={reviewer.role} icon={reviewer.icon}/>
                ))}
            </div>
            <div className="stages-content">
                <div className="stages-lst">
                    <StageChain stages={stages}/>
                </div>
                <StageDetails stage={stages[0]}/>
            </div>
        </article>
    )
}
