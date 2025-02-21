const { useEffect, useState } = React

export function StageChain({ stages }) {
    const [circles, setCircles] = useState(5); // Change dynamically

    return (
        <div className="circle-chain">
            {Array.from({ length: circles }).map((_, index) => (
                <React.Fragment key={index}>
                    {index === 0 && (
                        <div className="circle">
                            <img src="assets/img/phone.png" alt="Circle Image" />
                        </div>
                    )}   
                    {index === circles-1  && (
                        <div className="circle">
                            <img src="assets/img/handshake.png" alt="Circle Image" />
                        </div>
                    )}
                    {console.log(index)}
                    {index != 0 && index != circles-1 && <div className="circle">{index}</div>}
                    {index < circles - 1 && <div className="line"></div>} {/* Add line except after the last circle */}
                </React.Fragment>
            ))}
        </div>
    );
}


