const { useEffect, useState } = React;

export function StageChain({ stages, selectedStage, onSelectStage }) {

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
                        onClick={() => onSelectStage(stage)} // Handle click event
                    >
                        {renderCircleContent(index)}
                    </button>
                    {index < stages.length - 1 && <div className="line"></div>} {/* Add line except after the last circle */}
                </React.Fragment>
            ))}

            <div className="button-container">
                <button className="circle-button">
                    <img src="assets/img/add.png" alt="Icon 1" />
                </button>
                <button className="circle-button">
                    <img src="assets/img/garbage.png" alt="Icon 2" />
                </button>
            </div>
        </div>
    );
}
