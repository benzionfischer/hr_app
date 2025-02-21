const { Link, NavLink, useNavigate } = ReactRouterDOM;
import { UserProfile } from "./UserProfile.jsx"


export function SideBar() {
    const navigate = useNavigate();

    function onBack() {
        navigate(-1);
    }

    return (
        <section className="side-bar">
            <UserProfile name="Bar" role="Human Resource"/>
            <nav className="side-bar-nav">
                <NavLink to="/home">Profile</NavLink> 
                <NavLink to="/job">Jobs</NavLink> 
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/candidates">Candidates</NavLink>
            </nav>
        </section>
    );
}
