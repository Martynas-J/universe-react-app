import { Link } from "react-router-dom"
import "./MenuItem.scss"
const MenuItem = () => {
    return (
        <div className="menu-bar">
            <div className="link-wrapper">
                <Link to="/">Home</Link>
                <Link to="/systems">System</Link>
                <Link to="/stars">Stars</Link>
            </div>
            <div className="link-wrapper">
                <Link to="/planets">Planets</Link>
                <Link to="/discoverers">Discoverers</Link>
                <Link to="/gallery">Gallery</Link>
            </div>


        </div>

    )
}

export default MenuItem