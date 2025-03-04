import { stageService } from "../services/stage.service.js"
import { reviewerService } from "../services/reviewer.service.js"
import { UserProfile } from "./UserProfile.jsx"
import { StageChain } from "./StageChain.jsx"
import { StageDetails } from "./StageDetails.jsx"

const { useEffect, useState } = React

export function Stages({ job }) {

    const [stages, setStages] = useState([])
    const [reviewers, setReviewers] = useState([])
    const [selectedStage, setSelectedStage] = useState(null) // New state for selected stage

    useEffect(() => {
        loadStages()
        loadReviewers()
    }, [])

    function loadStages() {
        stageService.query({ jobId: job.id })
            .then(fetchedStages => {
                setStages(fetchedStages)
                if (fetchedStages.length > 0) {
                    setSelectedStage(fetchedStages[0]) // Initialize selectedStage with the first stage
                }
            })
            .catch(err => {
                console.log('Problems getting stages:', err)
            })
    }

    function loadReviewers() {
        reviewerService.query()  // TODO: add filter by companyID
            .then(setReviewers)
            .catch(err => {
                console.log('Problems getting reviewers:', err)
            })
    }

    function onRemoveStage(stageId) {
        stageService.remove(stageId)
            .then(() => {
                setStages(prevStages => {
                    const updatedStages = prevStages.filter(stage => stage.id !== stageId)
                    if (selectedStage && selectedStage.id === stageId) {
                        setSelectedStage(updatedStages.length > 0 ? updatedStages[0] : null) // Select first available stage or null
                    }
                    return updatedStages
                })
            })
            .catch(err => {
                console.log('Error removing stage:', err)
            })
    }

    // Add stage to the state list (not actually to DB)
    function onAddStage() {
        console.log("onAddStage ..")

        reviewerService.query()
                .then(reviewers => {
                    const reviewer = reviewers[0]
                    const newStage = stageService.getEmptyStage()
                    newStage.reviewers = [reviewer]
            
                    const newStages = [
                        ...stages.slice(0, stages.length - 1), // Copy all elements except the last one
                        newStage,                           // Insert the new element
                        stages[stages.length - 1]             // Add the last element back
                    ];
            
                    setStages(newStages)
                    setSelectedStage(newStage)
                })
    }

    // Save the new stage in DB
    function onSaveStage() {

    }

    return (
        <article className="stages">
            <div className="stages-reviewers">   
                {reviewers.map((reviewer, index) => (
                    <UserProfile key={index} name={reviewer.name} role={reviewer.role} icon={reviewer.icon}/>
                ))}
            </div>
            <div className="stages-content">
                <div className="stages-lst">
                    <StageChain stages={stages}
                                selectedStage={selectedStage} 
                                onSelectStage={setSelectedStage} 
                                onRemoveStage={onRemoveStage}
                                onAddStage={onAddStage}
                                onSaveStage={onSaveStage}/> 
                </div>
                <StageDetails stage={selectedStage} />
            </div>
        </article>
    )
}
