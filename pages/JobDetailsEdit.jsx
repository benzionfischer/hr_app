export function JobDetailsEdit({ job, handleSave, handleChange }) {
    return (
        <form className="job-edit" onSubmit={handleSave}>
            <label>Title: <input type="text" name="title" value={job.title} onChange={handleChange} /></label> <br/>
            <label>Experience: <input type="number" name="experience" value={job.experience} onChange={handleChange} /></label><br/>
            <label>Skills: <input type="text" name="skills" value={job.skills} onChange={handleChange} /></label><br/>
            <label>Work Type: <input type="text" name="workType" value={job.workType} onChange={handleChange} /></label><br/>
            <label>Location: <input type="text" name="location" value={job.location} onChange={handleChange} /></label><br/>
            <label>Job Type: <input type="text" name="jobType" value={job.jobType} onChange={handleChange} /></label><br/>
            <label>Degree: <input type="text" name="degree" value={job.degree} onChange={handleChange} /></label><br/>
            <label>Relocation: <select name="relocation" value={job.relocation} onChange={handleChange}><br/>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select></label><br/>
            <label>Salary Range:
                <input type="number" name="salaryRange.min" value={job.salaryRange.min} onChange={handleChange} /> -
                <input type="number" name="salaryRange.max" value={job.salaryRange.max} onChange={handleChange} />
            </label><br/>
            <label>Description: <textarea name="description" value={job.description} onChange={handleChange} /></label><br/>
            <button type="submit">Save</button>
        </form>
    )
}