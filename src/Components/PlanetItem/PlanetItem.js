
import Card from "../Card/Card";
import { PLANET_IMG_URL } from "../Config/Config";

const PlanetItem = ({ planet }) => {

    const { name, id, photos, satellites } = planet

    return (
        <Card url={`./${id}`}>
             <img className="medium-img" src={photos[0] ? photos[0].thumbnailUrl : PLANET_IMG_URL}></img> 
            <h2 > {name}</h2>
            <span>Natural satellites ({satellites.length})</span>
        </Card>
    )
}

export default PlanetItem