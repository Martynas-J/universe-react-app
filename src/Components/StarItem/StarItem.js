import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { STAR_IMG_URL } from "../Config/Config";

const StarItem = ({star}) => {
    const { name, id, system, systemId, photos  } = star

    return (
        <Card>
            <Link to={`./${id}`}><h2>{name}</h2></Link>
            <img className="medium-img" src={photos[0] ? photos[0].thumbnailUrl : STAR_IMG_URL}></img> 
            <Link to={`/systems/${systemId}`}><span>({system} system)</span></Link>
        </Card>
    )
}

export default StarItem