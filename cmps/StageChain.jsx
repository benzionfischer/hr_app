const { useEffect, useState } = React;

export function StageChain({ stages }) {

    const renderCircleContent = (index) => {
        if (index === 0) {
            return <img src="assets/img/phone.png" alt="Phone Image" />;
        }
        if (index === stages.length - 1) {
            return <img src="assets/img/handshake.png" alt="Handshake Image" />;
        }
        return index;
    };

    return (
        <div className="circle-chain">
            {stages.map((_, index) => (
                <React.Fragment key={index}>
                    <div className="circle">
                        {renderCircleContent(index)}
                    </div>
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
