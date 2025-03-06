const { useEffect, useState } = React;

export function StageChain({ stages, selectedStage, onSelectStage, onRemoveStage, onAddStage, onSaveStage, onEditStage }) {

    const renderCircleContent = (index) => {
        if (index === 0) {
            return <img src="assets/img/phone.png" alt="Phone Image" />;
        }
        if (index === stages.length - 1) {
            return <img src="assets/img/handshake.png" alt="Handshake Image" />;
        }
        return index;
    };

    if (!stages || !Array.isArray(stages) || stages.length === 0) {
        return <div>Loading stages...</div>;
    }

    if (!selectedStage || typeof selectedStage !== "object" || !selectedStage.id) {
        return <div>No selected stage</div>;
    }

    return (
        <div className="circle-chain">
            {stages.map((stage, index) => (
                <React.Fragment key={stage.id || index}>
                    <button 
                        className={stage.id === selectedStage.id ? "selected-circle" : "circle"}
                        onClick={() => onSelectStage(stage)} // Select stage on click
                    >
                        {renderCircleContent(index)}
                    </button>
                    {index < stages.length - 1 && <div className="line"></div>} {/* Line between circles */}
                </React.Fragment>
            ))}

            <div className="button-container">
                <button className="circle-button" onClick={onAddStage}>
                    <img src="assets/img/add.png" alt="Add Stage" />
                </button>
                <button className="circle-button" onClick={onEditStage}>
                    <img src="assets/img/edit.png" alt="Edit Stage" />
                </button>
                <button 
                    className="circle-button"
                    onClick={() => onRemoveStage(selectedStage.id)} // Remove the selected stage
                    disabled={!selectedStage} // Prevents errors if no stage is selected
                >
                    <img src="assets/img/garbage.png" alt="Remove Stage" />
                </button>
            </div>
        </div>
    );
}
