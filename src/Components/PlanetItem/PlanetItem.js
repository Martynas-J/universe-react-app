
import { Link } from "react-router-dom";

const PlanetItem = ({ planet }) => {

    const { name, id, photos, satellites } = planet

    return (
        <div className="planet-item">
            <Link to={`./${id}`}>
                {photos[0] ? <img className="medium-img" src={photos[0].thumbnailUrl}></img> : ""}
                <h2 > {name}</h2>
            </Link>
            <span>Natural satellites ({satellites.length})</span>
        </div>
    )
}

export default PlanetItem