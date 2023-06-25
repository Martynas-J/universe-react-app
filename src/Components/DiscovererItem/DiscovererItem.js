import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { HUMAN_IMG_URL } from "../Config/Config";

const DiscovererItem = ({ discoverer }) => {

    const { name, occupation, id, photos } = discoverer

    return (
        <Card url={`./${id}`}>
            <img className="small-img" src={photos[0] ? photos[0].thumbnailUrl : HUMAN_IMG_URL}></img>
            <h2 > {name}</h2>
            <span>{occupation}</span>
        </Card >

    )
}

export default DiscovererItem