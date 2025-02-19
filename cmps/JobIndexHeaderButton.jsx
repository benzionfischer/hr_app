export function JobIndexHeaderButton({ icon }) {

    function handleClick() {
        console.log(1);
    }

    return (
        <button className="job-index-header-btn-wrapper" onClick={handleClick}>
            <img className="job-index-header-btn-icon" src={icon} alt="Icon" />
        </button>
    );
}
