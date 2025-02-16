import { companyService } from "../services/company.service.js";
const { useEffect, useState } = React;

export function Company() {
    const [company, setCompany] = useState(null);

    useEffect(() => {
        loadCompany();
    }, []);

    function loadCompany() {
        let demoCompanyId = 1;
        companyService.get(demoCompanyId)
            .then(setCompany)
            .catch(err => {
                console.log('Problems getting company:', err);
            });
    }

    function handleEditClick() {
        document.getElementById("fileInput").click();
    }

    function handleFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setCompany(prevCompany => ({
                    ...prevCompany,
                    icon: e.target.result // Updates the company logo dynamically
                }));
            };
            reader.readAsDataURL(file);
            
        }
    }

    if (!company) return <p>Loading company data...</p>;

    return (
        <section className="company"> 
            <div className="company-logo">
                <img src={company.icon} alt="Icon"/>
            </div>
            <div className="company-logo-edit">
                <button className="company-logo-edit-btn" onClick={handleEditClick}>
                    <img src="assets/img/edit.png" alt="Edit Icon"/>
                </button>
                <input 
                    id="fileInput" 
                    type="file" 
                    accept="image/*" 
                    style={{ display: "none" }} 
                    onChange={handleFileChange}
                />
            </div>
            <div className="company-rectangle-position">
                <img src="assets/img/location.png" alt="Location Icon"/>
                {company.location}
            </div>
            <div className="company-rectangle-description">
                <img src="assets/img/company_description.png" alt="Description Icon"/> 
                <strong>{company.name}</strong>
                <div>{company.description}</div>
            </div>
        </section>
    );
}
