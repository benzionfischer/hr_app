import { stageService } from "../services/stage.service.js"
import { reviewerService } from "../services/reviewer.service.js"

const { useEffect, useState } = React

export function Stages({ job }) {

    const [stages, setStages] = useState([])
    const [reviewers, setReviewers] = useState([
        {  
            id: "abcd123",
            name: "Ben Fisher",
        },
        {  
            id: "tyu456",
            name: "Itzik Nehemia",
        }
    ])

    useEffect(() => {
        loadStages()
        // loadReviewers()
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
                    <div key={index}>{index+1}. {reviewer.name}</div> // Display stage name
                ))}</div>
            <div className="stages-lst">
                {stages.map((stage, index) => (
                    <div key={index}>{index+1}. {stage.name}</div> // Display stage name
                ))}
            </div>
        </article>
    )
}
