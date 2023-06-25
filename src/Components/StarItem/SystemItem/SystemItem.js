import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const SystemItem = ({ system }) => {

    const { name, id, planets, stars } = system

    let planetsText = ""
    let starsText = ""

    if (planets.length > 1) {
        planetsText = "Planets"
    } else if (planets.length === 1) {
        planetsText = "Planet"
    }

    if (stars.length > 1) {
        starsText = "Stars"
    } else if (stars.length === 1) {
        starsText = "Star"
    }

    return (
        <Card url={`./${id}`}>
            <h2 >{name}</h2>
            <Link to="/planets">({planets.length}<span> {planetsText}</span>)</Link>
            <Link to="/stars">({stars.length}<span> {starsText}</span>)</Link>
        </Card>
    )
}
export default SystemItem