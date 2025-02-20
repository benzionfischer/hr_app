import { stageService } from "../services/stage.service.js"
const { useEffect, useState } = React

export function Stages({ job }) {

    const [stages, setStages] = useState([])

    useEffect(() => {
        console.log("1")
        loadStages()
    }, [])

    function loadStages() {
        console.log("2")
        stageService.query({ jobId: job.id})
            .then(setStages)
            .catch(err => {
                console.log('Problems getting stages:', err)
            })
    }

    console.log("stages: " + stages)
    return (
        <article className="stages">
            <div className="stages-reviewers">reviewers</div>
            <div className="stages-lst">
                {stages.map((stage, index) => (
                    <div key={index}>{index+1}. {stage.name}</div> // Display stage name
                ))}
            </div>
        </article>
    )
}
