
import { stageService } from "../services/stage.service.js";
import { reviewerService } from "../services/reviewer.service.js";
import { UserProfile } from "./UserProfile.jsx";
import { StageChain } from "./StageChain.jsx";

const { useEffect, useState } = React;

export function JobDetailsView({ job }) {
    return (
        <section className="job-details-content">
            {/* Edit button in the top-right corner */}
            <button className="job-details-edit-button">
                <img src="/assets/img/edit.png" alt="Edit" />
            </button>

            <div className="job-detail-description">
                <img src="/assets/img/suitcase.png" alt="title" />
                <h1>{job.title}</h1>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/calendar.png" alt="Experience" />
                <span>{job.experience} Years experience</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/light.png" alt="Skills" />
                <span>{job.skills}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/calendar.png" alt="Work Type" />
                <span>{job.workType}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/location.png" alt="Location" />
                <span>{job.location}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/clock.png" alt="Job Type" />
                <span>{job.jobType}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/education.png" alt="Degree" />
                <span>{job.degree}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/calendar.png" alt="Relocation" />
                <span>Relocation: {job.relocation ? "Yes" : "No"}</span>
            </div>

            <div className="job-detail-item">
                <img src="/assets/img/money.png" alt="Salary" />
                <span>Salary Range: {job.salaryRange.min} - {job.salaryRange.max}</span>
            </div>

            <div className="job-detail-description">
                <img src="/assets/img/information.png" alt="Description" />
                <span>{job.description}</span>
            </div>
        </section>
    );
}

