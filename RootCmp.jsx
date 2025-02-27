import { Team } from "./cmps/AboutCmps/Team.jsx"
import { Vision } from "./cmps/AboutCmps/Vision.jsx"
import { AppFooter } from "./cmps/AppFooter.jsx"
import { SideBar } from "./cmps/SideBar.jsx"
import { NotFound } from "./cmps/NotFound.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"
import { About } from "./pages/About.jsx"
import { JobInfo } from "./pages/JobInfo.jsx"
// import { CarEdit } from "./pages/CarEdit.jsx"
import { JobIndex } from "./pages/JobIndex.jsx"
import { Company } from "./pages/Company.jsx"
// import { JobEdit } from "./pages/JobEdit.jsx"


const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM


export function App() {
    return (
        <Router>
            <section className="app">
                <SideBar />
                <main className="page">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Company />} />
                        <Route path="/about" element={<About />}>
                            <Route path="/about/team" element={<Team />} />
                            <Route path="/about/vision" element={<Vision />} />
                        </Route>
                        <Route path="/job" element={<JobIndex />} />
                        <Route path="/job/:jobId/details" element={<JobInfo />} />
                        <Route path="/job/:jobId/stages" element={<JobInfo />} />
                        {/* <Route path="/car/edit" element={<CarEdit />} /> */}
                        {/* <Route path="/car/edit/:carId" element={<CarEdit />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                {/* <AppFooter /> */}
                {/* <UserMsg /> */}
            </section>
        </Router>

    )
} 