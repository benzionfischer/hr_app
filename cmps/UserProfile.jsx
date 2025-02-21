const { useEffect, useState } = React

export function UserProfile({ name, role} ) {

    const [user, setUser] = useState({ name: "Bar", role: "Human Resource", img: "assets/img/profile.png"})

    if (!user) return <p>Loading user data...</p>;

    return (
        <div className="profile">
            <div className="profile-picture">
                <img src="assets/img/profile.png" alt="Icon"/>
            </div>
            <div className="profile-details">
                <p>{name}</p>
                <p>{role}</p>
            </div>
        </div>
    );
}
