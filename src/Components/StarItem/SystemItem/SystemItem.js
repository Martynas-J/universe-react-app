import { Link } from "react-router-dom";
import Card from "../../Card/Card";

const SystemItem = ({ system, onDelete  }) => {

    const { name, id, planets, stars} = system

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
        <div className="card-wrapper">
            <Card>
                <Link to={`./${id}`}><h2 >{name}</h2></Link>
                <Link to="/planets">({planets.length}<span> {planetsText}</span>)</Link>
                <Link to="/stars">({stars.length}<span> {starsText}</span>)</Link>
            </Card>
            <button className="deleteButton" onClick={() => onDelete(system.id)}> X</button>
        </div>
    )
}
export default SystemItem