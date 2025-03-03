export function JobDetailsEdit({ job, handleSave, handleChange }) {
    return (
        <form className="job-details-view" onSubmit={handleSave}>

            <div className="job-detail-description">
                <img src="/assets/img/suitcase.png" alt="title" />
                <label><input type="text" name="title" value={job.title} onChange={handleChange} placeholder="Job Title..." className="job-detail-item-input" /></label> 
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/calendar.png" alt="Experience" />
                <label>Experience: <input type="number" name="experience" value={job.experience} onChange={handleChange}  className="job-detail-item-input"/></label>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/light.png" alt="Skills" />
                <label><input type="text" name="skills" value={job.skills} onChange={handleChange} placeholder="Knowledge..." className="job-detail-item-input" /></label>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/calendar.png" alt="Work Type" />
                <label>Days at office:
                    <input type="number" name="officeDays.min" value={job.daysInOfficeRange.min} onChange={handleChange} className="job-detail-item-input"/> -
                    <input type="number" name="officeDays.max" value={job.daysInOfficeRange.max} onChange={handleChange} className="job-detail-item-input"/>
                </label>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/location.png" alt="Location" />
                <label>Location: <input type="text" name="location" value={job.location} onChange={handleChange} className="job-detail-item-input"/></label>
            </div>

            {/* <div className="job-detail-item">
                <img src="/assets/img/clock.png" alt="Job Type" />
                <label>Job Type: <input type="text" name="jobType" value={job.jobType} onChange={handleChange} className="job-detail-item-input"/></label>
            </div> */}

            <div className="job-detail-item">
                <img src="/assets/img/education.png" alt="Degree" />
                <label><input type="text" name="degree" value={job.degree} onChange={handleChange}  placeholder="Education..." className="job-detail-item-input"/></label>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/globe.png" alt="Relocation" className="job-detail-item-input"/>
                <label>Relocation: 
                    <select name="relocation" value={job.relocation} onChange={handleChange} className="job-detail-item-input">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                    </select>
                </label> 
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/money.png" alt="Salary" />
                <label>Salary Range:
                    <input type="number" name="salaryRange.min" value={job.salaryRange.min} onChange={handleChange} className="job-detail-item-input-salary"/> -
                    <input type="number" name="salaryRange.max" value={job.salaryRange.max} onChange={handleChange} className="job-detail-item-input-salary"/>
                </label>
            </div>

            <div className="job-detail-description">
                <img src="/assets/img/information.png" alt="Description" />
                <label>Description: <textarea name="description" value={job.description} onChange={handleChange} className="job-detail-item-input"/></label>
            </div>

            <button type="submit">Save</button> 
        </form>
    )
}



