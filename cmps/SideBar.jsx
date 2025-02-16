const { Link, NavLink, useNavigate } = ReactRouterDOM;

export function SideBar() {
    const navigate = useNavigate();

    function onBack() {
        navigate(-1);
    }

    return (
        <section className="side-bar">

            <div className="profile">
                <div className="profile-picture">
                    <img src="assets/img/profile.png" alt="Icon"/>
                </div>
                <div className="profile-name">
                    <p>Bar</p>
                    <p>Human Resource</p>
                </div>
            </div>

            <nav className="side-bar-nav">
                <NavLink to="/home">Profile</NavLink> 
                <NavLink to="/jobs">Jobs</NavLink> 
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/candidates">Candidates</NavLink>
            </nav>
        </section>
    );
}
