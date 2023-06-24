
import { Link } from "react-router-dom";

const DiscovererItem = ({ discoverer }) => {

    const { name, occupation, id, photos } = discoverer

    return (
        <div className="discoverer-item">
            <Link to={`./${id}`}>
                {photos[0] ? <img className="small-img" src={photos[0].thumbnailUrl}></img> : ""}
                <h2 > {name}</h2>
            </Link>
            <span>{occupation}</span>
        </div>
    )
}

export default DiscovererItem