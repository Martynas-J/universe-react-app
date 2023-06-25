
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const PlanetItem = ({ planet }) => {

    const { name, id, photos, satellites } = planet

    return (
        <Card url={`./${id}`}>
            {photos[0] ? <img className="medium-img" src={photos[0].thumbnailUrl}></img> : ""}
            <h2 > {name}</h2>
            <span>Natural satellites ({satellites.length})</span>
        </Card>
    )
}

export default PlanetItem