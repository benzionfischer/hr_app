const { Link, NavLink, useNavigate } = ReactRouterDOM


export function AppHeader() {

    const navigate = useNavigate()

    function onBack() {
        navigate(-1)
    }

    return (
        <section className="app-header full main-layout">
            <section>
                <h1>React Car App</h1>
                <button onClick={onBack}>Back</button>
                <nav className="app-nav">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/car">Cars</NavLink>
                </nav>
            </section>
        </section>
    )
}