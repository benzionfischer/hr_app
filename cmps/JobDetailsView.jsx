const { useEffect, useState } = React;

// mode: ["view", "edit"]
export function JobDetailsView({ job }) {

    console.log("JobDetailsView: " + JSON.stringify(job.relocation))

    return (
        <section className="job-details-view">

            <div className="job-detail-description">
                <img src={`/public/suitcase.png`} alt="title" />
                <h1>{job.title}</h1>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />
                <img src="/assets/img/calendar.png" alt="Experience" />
                <span>{job.experience} Years experience</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />
                <img src="assets/img/light.png" alt="Skills" />
                <span>{job.skills}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />
                <img src="/assets/img/clock.png" alt="Work Type" />
                <span>Days in office: {job.daysInOfficeRange.min} - {job.daysInOfficeRange.max}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />
                <img src="/assets/img/location.png" alt="Location" />
                <span>{job.location}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />

                <img src="/assets/img/chat.png" alt="Skills" />
                <span>{job.languages}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />

                <img src="/assets/img/education.png" alt="Degree" />
                <span>{job.degree}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />

                <img src="/assets/img/globe.png" alt="Relocation" />
                <span>Relocation: {job.relocation === "true" ? "Yes" : "No"}</span>
            </div>

            <div className="job-detail-item">
                <input type="checkbox" />

                <img src="/assets/img/money.png" alt="Salary" />
                <span>Salary Range: {job.salaryRange.min} - {job.salaryRange.max}</span>
            </div>

            <div>
                <div className="job-detail-description">
                    <img src="/assets/img/information.png" alt="Description" />
                    <h1>Job Description</h1><br />
                </div>
                <div className="padding-left">{job.description}</div>
            </div>

        </section>);
}

