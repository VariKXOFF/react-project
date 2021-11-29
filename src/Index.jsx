import {Routes, Route, Link} from "react-router-dom"
import { MenPage } from "./pages/Men.jsx"
import { WomenPage } from "./pages/Women"
import { HomePage } from "./pages/HomePage"

function Index() {
    return (
        <>
            <header className="header">
                <Link to="/women" className="header__link">Women</Link>
                <Link to="/" className="header__link">La Fleur*</Link>
                <Link to="/men" className="header__link">Men</Link>
            </header>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/men" element={<MenPage/>}/>
                <Route path="/women" element={<WomenPage/>}/>
            </Routes>
        </>
    )
}
export default Index;