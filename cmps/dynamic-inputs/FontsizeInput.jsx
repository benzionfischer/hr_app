export function FontsizeInput({ name = 'Popo', onSetFooterStyle, fontSize }) {


    function onSetFontSize({ target }) {
        const newStyle = {
            fontSize: target.value + 'px'
        }
        onSetFooterStyle(newStyle)
    }

    return (
        <section className="fontsize-input">
            <div className="items-container">
                <label htmlFor="">{fontSize}</label>
                <input
                    type="range"
                    min={14}
                    max={34}
                    value={parseInt(fontSize)}
                    onChange={onSetFontSize}
                />
            </div>
            <h3>Hello {name}! pick a font size!</h3>
        </section>
    )

}