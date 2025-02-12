import { ColorInput } from "./dynamic-inputs/ColorInput.jsx";
import { FontsizeInput } from "./dynamic-inputs/FontsizeInput.jsx";

const { useState } = React

export function AppFooter() {

    const [cmpType, setCmpType] = useState('fontSize')

    const [footerStyle, setFooterStyle] = useState({
        backgroundColor: '#101010',
        fontSize: '18px',
    })

    function onSetFooterStyle(newStyle) { // {backgroundColor:'red'}
        setFooterStyle(prevStyle => ({ ...prevStyle, ...newStyle }))
    }

    return (
        <footer style={footerStyle} className="app-footer full main-layout">
            <section >
                <DynamicInput {...footerStyle} onSetFooterStyle={onSetFooterStyle} name="Babi" cmpType={cmpType} />
                <select value={cmpType} onChange={(ev) => setCmpType(ev.target.value)}>
                    <option value="color">Color</option>
                    <option value="fontSize">Font size</option>
                </select>
            </section>
        </footer>
    )
}


function DynamicInput({ cmpType, ...restOfProps }) {
    const dynCmpsMap = {
        color: <ColorInput {...restOfProps} />,
        fontSize: <FontsizeInput {...restOfProps} />
    }

    return dynCmpsMap[cmpType]
    ////////////////////////////////////////////////////
    // switch (props.cmpType) {
    //     case 'color':
    //         return <ColorInput />
    //     case 'fontSize':
    //         return <FontsizeInput />
    // }
}
