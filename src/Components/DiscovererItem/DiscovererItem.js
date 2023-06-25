import { Link } from "react-router-dom";
import Card from "../Card/Card";

const DiscovererItem = ({ discoverer }) => {

    const { name, occupation, id, photos } = discoverer

    return (
        <Card url={`./${id}`}>
            {photos[0] ? <img className="small-img" src={photos[0].thumbnailUrl}></img> : ""}
            <h2 > {name}</h2>
            <span>{occupation}</span>
        </Card >

    )
}

export default DiscovererItem