export function JobIndexHeaderButton({ icon, handleClick }) {
    return (
        <button className="job-index-header-btn-wrapper" onClick={handleClick}>
            <img className="job-index-header-btn-icon" src={icon} alt="Icon" />
        </button>
    );
}
