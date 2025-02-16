const { useEffect, useState } = React

export function UserProfile() {

    const [user, setUser] = useState({ name: "Bar", role: "Human Resource", img: "assets/img/profile.png"})

    if (!user) return <p>Loading user data...</p>;

    return (
        <div className="profile">
            <div className="profile-picture">
                <img src="assets/img/profile.png" alt="Icon"/>
            </div>
            <div className="profile-name">
                <p>Bar</p>
                <p>Human Resource</p>
            </div>
        </div>
    );
}
